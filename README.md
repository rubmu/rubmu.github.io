A Github Pages template for academic websites configured to fit to my personal needs, this repository was forked (then detached) from https://academicpages.github.io.

Original work was forked (then detached) by Stuart Geiger from the Minimal Mistakes Jekyll Theme, which is © 2016 Michael Rose and released under the MIT License. See LICENSE.md.

I think I've got things running smoothly and fixed some major bugs, but feel free to file issues or make pull requests if you want to improve the generic template / theme.

See more info at https://academicpages.github.io/

To run locally (not on GitHub Pages, to serve on your own computer)
Clone the repository and made updates as detailed above
Make sure you have ruby-dev, bundler, and nodejs installed: sudo apt install ruby-dev ruby-bundler nodejs
Run bundle clean to clean up the directory (no need to run --force)
Run bundle install to install ruby dependencies. If you get errors, delete Gemfile.lock and try again.
Run bundle exec jekyll liveserve to generate the HTML and serve it from localhost:4000 the local server will automatically rebuild and refresh the pages on change.
