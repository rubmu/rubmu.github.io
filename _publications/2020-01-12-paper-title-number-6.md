---
title: "Построение защищённого NAS, либо "домашнего" мини-сервера"
collection: publications
permalink: /publication/2020-01-12-paper-title-number-6
excerpt: 'This paper is about the number 1. The number 2 is left for future work.'
date: 2020-01-12
venue: 'Journal 1'
paperurl: 'https://habr.com/ru/post/359346/'
citation: 'Your Name, You. (2009). &quot;Paper Title Number 1.&quot; <i>Journal 1</i>. 1(1).'
---
**Статьи цикла**:  

1.  [**Обзор материалов и литературы по NAS**](https://habr.com/post/418091/). По предложениям [пользователей](https://habr.com/users/mkulesh/) ссылки на материалы будут сведены в отдельную статью.
2.  [**Выбор железа**](https://habr.com/post/353012/). Описан один из вариантов выбора железа и дан краткий обзор рынка домашних и офисных NAS систем.
3.  [**Установка ОС, на которой будет строиться NAS**](https://habr.com/post/351932/). В [отдельной статье](https://habr.com/post/358914/) описано дополнение, позволяющее отказаться ото всех файловых систем, кроме ZFS.
4.  [**Проектирование поддерживающей инфраструктуры**](https://habr.com/post/359344/), которая будет лежать в основе всех сервисов NAS.
5.  [**Реализация поддерживающей инфраструктуры**](https://habr.com/post/415779/).
6.  [**Механизм аварийной удалённой разблокировки**](https://habr.com/post/419915/). Требуется для того, чтобы разблокировать систему, не имея к ней физического доступа.
7.  [**Повышение защищённости NAS**](https://habr.com/post/421279/). Исправление ошибок, допущенных в предыдущих статьях и описание Hardening процесса.
8.  [**Система контроля версий на базе Git**](https://habr.com/post/418883/). Установка Gitlab в контейнере.
9.  [**Система резервного копирования**](https://habr.com/ru/post/421251/). От регламента до установки ПО, где в качестве примера используется UrBackup.
10.  [**Персональное облако**](https://habr.com/post/430970/). Обеспечивает хранение персональных файлов пользователя, обмен файлами между пользователями, а также интеграцию различных сервисов между собой.
11.  [**Сквозная аутентификация контейнеров**](https://habr.com/ru/post/456894/).
12.  Управление файлами.
13.  Библиотека.
14.  Мультимедийная система 1: музыка.
15.  Мультимедийная система 2: медиа сервер.
16.  Фронтенд. Интерфейс, позволяющий быстро обращаться к сервисам.
17.  Заметки про управление контейнерами.  

Как видно из новостей, облака и сервисы крупных компаний — это удобно и надёжно, но далеко не всегда:  

* [Безопасности уделяется мало внимания](https://habr.com/company/pt/blog/308906/), несмотря на все заверения.
* [Смена тарифов зависит только от прихоти компании](https://habr.com/post/417715/).
* [Старые сервисы уходят](https://candoru.ru/2018/05/14/proshhaj-google-drive/) с неизвестными для пользователей последствиями.
* [Ваш аккаунт могут заблокировать в любой момент](https://habr.com/post/357280/) по [не вполне понятным причинам](https://habr.com/post/372899/).
* И не стоит даже говорить о том, что в один прекрасный момент доступ к вашим ресурсам вам [может заблокировать государство](https://sohabr.net/habr/post/354018/).  

Так что, кормить облачные сервисы — хорошо, но в некоторых случаях "своя рубашка ближе к телу".  

Изначально, одной из моих целей являлось исследование построения собственной системы, в частности NAS с возможностью работы "домашним сервером".  

Постепенно возникла идея, что в свете недавних событий, информация такого плана интересна, и неплохо бы аккумулировать её в одном месте, структурировать и дополнить.  
В итоге, должно сформироваться что-то вроде общедоступных best practices для энтузиастов, начиная от выбора и сборки железа и заканчивая программным обеспечением.  

Данная статья является оглавлением к статьям по построению NAS.  

По этим практикам желающие смогут построить свой NAS на приемлемом инженерном уровне.  
Затем, исправить ошибки, дополнить своими идеями и, при желании, опубликовать свой вариант, улучшив практики и пополнив общую базу.  

Основной практической целью построения системы было дать мне возможность безопасно работать с моими данными из любого места, где есть Интернет.  

Следствием из этого, главной задачей построения данного NAS стало обеспечение точки синхронизации в виде системы управления Git репозиториями и системы резервного копирования.  
Прочие задачи — это коллаборация через self-hosted облако, построение системы мультимедийной поддержки, репликация данных на сторонние облака и хранение относительно статичных данных, таких как книги, фильмы, музыка.

Со своим NAS всё намного гибче и, если вам действительно надо, вс намного гибче.  
Вы можете сделать тоже самое, используя, например какой-нибудь [Syncthing](https://ru.wikipedia.org/wiki/Syncthing), либо поднять лёгкое облако Seafile, клиент которого будет выполнять шифрование прямо у вас на машине и сливать в личное облако накопившиеся изменения без вашего участия, либо поставить более тяжёлый NextCloud и синхронизировать самостоятельно.  

И никакой провайдер вам тут не указ.

# ToTheEnd
Мне было чутка стрёмно выставлять свой Nextcloud напрямую в интернет. Пользовался через VPN. Потом сменился провайдер на работе и фрагментированные пакеты авторизации ikev2 перестали проходить. Потом выяснилось, что у родителей скорость скачивания с моего «облака» — 150 килобайт в секунду — особенность TCP на больших расстояниях из-за 1-3% потерь пакетов между нашими городами.   

Так пришло осознание, что на решение проблем с NAS я трачу больше нервов, чем получаю удовольствия.   

Я посчитал экономическую часть: 15 т.р. безвентиляторный микро-системник на Corei3 U с поддержкой AES-NI и QSV, чтобы домашние видео открывались по 3G с перекодированием на лету. Два внешних диска по терабайту с USB 3.0 — 3,5 т.р. каждый. И белый IP по 150-300 руб/мес * 12 мес * ~5 лет = 9..18 т.р, итого 30-40 т.р. за 5 лет без учёта непредвиденных поломок, обслуживания, электроэнергии. За эти деньги **можно пользоваться Яндекс.Диском 20 лет**, если они не изменят ценовую политику.  

Мои фоточки вижу только я и теоретически — ФСБ, а этих ребят я готов потерпеть. Гит у меня тоже на Яндексе, в виде папочек с номерами версий, поскольку программирую один. А из безвентиляторного микро-системника получился отличный десктоп, который можно не выключать 24/7. Даже игрушки тянет.