$(function () {
    let channel;

    let $channelForm = $('#channel-form');
    let $subsNotPublicBox = $('#subs-not-public-box');
    let $urlHelpBox = $('#url-help-box');
    const API_KEY = "AIzaSyAan769vckZkx9x3uKQVtyRfVbsrSwVblI"; // Restricted

    $('#url-help-link').click((e) => {
        e.preventDefault();
        if ($urlHelpBox.is(':visible')) {
            $urlHelpBox.slideUp(200);
        } else {
            $urlHelpBox.slideDown(200);
        }
    });

    $channelForm.submit((e) => {
        e.preventDefault();
        $channelForm.find('.error').empty();
        $urlHelpBox.slideUp(200);
        let channelUrl = $('#channel-url').val();
        if (!channelUrl) return false;

        $channelForm.find('.mdl-spinner').show();
        hideElement($('#results-box'));
        hideElement($subsNotPublicBox);
        $subsNotPublicBox.find('.error').empty();
        // Init client
        if (typeof gapi === 'undefined') {
            $channelForm.find('.error').text('Couldn\'t access Google\'s API. Maybe you use an ad-blocker which prevents it.');
            $channelForm.find('.mdl-spinner').hide();
        }
        gapi.load('client', function () {
            gapi.client.init({
                'apiKey': API_KEY,
                'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest']
            }).then(function () {

                // Get channel id
                let matches;
                if ((matches = /channel\/([\w-]+)/.exec(channelUrl)) !== null) {
                    channel = matches[1];
                    getSubscriptions();
                } else {
                    // Check if url is legacy /user/ url
                    if ((matches = /user\/([\w-]+)/.exec(channelUrl)) !== null) {
                        let user = matches[1];
                        // Get channel id
                        getChannelId(user).then((channelId) => {
                            channel = channelId;
                            getSubscriptions();
                        }).catch(() => {
                            $channelForm.find('.error').text('User not found');
                            $channelForm.find('.mdl-spinner').hide();
                        });
                    } else {
                        $channelForm.find('.error').text('Invalid URL');
                        $channelForm.find('.mdl-spinner').hide();
                    }
                }
            });
        });
    });

    $subsNotPublicBox.find('button').click(() => {
        hideElement($('#results-box'));
        $subsNotPublicBox.find('.mdl-spinner').show();
        $subsNotPublicBox.find('.error').empty();
        getSubscriptions();
    });

    function getChannelId(user) {
        return new Promise(
            (resolve, reject) => {
                let request = gapi.client.request({
                    'method': 'GET',
                    'path': '/youtube/v3/channels',
                    'params': {
                        'forUsername': user,
                        'part': 'snippet'
                    }
                });
                request.execute(function(response) {
                    if (response.items.length > 0) {
                        resolve(response.items[0].id);
                    } else {
                        reject();
                    }
                });
            }
        );
    }

    function getSubscriptions(pageToken = null, subscriptions = []) {
        let params = {
            'channelId': channel,
            'maxResults': 50,
            'part': 'snippet'
        };
        if (pageToken) {
            params.pageToken = pageToken;
        }

        let request = gapi.client.request({
            'method': 'GET',
            'path': '/youtube/v3/subscriptions',
            'params': params
        });
        request.execute(function(response) {
            if (response.error) {
                if (response.error.code === 404) {
                    $channelForm.find('.error').text('User not found');
                    $channelForm.find('.mdl-spinner').hide();
                } else if (response.error.code === 403) {
                    // Subs not public
                    $channelForm.find('.mdl-spinner').hide();
                    if (!$subsNotPublicBox.hasClass('hidden-opacity')) {
                        // Already visible
                        $subsNotPublicBox.find('.error').text('It\'s still impossible to fetch the subscriptions. Are ' +
                            'you sure you unchecked the correct checkbox? Did you save the changes? Are you sure you ' +
                            'entered the correct URL to the channel you\'re currently logged in?');
                        $subsNotPublicBox.find('.mdl-spinner').hide();
                    }
                    $subsNotPublicBox.removeClass('hidden-opacity');
                    $('.mdl-card .step').show();
                }
            } else {
                hideElement($subsNotPublicBox);
                $('.mdl-card .step').hide();
                if (!pageToken) {
                    $('#results-box').find('ul').empty();
                }
                $.each(response.items, (key, item) => {
                    subscriptions.push({
                        title: item.snippet.title,
                        channelId: item.snippet.resourceId.channelId,
                        date: new Date(Date.parse(item.snippet.publishedAt)),
                        thumbnail: item.snippet.thumbnails.default.url
                    });
                });
                if (response.nextPageToken) {
                    getSubscriptions(response.nextPageToken, subscriptions)
                } else {
                    // Order subscriptions
                    subscriptions.sort((a, b) => {
                        return b.date - a.date;
                    });

                    subscriptions.forEach((subsctiption) => {
                        addSubscriptionItem(subsctiption);
                    });

                    $('#results-box').removeClass('hidden-opacity');
                    $channelForm.find('.mdl-spinner').hide();
                    $subsNotPublicBox.find('.mdl-spinner').hide();
                    if (typeof gtag === 'function') {
                        gtag('event', 'fetched_subs', {'subs_count': response.pageInfo.totalResults});
                    }


                }
            }
        });
    }

    function addSubscriptionItem(item) {
        $('#results-box').find('ul').append('<li class="mdl-list__item">\n' +
            '                        <a href="https://www.youtube.com/channel/' + item.channelId + '" target="_blank">\n' +
            '                            <img src="' + item.thumbnail + '" />\n' +
            '                            <div>\n' +
            '                                <span class="channel-name">' + item.title + '</span><br />\n' +
            '                                <span class="subscription-date">' + item.date.toLocaleDateString(undefined, {year: 'numeric', month: 'long', day: 'numeric'}) + '</span>\n' +
            '                            </div>\n' +
            '                        </a>\n' +
            '                    </li>');
    }

    function hideElement(element) {
        element.css('display', 'none');
        element.addClass('hidden-opacity');
        setTimeout(() => {
            element.css('display', 'block');
        }, 300);
    }
});
