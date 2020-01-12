---
title: "Уперся — прокачался, или Три истории о том, как айтишники скилы меняли"
collection: publications
permalink: /publication/2020-01-12-paper-title-number-3
excerpt: 'This paper is about the number 3. The number 4 is left for future work.'
date: 2020-01-12
venue: 'Journal 1'
paperurl: 'http://academicpages.github.io/files/paper3.pdf'
citation: 'Your Name, You. (2015). &quot;Paper Title Number 3.&quot; <i>Journal 1</i>. 1(3).'
---
В IT невозможно дойти до предела совершенства — всегда есть куда расти. То, в каком режиме специалист получает знания, зависит от обстоятельств и везения. Иногда наступает момент, когда срочно получить необходимый навык или освоить новую область знаний становится критически важным, поскольку от этого зависит карьера. Ниже — три истории зрелых IT-специалистов о том, как решение продолжать учиться повлияло на их путь в профессии.

<!-- T118 -->

---

<!-- T120 -->

Как админ на Kubernetеs переезжал

<!-- T107 -->

<meta itemprop="image" content="https://habrastorage.org/getpro/tmtm/articles/tld/images/8157929/tild3634-3534-4331-b663-316466646466__image2.png">![](https://habrastorage.org/getpro/tmtm/articles/tld/images/8157929/tild3634-3534-4331-b663-316466646466__image2.png)

<!-- T004 -->

Год назад меня пригласили системным администратором в компанию, которая занималась разработками в области интернета вещей для городской среды. Мой предшественник был классическим админом с бородой и в свитере, он не заморачивался со сложными и изящными решениями. Работа IT строилась по следующей схеме: разработчики писали код локально, деплоили на сервера по ftp, часто багфиксили прямо на серверах. Вся работа упиралась в тимлида разработки, он единственный знал, куда положить код, как его запустить и на какой магии вообще все работает.   

<!-- T004 -->

Первая же задача, которая погребла меня под собой — сделать стейджинг по образу существующего прода, уходящего корнями далеко в историю. Мы с тимлидом разработчиков начали потихоньку копировать настройки, ставить пакеты, переносить код.

<!-- T004 -->

Стейджинг не работал.

<!-- T004 -->

Постоянно всплывали новые затыки. То очередной пакет забыли доставить, то потеряли хитро запрятанный конфиг.

<!-- T004 -->

Через 4 дня проект на стейджинге заработал. Меня попросили создать два аналогичных стенда, и тонко намекнули, что проект в компании не один.

<!-- t254 -->

“

**Впечатленный перспективной карьерой серверного ассенизатора, я понял, что настройки нужно описать и где-то зафиксировать. Почитав о разных методах автоматизации, я решил попробовать [Ansible](https://u.tmtm.ru/ansible), который показался мне простым и удобным.**

<!-- T004 -->

Пока искал информацию, наткнулся на курс по Ansible и решил его пройти, чтобы было проще освоить новую технологию. Тимлид разрабов порекомендовал заодно пройти курс по [Docker](https://u.tmtm.ru/docker), потому что хотел потихоньку переводить на него проекты.  

<!-- T004 -->

За выходные я прошел оба курса и начал потихоньку экспериментировать с Infrastructure as a Code. С непривычки описывать настройки серверов как роли Ansible получалось плохо: плейбуки постоянно падали. От нелепых ошибок (например, неправильно поставлю отступы) я перешел к серьезным трудностям: начал разбираться, как в Ansible реализуются циклы, разворачиваются словари, вызываются хендлеры. К счастью, компания давала мне время и ресурсы на эксперименты, понимая, что я пытаюсь автоматизировать процесс и серьезно выиграть в будущем.

<!-- T004 -->

За пару месяцев наша инфраструктура переехала в Ansible. Разработчики начали экспериментировать с Docker, и надо было готовить инфраструктуру под него.  

<!-- T004 -->

Поначалу мы сталкивались с классическими проблемами: образы Docker весом в гигабайты, пересборка с нуля на каждый чих, попытки впихнуть невпихуемое (страшное легаси) в контейнеры.

<!-- t254 -->

“

**Я знал best practice из курса, но мне не хватало авторитета и практических навыков, чтобы убеждать разработчиков. Поэтому я потихоньку сам улучшал их образы и наглядно показывал разницу.**

<!-- T004 -->

Со временем Docker нормально заработал, мы обросли процессом CI и стали автоматизировать инфраструктуру.

<!-- T004 -->

Руководство позитивно отнеслось к внедрениям, но история на этом не заканчивается. Ведь когда стало хорошо, хочется еще лучше. Три месяца назад мы неделями поднимали новые сервера. Теперь стояла задача поднимать динамические стенды и деплоить canary релизы. Мы начали строить бесшовный деплой, выводить контейнеры из балансировки при обновлении и возвращать их после. Постепенно система начала обрастать тоннами баша и Ansible. Сложность системы превысила возможности моего мозга. Мы просто лепили заплатки и костыли. Стало ясно, что пора совершать переход на новую ступень.   

<!-- T004 -->

Мы искали готовое решение для управления и оркестрации наших проектов. Наткнулись на Kubernetes и увидели в нем кучу функций, уже реализованных нашими башами и костылями, плюс серьезный задел на будущее. Но сам переход изрядно пугал. Система выглядела очень объемной и сложной. Менять свою неподъемную и непонятную систему на чужую неподъемную и непонятную — странная идея.

<!-- T004 -->

Официальная документация запутанная, а статьи в интернете раскрывали отдельные узкие аспекты или рассказывали, как развернуть одной кнопкой Kubernetes и остаться с ним наедине в пустой комнате.

<!-- T004 -->

Тут пришла рассылка, что появился онлайн-курс [«Слёрм Kubernetes»](https://u.tmtm.ru/kubernetes), мы с коллегой прошли его и сейчас экспериментируем с кластером. Выводить его в прод еще страшно, но мы активно к этому готовимся. По плану в следующем году окончательно переедем в Kubernetes.

<!-- T120 -->

Как аналитик дата-сайентистом стал

<!-- T107 -->

<meta itemprop="image" content="https://habrastorage.org/getpro/tmtm/articles/tld/images/8157929/tild6365-3337-4334-b633-356233663737__image1.png">![](https://habrastorage.org/getpro/tmtm/articles/tld/images/8157929/tild6365-3337-4334-b633-356233663737__image1.png)

<!-- T004 -->

Я расскажу о том, как сменил сферу деятельности и стал дата-саентистом. У меня экономическое образование, которое я получил в одном из московских вузов по профилю «Экономико-математические методы». Уже во время учебы я начал работать в фонде прямых инвестиций, где знание точных наук приветствовалось, но почти не использовалось.   

<!-- T004 -->

Начинал я аналитиком, постепенно стал участвовать в организации сделок и накопил опыт управления десятком сотрудников. За пять лет дорос до заместителя директора департамента и в целом был доволен — карьера складывалась не хуже, чем у других. Однако мою работу сложно было назвать высокотехнологичной, скорее, наоборот: требовалось разбираться с уставными документами, вникать в суть соглашений, бесконечно обсуждать смысл с юристами и даже бывать в судах.

<!-- T004 -->

Не спорю, в этой области тоже требуется определенная изобретательность, я бы даже сказал — хитроумие: моя ценность как специалиста росла пропорционально числу тех неформальных ситуаций, из которых удалось выбраться без критических потерь. Но ведь не об этом я изначально мечтал! Вокруг — новая экономика и технологии, поражающие воображение. Где мы присутствуем с самой прозаичной стороны, в которой живут уставы, акционерные соглашения, претензии. Я решил, что в следующие десять лет хочу получать от работы максимум удовольствия, поэтому начал неспешно подыскивать другое место.

<!-- T004 -->

Вскоре со мной связались знакомые, которые искали математика, способного возглавить проект по обработке данных в одной крупной фирме. Вакансия меня заинтересовала, я сходил на собеседование, после чего сделал три вывода. Во-первых, что Data Science — крайне перспективная отрасль. Во-вторых, я понял, что потребность в решении конкретных задач не всегда четко сформулирована (кроме как «мы хотим зарабатывать на данных»). По сути, та компания хотела переманить тимлида, который уже делал подобные проекты для конкурентов и обладал готовой экспертизой. И третий вывод: чтобы занять подобную вакансию, мне нужен практический опыт.

<!-- t254 -->

“

**Я подумал, что медлить дальше нельзя — мне нужны были знания достаточного (но не чрезмерного) уровня, практические навыки и диплом по Data Science. Можно было начать с чтения книжек, но я хотел знать, каков сейчас минимальный джентльменский набор: что знают типичные претенденты на ту должность, которая меня так заинтересовала.** 

<!-- T004 -->

Поэтому я решил, что лучше всего онлайн-курс на 1–2 семестра с отработкой навыков на реальных задачах, и стал его искать. Стоимость курса проблемой не была.  

<!-- T004 -->

Вскоре я остановился на [курсе Data Science](https://u.tmtm.ru/DST_course) от Skillfactory, в пользу которого сыграли практические занятия и хакатоны. Кроме того, мне понравился состав менторов. Было важно попробовать: смогу ли я вписаться в коллектив людей, которые работают над такими задачами и в такой среде. Всё-таки это совсем не то же, что препираться с юристами по поводу документов. Поэтому важно было попробовать выйти на несколько дней из интернета и поработать в реальной жизни.  

<!-- T004 -->

Обучение началось с языка Python, которого я раньше не знал. В нем я упражнялся постоянно, понимая, что если не создам базу, то дальнейшие модули пропадут зря. Ни шока, ни ужаса от Python я не испытал — в школе и вузе у меня было программирование. Язык как язык, со своими приколами и причудами. Наверное, если бы не библиотеки, он оставался бы одним из многих. Библиотеки же начались со второго модуля вместе с NumPy и Matplotlib. Мы научились рисовать графики и применять Pandas для очистки и группировки данных, вычисления базовых статистик. Нельзя сказать, что я впервые слышал про таблицы и гистограммы — это было даже в институтском курсе статистики. Но про feature engineering (инжиниринг признаков) там ничего не было. Кроме того, в вузе это были слова с примерами в Excel, которые, при всем уважении к VBA, все делали «руками». А питоновские библиотеки позволяли брать данные с тысяч web-источников, включая API соцсети ВК. И это уже было похоже на то, ради чего я в это ввязался.

<!-- T004 -->

Кроме того, частью обучения был сквозной курс. В нем мы отвлеклись от теории и перешли к реальным задачам, которые постепенно усложнялись. Начав с поиска аномалий и выбросов в данных, пройдя через классификацию спама и прототипирования моделей, мы добрались до NLP (Natural language processing) и распознавания изображений. Заодно научились писать правильные слова в резюме для Data science и поучаствовали в соревнованиях на Kaggle под руководством ментора.

<!-- T004 -->

Правда, после того как нам дали попробовать новой жизни, пришлось на время вернуться к старой. Математический модуль включал линейную алгебру, матан, тервер и статистику, которые я проходил в вузе. Новыми для меня стали методы анализа временных рядов ARMA и ARIMA — о них я раньше тоже слышал, однако на практике не пробовал. Главным же для меня оказалось то, что теоретический модуль подкреплялся изучением пакета scikit-learn и построением наивного байесовского классификатора (НБК). Листая книжки, я уже уяснил, что пакет scikit-learn популярен, его реально используют. Про применение НБК я тоже не раз читал, в частности, что он используется в рекомендательных системах и при обработке текстов. Это были необходимые базовые этапы, прохождение которых давало тот самый твердый фундамент.

<!-- T004 -->

На модуле машинного обучения новые знания стали меня переполнять: если про кластерный анализ я уже слышал, то со случайным лесом, бустингом и стекингом познакомился впервые. Поэтому я смотрел все видео и выполнял задания. Сам я был не слишком активным пользователем Slack, но комментарии других мне помогали. Главным событием этого этапа стал хакатон: мы скачали когортные данные о заказах услуг, выбрали алгоритм предиктивной аналитики. Нашей задачей было предсказать, кто из клиентов уйдет, а кому можно адресовать новые предложения. После хакатона осталось ощущение, что я сделал реальный проект в ML.

<!-- T004 -->

Тем временем прошло четыре месяца. Я чувствовал себя уверенно в качестве дата-сайентиста. Если бы та первая важная для меня встреча состоялась сейчас, она, возможно, имела бы другой результат. Я набрался терпения и одолел оставшиеся модули, тем более что начались хитовые разделы, знание которых особенно востребовано на рынке: создание моделей промышленного качества на основе классического ML и нейронных сетей с использованием библиотеки Scikit-learn и платформы TensorFlow.  

<!-- t254 -->

“

**Одолев этот непростой раздел, я понял, что моим основным конкурентным преимуществом является сочетание практического опыта управления коллективом с пониманием, что такое ML и Data Science и как это работает.**

<!-- T004 -->

Практика это подтвердила — вскоре я перешел на работу в другую финансовую компанию, где руковожу командой, которая применяет машинное обучение для решения двух задач. Первая задача — управление контентом. У нашей компании один из лидирующих в финансовой нише сайт, публикующий поток новостей, аналитики и экспертных мнений. Но какие из этих текстов продают наши услуги? Мы пытаемся ответить на этот вопрос и сбалансировать различный контент, измерив его бизнес-эффект. Кроме того, у нас есть данные о том, что клиенты читают, лайкают и что покупают (статистика трансакций). И из этого вытекает вторая задача — агрегирование и интеграция клиентских данных, создание поведенческих моделей.

<!-- T004 -->

Пока что мне не скучно, и думаю, что скучно станет нескоро. Те знания, которые я получил на курсах, теперь выглядят вполне естественно, и к ним ежедневно добавляются новые. Более того, я вижу, что спрос на мои знания и навыки на рынке достаточно велик, чтобы утверждать: в ближайшие 10 лет не я буду искать работу, а работа будет искать меня.

<!-- T120 -->

Как фронтенд до бэкенда довел

<!-- T107 -->

<meta itemprop="image" content="https://habrastorage.org/getpro/tmtm/articles/tld/images/8157929/tild6537-3365-4134-b563-613837616463__image4.png">![](https://habrastorage.org/getpro/tmtm/articles/tld/images/8157929/tild6537-3365-4134-b563-613837616463__image4.png)

<!-- T004 -->

Около трех лет я занимался фронтендом, а именно поддержкой клиентской части корпоративного сайта небольшой компании. Это была моя первая постоянная работа после выпуска, а учился я на кафедре прикладной математики в техническом вузе. После окончания учебы научный руководитель звал меня идти к нему в аспирантуру. Я был нужен, чтобы продолжать делать программу его модификации метода Монте-Карло по схеме марковской цепи, которая составляла основу моей дипломной работы. Для этого я использовал Python с пакетом PyMC. Не могу сказать, что меня особенно захватывала научная работа, слишком уж далекой она казалась от реальной жизни. Однако я вложил в нее уже много времени, да и руководителя кидать не хотелось. И я не отказался, объяснив при этом научруку, что параллельно устроюсь на полный рабочий день.   

<!-- T004 -->

К тому времени я, как и большинство моих сокурсников, давно знал PhP, JavaScript, не говоря уже про HTML и CSS, и понемногу делал сайты. Работу с этими скилами я нашел без особого труда.

<!-- T004 -->

И поначалу моя работа была довольно интересной, однако через год-полтора задачи потеряли новизну и стали рутинными. До меня созданием корпоративного ресурса уже занималось несколько сотрудников, и теперь основная деятельность состояла в том, чтобы ежедневно поддерживать сайт, преимущественно состоявший из легаси-кода. И это оказалось не очень занимательно. В то время как технологии бурно развивались, и вся сфера фронтенда вместе с ними, в моей работе ничего особо нового не происходило. Понятно, что сайт фирмы, какие фичи к нему ни добавляй, это не Amazon и не Facebook, да и не должен таким становиться. Я стал ощущать себя обитателем тихого провинциального городка, живущего своей обособленной жизнью в стороне от технического прогресса. Захотелось выглянуть наружу — посмотреть, куда растут другие люди.

<!-- T004 -->

На профильной конференции, куда я отправился за новыми знаниями, темы секции фронтенда сплошь состояли из названий незнакомых мне технологий: React, Angular, Vue.js, Webpack, Rollup. От обилия вариантов разбегались глаза, и было непонятно, с чего начать. Выслушав несколько докладов, я понял, что сперва надо разобраться, что из всего этого изобилия реально пригодится. Иначе останется зависть к тем, кто это все делает и досада, что я прошел мимо того, что действительно было нужно. К тому же надо было понять, как убедить руководство в необходимости обновления. А затевать изучение ради изучения не хотелось. Для этого у меня была аспирантура.

<!-- T004 -->

Конечно, докладчику такие вопросы в лоб не задашь, поэтому я решил вкратце обрисовать мою ситуацию и спросить совета. В перерыве между докладами я отправился на кофе-брейк и завел разговор с одним из выступавших. Вопрос сформулировал аккуратно: какой фреймворк лучше подойдет для решения задач моей компании?   

<!-- T004 -->

Сразу образовалась группа заинтересованных. Когда я поблагодарил собеседника и перевел дух, ко мне обратилась девушка, которая все это время внимательно прислушивалась к беседе. Как выяснилось, она была рекрутером, искавшим кандидатов на несколько вакансий, правда, не на фронтенд. Но среди них оказались и интересные. Особенно заинтриговала меня вакансия из сферы обработки данных. Набор компетенций выглядел довольно близко к тому, чем я занимался в аспирантуре. Кто бы мог подумать, что теперь спрос на это есть не только где-то у них на Wall Street, но и в Москве.

<!-- t254 -->

“

**Я вышел с конференции со сверкающими глазами, чтобы вернуться в рутину, живущую по принципу «от добра добра не ищут».**

<!-- T004 -->

Ощущение было не из самых веселых, и я начал размышлять, какие у меня есть варианты. Первый — окончательно погрузиться во фронтенд-фреймворки. Второй — вернуться к алгоритмам и случайным процессам, благо, я не успел их забыть полностью. Роль энтузиаста, который будет предлагать начальству внедрять новые технологии и получать снисходительный отказ, мне не улыбалась.

<!-- T004 -->

Вы догадываетесь, что когда рекрутер позвонила и предложила еще пообщаться, я не заставил себя уговаривать. Возможность задействовать свой математический багаж и добавить к нему практический опыт разработчика выглядела как шанс выйти на новый уровень. Через неделю у меня было интервью со специалистами финансового холдинга из отдела, который разрабатывал алгоритмы анализа финансовых данных.

<!-- T004 -->

Теперь, пройдя обучение от компании, я разрабатываю такие алгоритмы. Оклад, хотя это и не главное, почти вдвое превосходит то, на что я мог рассчитывать на старом месте.

<!-- T004 -->

Что, если бы рекрутеры в свое время пришли прямо в вуз? Не уверен, что в тот момент я бы заинтересовался. Работа у них выглядела бы как продолжение того же, что и раньше. Мне казалось, что это какая-то очень уж узкая ниша. Да и скажем честно, я тоже был им не особенно интересен — не больше, чем другие. А на фронтенде я стал профессиональным разработчиком и научился понимать работу программиста. Годы работы в фирме не прошли зря. Из подающего надежды студента с профильной специализацией, но лишь одного из многих, я превратился в практика с опытом работы и фундаментальным образованием. И спрос на эти два вида работников заметно отличается.