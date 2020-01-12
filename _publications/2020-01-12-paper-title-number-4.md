---
title: "CODESYS"
collection: publications
permalink: /publication/2020-01-12-paper-title-number-4
excerpt: 'This paper is about the number 4. The number 5 is left for future work.'
date: 2020-01-12
venue: 'ПЛК и CoDeSyS'
paperurl: 'http://prolog-plc.ru/codesys'
citation: 'Your Name, You. (2009). &quot;Paper Title Number 4.&quot; <i>Journal 4</i>. 1(1).'
---
# Публикации
[Программирование ПЛК в CODESYS](http://prolog-plc.ru/pb1 "Программирование ПЛК в CoDeSys")
[Общие сведения о CODESYS](http://prolog-plc.ru/pb2 "Общие сведения о CoDeSys")
[ПЛК и ПЛК ядра](http://prolog-plc.ru/node/21 "ПЛК и ПЛК ядра")

Сейчас на многих станках, линиях и агрегатах стоят панели оператора, либо сенсорные панельные контроллеры. Вы сами понимаете, что это очень удобно. На экране можно вывести множество функций: графики физических величин, архивация данных, рецепты, настройки оповещений по смс, рецепты вкусных булочек. Да и просто удобная и красивая индикация: лампочки, кнопочки и переключатели. На чём это всё пишется? Среди разнообразия ПО, я остановился на CoDeSyS 3.5. В CoDeSyS 3.5 визуализация обладает рядом преимуществ, которые будут рассматриваться в этой статье.

[**Из этой статьи вы узнаете:**](http://kip-world.ru/da-vy-tozhe-mozhete-delat-vizualizatsiyu-na-codesys-3-5-zaprosto.html)

> [В общих чертах о CoDeSyS 3.5](http://kip-world.ru/da-vy-tozhe-mozhete-delat-vizualizatsiyu-na-codesys-3-5-zaprosto.html#toc1)  
> [Визуализация CoDeSyS 3.5](http://kip-world.ru/da-vy-tozhe-mozhete-delat-vizualizatsiyu-na-codesys-3-5-zaprosto.html#toc2)  
> [Простейший пример проекта](http://kip-world.ru/da-vy-tozhe-mozhete-delat-vizualizatsiyu-na-codesys-3-5-zaprosto.html#toc3)

Привет, друзья! Это одна из основных сред разработки, которую я использую при внедрении и наладке автоматизации оборудования. Сегодня мы с вами поговорим во всех подробностях.  

## В общих чертах о CoDeSyS 3.5

Среда разработки является продуктом 3S-Smart Software. CoDeSyS-это аппаратно-независимая система для программирования ПЛК. Она поддерживает все языки [стандарта МЭК](http://kip-world.ru/chto-takoe-codesys2-3-i-s-chem-ego-edyat.html). Сочетает в себе объектно-ориентированное программирование(то есть с помощью визуальных функциональных блоков). Возможна работа с несколькими устройствами и приложениями.

[![Окно CoDeSyS 3](http://kip-world.ru/wp-content/uploads/2016/10/Rabochee_okno.png)](http://kip-world.ru/wp-content/uploads/2016/10/Rabochee_okno.png)

В чём же принципиальное отличие от [версии CoDeSyS 2.3](http://kip-world.ru/kak-programmirovat-na-codesys-2-3-novichku-legko.html)? Принципы программирования и построения языков остаются теми же. Давайте рассмотрим преимущества данной системы:

1.  Добавилось очень много полезных функций (в основном, касающиеся визуализации);
2.  Рабочее окно среды разработки стало гораздо удобнее;
3.  Существуют готовые библиотеки модулей ввода-вывода;
4.  Возможность Веб-визуализации;
5.  Ну и конечно самый главный козырь, это сама визуализация;

Мне, честно говоря, нравится работать в двух версиях, и в CoDeSyS 2.3, и в 3.5. Каждая по-своему удобна. Единственный недостаток новой среды заключается в том, что она в постоянной разработке, то есть всё время обновляется. И периодически при компиляции возникает куча ошибок, с которыми иногда невозможно разобраться.

Какое оборудование поддерживает CoDeSyS 3.5? Из отечественных контроллеров я знаю СПК сотой и двухсотой серии, ПЛК 323 и ПЛК304. Из «Буржуйских» мне известно о WAGO и Berghof.

![ПЛК](http://kip-world.ru/wp-content/uploads/2016/10/PLC.png)

На самом деле, работать в этой среде разработки сложно. Очень много нюансов. Каждый новый проект у меня начинается с самого начала.

Для изучения требуется перелопатить кучу инструкций и помучить ребят из тех. поддержки компании ОВЕН. В следующих своих статьях я ознакомлю вас со многими фишками, если будет кому интересно.  

## Визуализация CoDeSyS 3.5

Отдельно бы хотелось поговорить о визуализации в среде разработки. Это шикарный инструмент для реализации большинства задач в производстве. Весь технологический процесс можно отобразить на экранах, сделать красивые графики, архивацию, анимацию и т.п. Ниже приведу видео для наглядной демонстрации возможностей визуализации.

<iframe width="640" height="360" src="https://www.youtube.com/embed/G7SQyJaTnIE" frameborder="0" allowfullscreen="allowfullscreen"></iframe>


## Простейший пример проекта

Мы с вами сейчас создадим простой проект в среде разработки CoDeSyS 3.5. Давайте сделаем так, чтобы от кнопки включалась и выключалась лампочка.

Дистрибутив можно скачать с официального сайта компании ОВЕН. Стандартная установка. Всё, как обычно.

Запускаем программу и создаём проект.

[![Новый проект](http://kip-world.ru/wp-content/uploads/2016/10/Project_new.png)](http://kip-world.ru/wp-content/uploads/2016/10/Project_new.png)

Так как у меня под рукой нет сенсорной панели, я задам устройство-эмулятор, которое загружается с компьютера. Работать будем на наиболее наглядном языке CFC. Для начала в правом нижнем углу нам нужно запустить эмулятор контроллера.

Затем нажимаем 
<kbd>Scan Network</kbd>, и система должна обнаружить ваш компьютер.

[![Стартовый контроллер](http://kip-world.ru/wp-content/uploads/2016/10/Start_win3.png)](http://kip-world.ru/wp-content/uploads/2016/10/Start_win3.png)

Давайте создадим простейшую программу.

[![Простая программа](http://kip-world.ru/wp-content/uploads/2016/10/Programm.png)](http://kip-world.ru/wp-content/uploads/2016/10/Programm.png)

Добавляем визуализацию в наш проект. Правой кнопкой мыши вызываем контекстное меню и жмем 
<kbd>Добавить объект</kbd>.

[![Новая визуализация](http://kip-world.ru/wp-content/uploads/2016/10/New_VISU.png)](http://kip-world.ru/wp-content/uploads/2016/10/New_VISU.png)

Рисуем визуализацию под наш алгоритм. Выбираем элементы во вкладке панели инструментов.

[![Кнопка с лампой](http://kip-world.ru/wp-content/uploads/2016/10/Knopka_lampa.png)](http://kip-world.ru/wp-content/uploads/2016/10/Knopka_lampa.png)

Присваиваем переменные элементам во вкладке свойства. Для кнопки:

[![Свойства кнопки](http://kip-world.ru/wp-content/uploads/2016/10/Svoistvo_knopki.png)](http://kip-world.ru/wp-content/uploads/2016/10/Svoistvo_knopki.png)

Для лампочки:

[![Свойство лампочки](http://kip-world.ru/wp-content/uploads/2016/10/Svoictvo_Lamp.png)](http://kip-world.ru/wp-content/uploads/2016/10/Svoictvo_Lamp.png)

Из настроек на этом у нас всё. Теперь нажимаем на кнопку 
<kbd>Логин</kbd>. И в результате у вас должна получиться вот такая картинка:

![Кнопка нажата](http://kip-world.ru/wp-content/uploads/2016/10/Najatie.png)

Я реализовывал несколько проектов в этой программе. Но наиболее удачный и «красивый» проект у меня получился на **автоматизации** **холодильных камер**. Задача заключалась в том, чтобы охлаждать камеры до определённой температуры.

В первой камере охлаждается воздух с помощью заслонки в приточной системе. Во второй и третьей камере охлаждается воздух каскадным включением компрессоров в зависимости от времени наработки.  Все эти физические данные архивируются. В случае аварии контроллер отправляет сообщение смс на указанный номер.

Писал программу я на сенсорном панельном контроллере СПК207.03.CS.WEB. Давайте покажу вам несколько иллюстраций моей работы.

Главное меню панельного контроллера:

![Главное окно](http://kip-world.ru/wp-content/uploads/2016/10/Screenshot_1.png)

Аварии компрессоров:

![Аварии компрессоров](http://kip-world.ru/wp-content/uploads/2016/10/Screenshot_3.png)

Время наработки компрессоров:

![Время наработки](http://kip-world.ru/wp-content/uploads/2016/10/Screenshot_4.png)

И наконец, WEB-визуализация:

![Веб-визуализация](http://kip-world.ru/wp-content/uploads/2016/10/Screenshot_2-1.png)

Выкладываю видео, где вся эта система работает:

<iframe width="640" height="360" src="https://www.youtube.com/embed/5WU957mDPsU" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

## [Презентация о работе над проектом](https://www.asutp-volgograd.com/blog/presentation-tanks.html)

4/5/2017

[		1 Комментарий
](https://www.asutp-volgograd.com/blog/presentation-tanks.html#comments)

 ![Фотография](https://www.asutp-volgograd.com/uploads/1/5/4/0/15400238/published/2017-05-04-23-26-24715f.png?1493929933)  

Сегодня провел ещё одну лекцию в Политехе.   
Описал то как идет работа над новым проектом и попрограммировал в интерактивном режиме вместе с ребятами, которые пришли меня послушать. Задача была в разработке алгоритмов управления заполнения ёмкостей.  

Прикладываю [презентацию](https://www.asutp-volgograd.com/uploads/1/5/4/0/15400238/p.pptx) и [программу](https://www.asutp-volgograd.com/uploads/1/5/4/0/15400238/plc160_pre.pro) для CODESYS 2.3. Помимо кодесиса на сайте ОВЕН нужно скачать таргеты для ПЛК160, хотя переменные к конфигурации не привязаны и, возможно, заработет без них.   

Почитайте [о понимании задачи у Ильяхова](http://us9.campaign-archive2.com/?u=89138ced008e0282fe335b3a8&id=ecb83a6bb9&e=[UNIQID]).  

Заметки из блокнота:  

<font color="#818181">Особенности системы:<br>— Работа в «ручном» и автоматическом режимах<br>— В автомате емкости наполняются одновременно, но независимо<br>— Ручной режим: программный, через ПЛК<br>— При наполнении включается скважинный насос<br>— Защита от перелива<br>— Защита насоса от сухого хода<br><br>Ёмкость (TANK):<br>— уровень минимальный minLvl<br>— уровень средний midLvl<br>— уровень максимальный maxLvl<br>— уровень аварийный alrLvl<br>— закрыта closed<br>— открыта opened<br>— открыть open<br>— авария alarm</font>

[		1 Комментарий
	](https://www.asutp-volgograd.com/blog/presentation-tanks.html#comments)

## [Каскадное управление котлами на ПЛК. Температурно-временные интегралы](https://www.asutp-volgograd.com/blog/cascade.html)

6/3/2016

[		24 Комментарии
](https://www.asutp-volgograd.com/blog/cascade.html#comments)

![Изображение](https://www.asutp-volgograd.com/uploads/1/5/4/0/15400238/7828648eefc.png?763)

​В недавнем проекте по автоматизации котельных в Оренбургской области — ПЛК управляет каскадом котлов, от двух до четырёх штук.  

До этого программировал только каскады насосов с частотными преобразователями и алгоритм строился на анализе частоты и давления. Тут всё просто — запущенные частотники работают на одной частоте. Если дошли до максимума, а давления мало — подключаем ещё один. И наоборот, частота упала ниже заданной границы — отключаем.  

Но в случае котлов анализируется один единственный параметр — создаваемая ими температура воды в котловом контуре. Как, зная эту температуру и уставку, определить сколько котлов должно работать?  

Ответ — с помощью **температурно-временных интегралов**. Да, звучит не особенно увлекательно и лучше сходите в кино, но если приспичило узнать о каскадном управлении — вперед.  

​  
_**PS**. Интеграл называется температурно-временным только условно. Описывать я буду математический алгоритм, который с успехом применяется и к каскаду насосов, опираясь на создаваемое ими давление.  

**PPS**. Программный код функционального блока на языке ST прилагается. Халява!  

​_  

[Подробнее](https://www.asutp-volgograd.com/blog/cascade.html)

[		24 Комментарии
	](https://www.asutp-volgograd.com/blog/cascade.html#comments)

## [Raspberry Pi в роли ПЛК на CODESYS. Введение](https://www.asutp-volgograd.com/blog/raspberry-pi-codesys-intro.html)

6/2/2016

[		33 Комментарии
](https://www.asutp-volgograd.com/blog/raspberry-pi-codesys-intro.html#comments)

[![Изображение](https://www.asutp-volgograd.com/uploads/1/5/4/0/15400238/96040760960.jpg?1454775748)](https://www.asutp-volgograd.com/blog/raspberry-pi-codesys-intro.html)

Raspberry Pi — мегапопулярный бюджетный микрокомпьютер, детище британской магии. Стараниями ребят из 3S Software появилась возможность запустить на нём CODESYS третьей версии. С тех пор обновления идут одно за другим и поддерживаются последние патчи среды, а вот у производителей ПЛК отставание на год минимум.  

​  

Сам микрокомпьютер продаётся в любой темной подворотне и на Алиэкспрессе.  

Девайс у меня полгода. Использовал его для тестирования функций CODESYS 3.5, но сейчас задумал применить на реальном объекте.   

​  
_PS. Если изучаете третий CODESYS — смело покупайте Raspberry. На симуляторе далеко не уедешь, а обычные ПЛК дороговаты._  

[Подробнее](https://www.asutp-volgograd.com/blog/raspberry-pi-codesys-intro.html)

[		33 Комментарии
	](https://www.asutp-volgograd.com/blog/raspberry-pi-codesys-intro.html#comments)

## [Советы по программированию ПЛК с примерами в среде CODESYS](https://www.asutp-volgograd.com/blog/codesys-advices.html)

13/6/2015

[		20 Комментарии
](https://www.asutp-volgograd.com/blog/codesys-advices.html#comments)

Советы конкретные и философские. С примерами и скриншотами. Буду дополнять.

 ![Изображение](https://www.asutp-volgograd.com/uploads/1/5/4/0/15400238/2565077821f.png?455)   

[Подробнее](https://www.asutp-volgograd.com/blog/codesys-advices.html)

[		20 Комментарии
	](https://www.asutp-volgograd.com/blog/codesys-advices.html#comments)

## [ФБ PUMPS: простой блок переключения насосов в Codesys 2.3](https://www.asutp-volgograd.com/blog/pumps-codesys.html)

18/3/2015

[		12 Комментарии
](https://www.asutp-volgograd.com/blog/pumps-codesys.html#comments)

Вечерком [по заказу разработал простой блок](https://www.asutp-volgograd.com/programmirovanie-plc.html) для автоматического перехода между тремя насосами по таймеру и авариям. Также я снабдил его функцией принудительного перехода, функцией выбора первого насоса и возможностью после пропадания питания начинать работу с последнего насоса и того времени, на котором остановился таймер.

 ![Изображение](https://www.asutp-volgograd.com/uploads/1/5/4/0/15400238/6358414250c.png?456)   

[Подробнее](https://www.asutp-volgograd.com/blog/pumps-codesys.html)

[		12 Комментарии
	](https://www.asutp-volgograd.com/blog/pumps-codesys.html#comments)

## [Функция "График" по 10 или менее точкам с сортировкой в CoDeSys](https://www.asutp-volgograd.com/blog/graph-codesys.html)

13/2/2014

[		7 Комментарии
](https://www.asutp-volgograd.com/blog/graph-codesys.html#comments)

[ ![Изображение](https://www.asutp-volgograd.com/uploads/1/5/4/0/15400238/966066411b9.png?303)](https://www.asutp-volgograd.com/blog/graph-codesys.html) 

Выкладываю **функцию для построения кусочно-линейных графиков** по выбранному числу точек (максимум 10) с возможностью сортировки. Исходники открыты, как всегда.  

[Подробнее](https://www.asutp-volgograd.com/blog/graph-codesys.html)

[		7 Комментарии
	](https://www.asutp-volgograd.com/blog/graph-codesys.html#comments)

## [Управление по RS-485 (Modbus RTU) частотным преобразователем Hyundai N700E](https://www.asutp-volgograd.com/blog/rs-485-modbus-rtu-hyundai-n700e.html)

16/7/2013

[		16 Комментарии
](https://www.asutp-volgograd.com/blog/rs-485-modbus-rtu-hyundai-n700e.html#comments)

[![Изображение](https://www.asutp-volgograd.com/uploads/1/5/4/0/15400238/7789060eda8.gif?267)](https://www.asutp-volgograd.com/blog/rs-485-modbus-rtu-hyundai-n700e.html)

Решились-таки на работе использовать **интерфейс RS-485 для управления** преобразователями частоты Hyundai и Erman (не советую использовать).   

[Подробнее](https://www.asutp-volgograd.com/blog/rs-485-modbus-rtu-hyundai-n700e.html)

[		16 Комментарии
	](https://www.asutp-volgograd.com/blog/rs-485-modbus-rtu-hyundai-n700e.html#comments)

## [Конфигурации ОВЕН ПЛК 150 и ПЛК 160 в CoDeSys](https://www.asutp-volgograd.com/blog/configuration-plc-codesys.html)

16/6/2013

[		2 Комментарии
](https://www.asutp-volgograd.com/blog/configuration-plc-codesys.html#comments)

[![Изображение](https://www.asutp-volgograd.com/uploads/1/5/4/0/15400238/5481442c06d.png?690)](https://www.asutp-volgograd.com/blog/configuration-plc-codesys.html)

Продолжаю делиться кодом и опытом. В этом посте выкладываю выстраданные экспортированные **файлы универсальных конфигураций для ОВЕН ПЛК 150 и ПЛК 160**. В них нет ничего особенно сложного, просто пришел я к их структуре не сразу.    

[Подробнее](https://www.asutp-volgograd.com/blog/configuration-plc-codesys.html)

[		2 Комментарии
	](https://www.asutp-volgograd.com/blog/configuration-plc-codesys.html#comments)

## [ПИД-регулятор для преобразователей частоты в CoDeSys](https://www.asutp-volgograd.com/blog/pid-regulator-for-inverters-codesys.html)

19/5/2013

[		4 Комментарии
](https://www.asutp-volgograd.com/blog/pid-regulator-for-inverters-codesys.html#comments)

 ![ПИД-регулятор для частотников в CoDeSys](https://www.asutp-volgograd.com/uploads/1/5/4/0/15400238/97289cfee.jpg?478) 

Делюсь функциональным блоком (**от 24.02.2014**) ПИД-регулятора для [частотных преобразователей](https://www.asutp-volgograd.com/chastotnye-preobrazovateli.html). Он крайне прост и мало чем отличается от [блока для управления КЗР](https://www.asutp-volgograd.com/blog/pid-regulator-codesys.html), описанного в прошлый раз.  

[Подробнее](https://www.asutp-volgograd.com/blog/pid-regulator-for-inverters-codesys.html)

[		4 Комментарии
	](https://www.asutp-volgograd.com/blog/pid-regulator-for-inverters-codesys.html#comments)

## [ПИД-регулятор для КЗР в CoDeSys](https://www.asutp-volgograd.com/blog/pid-regulator-codesys.html)

14/5/2013

[		66 Комментарии
](https://www.asutp-volgograd.com/blog/pid-regulator-codesys.html#comments)

![Изображение](https://www.asutp-volgograd.com/uploads/1/5/4/0/15400238/3820786f770.jpg?482)

В посте вы найдете код и подробное описание работающего функционального блока ПИД-регулятора для управления [запорно-регулирующим клапаном](https://www.asutp-volgograd.com/ispolnitelnye-mehanizmy.html) (КЗР) с электроприводом и дискретным управлением (клапану подаются сигналы «больше» и «меньше»). **Теперь блок универсален**: вы можете использовать встроенный в клапан датчик положения, а можете и не использовать. Файл, с экспортированным из CoDeSys v2.3 блоком, приложен в конце статьи.    

[Подробнее](https://www.asutp-volgograd.com/blog/pid-regulator-codesys.html)

[		66 Комментарии
	](https://www.asutp-volgograd.com/blog/pid-regulator-codesys.html#comments)

## [Продвинутый курс программирования ОВЕН ПЛК в CoDeSys](https://www.asutp-volgograd.com/blog/-codesys.html)

19/2/2013

[		3 Комментарии
](https://www.asutp-volgograd.com/blog/-codesys.html#comments)

 ![Изображение](https://www.asutp-volgograd.com/uploads/1/5/4/0/15400238/1291828dc91.jpg?385) 

На прошлой неделе смотался в Москву на "[Продвинутый учебный курс по программированию ОВЕН ПЛК в среде CoDeSys](http://www.owen.ru/text/81566228)", с трудом выбив командировку на работе. Доволен.     
