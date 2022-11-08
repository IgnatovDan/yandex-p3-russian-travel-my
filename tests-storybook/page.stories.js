import { createStorybookConfigByWidth } from './utils/utils.js';

export default {
  title: 'Page',
}

const Template = () => {
  const result = document.createElement('div');
  result.className = 'page';
  result.innerHTML = `
    <div class="page__content">
      <header class="page__header header">
        <div class="header__logo"></div>
        <ul class="header__lang-links">
          <li><a href="" class="header__lang-link header__lang-link_active">ru</a></li>
          <li><a href="" class="header__lang-link">en</a></li>
        </ul>
      </header>

      <main>
        <section class="page__lead lead">
          <h1 class="lead__title">Путешествия по&nbsp;России</h1>
          <p class="lead__subtitle">Настоящая страна не в выпусках новостей, а здесь.</p>

          <img class="lead__image" src="./images/lead-image-320.jpg" alt="карта с маршрутом" srcset="
          ./images/lead-image-320.jpg 320w, 
          ./images/lead-image-768.jpg 768w,
          ./images/lead-image-928.jpg 928w,
          ./images/lead-image-984.jpg 984w"
            sizes="(max-width: 1280px) 100vw, (min-width: 1280px) calc(1280px - 148px * 2)">
          <p class="lead__caption">ваша полка — верхняя</p>
        </section>

        <section class="page__intro intro">
          <h2 class="intro__title">Чего мы&nbsp;там не&nbsp;видели?</h2>
          <p class="intro__text">
            По&nbsp;опросам ВЦИОМ, 95% россиян мечтают куда-нибудь поехать, но&nbsp;только&nbsp;36%
            планируют провести
            отпуск в&nbsp;родной стране. Мол, чего мы&nbsp;тут, дома, не&nbsp;видели? На&nbsp;самом
            деле, Россия&nbsp;&mdash; это целая
            вселенная с&nbsp;ласковым морем юга, густыми лесами Саян и&nbsp;суровыми льдами плато
            Путорана. А&nbsp;ещё
            увидеть все эти красоты можно без миллионов на&nbsp;счету, загранпаспорта
            и&nbsp;многочасовых перелетов.
            Как, например, Вера Башмакова&nbsp;&mdash; смелая молодая мама, которая взяла
            в&nbsp;охапку
            троих детей,
            усадила их&nbsp;в&nbsp;свою &laquo;Ладу&raquo; и&nbsp;проехала 20&nbsp;тысяч километров
            по&nbsp;родной стране. Мы&nbsp;выбрали и&nbsp;описали
            некоторые интересные места, достойные вашего отпуска.
          </p>
          <ul class="intro__list">
            <li>
              <p class="intro__list-item">
                Часовых поясов&nbsp;<span class="intro__list-item-value">11</span>
              </p>
            </li>
            <li>
              <p class="intro__list-item">Объектов природного наследия ЮНЕСКО&nbsp;12</p>
            </li>
            <li>
              <p class="intro__list-item">Объектов культурного наследия ЮНЕСКО&nbsp;16</p>
            </li>
            <li>
              <p class="intro__list-item">Природных заповедников&nbsp;105</p>
            </li>
            <li>
              <p class="intro__list-item">Аэропортов&nbsp;241</p>
            </li>
          </ul>
        </section>

        <section class="page__photo-grid">
          <ul class="photo-grid">
            <li>
              <img class="photo-grid__item" src="./images/photo-grid/item1.jpg" alt="окно поезда">
            </li>
            <li>
              <img class="photo-grid__item" src="./images/photo-grid/item2.jpg" alt="горы">
            </li>
            <li>
              <img class="photo-grid__item" src="./images/photo-grid/item3.jpg" alt="небо">
            </li>
            <li>
              <img class="photo-grid__item" src="./images/photo-grid/item4.jpg" alt="лес">
            </li>
            <li>
              <img class="photo-grid__item" src="./images/photo-grid/item5.jpg" alt="лед">
            </li>
            <li>
              <img class="photo-grid__item" src="./images/photo-grid/item6.jpg" alt="море">
            </li>
            <li>
              <img class="photo-grid__item" src="./images/photo-grid/item7.jpg" alt="вершины гор">
            </li>
            <li>
              <img class="photo-grid__item" src="./images/photo-grid/item8.jpg" alt="камни">
            </li>
            <li>
              <img class="photo-grid__item" src="./images/photo-grid/item9.jpg" alt="горы">
            </li>
            <li>
              <img class="photo-grid__item" src="./images/photo-grid/item10.jpg" alt="горы">
            </li>
            <li>
              <img class="photo-grid__item" src="./images/photo-grid/item11.jpg" alt="горы">
            </li>
            <li>
              <img class="photo-grid__item" src="./images/photo-grid/item12.jpg" alt="горы">
            </li>
          </ul>
        </section>

        <section class="page__places">
          <ul class="places">
            <li>
              <article class="place">
                <h2 class="place__title">Куршская коса</h2>
                <div class="place__website">
                  <p class="place__website-heading">URL</p>
                  <a class="place__website-link" href="park-kosa.ru">park-kosa.ru</a>
                </div>

                <img class="place__image" src="./images/places/place__park-kosa.jpg"
                  alt="Куршская коса">
                <div class="place__description">
                  <p class="place__paragraph">
                    Здесь, посреди лесов и&nbsp;песчаных дюн, вы&nbsp;сможете увидеть два водных
                    горизонта &mdash;
                    спокойного Куршского залива с&nbsp;одной стороны и&nbsp;подёрнутого рябью волн
                    Балтийского
                    моря с&nbsp;другой. Уникальная природная зона на&nbsp;краю российского анклава.
                  </p>
                  <p class="place__paragraph">
                    На&nbsp;этом Калининградская область не&nbsp;заканчивается. Для путешественника
                    и
                    исследователя там&nbsp;же по&nbsp;соседству&nbsp;&mdash; самая западная точка
                    России, Балтийская коса, &mdash;
                    и&nbsp;немецкое наследие россыпи небольших приморских городов. Атмосфера здешних
                    мест
                    исключает суету, окуная в&nbsp;спокойствие природы и&nbsp;запах стального,
                    прохладного моря.
                  </p>
                </div>
              </article>
            </li>
            <li>
              <article class="place">
                <h2 class="place__title">Кольский</h2>
                <div class="place__website">
                  <p class="place__website-heading">URL</p>
                  <a class="place__website-link" href="https://yourshot.nationalgeographic.com/photos/?keywords=kolskiy">National Geographic</a>
                </div>

                <img class="place__image" src="./images/places/place__kolski.jpg" alt="Кольский">
                <div class="place__description">
                  <p class="place__paragraph">
                    Почти весь полуостров находится за&nbsp;Полярным кругом. Саамская тундра,
                    от&nbsp;которой на&nbsp;юг&nbsp;&mdash;
                    тайга, а&nbsp;на&nbsp;север&nbsp;&mdash; Ледовитый океан, прикидывающийся
                    Баренцевым
                    морем.
                  </p>
                  <p class="place__paragraph">
                    Возможно, вы&nbsp;смотрели Звягинцева и&nbsp;даже слышали историю арктического
                    фестиваля в&nbsp;Териберке. Возможно, слово &laquo;Хибины&raquo;
                    не&nbsp;осталось
                    под снегом школьных воспоминаний об&nbsp;уроках географии. Возможно,
                    вы&nbsp;не&nbsp;интересовались пронизывающей земную кору сверхглубокой
                    скважиной,
                    а&nbsp;от&nbsp;апатитов вас давно накрывает апатия. Но&nbsp;ваша мечта увидеть
                    северное сияние начинает сбываться с&nbsp;билетом
                    в&nbsp;Мурманск.
                  </p>
                </div>
              </article>
            </li>
            <li>
              <article class="place">
                <h2 class="place__title">Алтай</h2>
                <div class="place__website">
                  <p class="place__website-heading">URL</p>
                  <a class="place__website-link" href="https://www.facebook.com/vera.bashmakova/posts/10156011613718822">Facebook</a>
                </div>

                <img class="place__image" src="./images/places/place__altai.jpg" alt="Кольский">
                <div class="place__description">
                  <p class="place__paragraph">
                    Алтай&nbsp;&mdash; одно из&nbsp;красивейших мест в&nbsp;России.
                    В&nbsp;первую очередь из-за гор: если ехать вдоль хребта, вы&nbsp;увидите
                    склоны,
                    усыпанные соснами, горные реки и&nbsp;озёра. А&nbsp;если вы&nbsp;откроете
                    в&nbsp;автомобиле окна, сможете познакомиться с&nbsp;невидимым чудом здешних
                    мест&nbsp;&mdash; горным воздухом.
                  </p>
                  <p class="place__paragraph">
                    Климат на&nbsp;Алтае умеренный, поэтому ехать сюда лучше всего летом. Так
                    вы&nbsp;увидите всё разнообразие местной флоры и&nbsp;фауны. По&nbsp;лесам Алтая
                    бродят лоси, над хребтами летают орлы, а&nbsp;на&nbsp;равнинах пасутся косули.
                    И&nbsp;знаменитые манулы&nbsp;&mdash; тоже обитатели Алтайского края.
                  </p>
                </div>
              </article>
            </li>
            <li>
              <article class="place">
                <h2 class="place__title">Зимний Байкал</h2>
                <div class="place__website">
                  <p class="place__website-heading">URL</p>
                  <a class="place__website-link" href="https://vk.com/baikalmile">https://vk.com/baikalmile</a>
                </div>

                <img class="place__image" src="./images/places/place__baikal.jpg" alt="Кольский">
                <div class="place__description">
                  <p class="place__paragraph">
                    Всем известен Байкал как крупнейшее озеро
                    в&nbsp;мире. Многие также знают, что это самый большой источник пресной воды
                    и&nbsp;одно из&nbsp;красивейших мест в&nbsp;России. </p>
                  <p class="place__paragraph">
                    Конечно, это всё так. Но&nbsp;Байкал ещё идеальное место для соревнований
                    по&nbsp;скийорингу. Это такой вид спорта, когда лыжник привязывает себя
                    к&nbsp;мотоциклу, и&nbsp;тандем старается развить как можно б&oacute;льшую
                    скорость
                    на&nbsp;льду. В&nbsp;марте 2019 года на&nbsp;фестивале &laquo;Байкальская
                    миля&raquo; был поставлен мировой рекорд&nbsp;&mdash; 197.011&nbsp;км/ч.
                  </p>
                </div>
              </article>
            </li>
            <li>
              <article class="place">
                <h2 class="place__title">Карелия</h2>
                <div class="place__website">
                  <p class="place__website-heading">URL</p>
                  <a class="place__website-link" href="http://vodlozero.ru">http://vodlozero.ru/</a>
                </div>

                <img class="place__image" src="./images/places/place__karelia.jpg" alt="Кольский">
                <div class="place__description">
                  <p class="place__paragraph">
                    Сибирь заканчивается не&nbsp;на&nbsp;Урале, а&nbsp;в&nbsp;Карелии: образующая
                    тайгу
                    сибирская лиственница не&nbsp;растёт западнее Водлозера. Зато здесь она
                    вымахивает
                    на&nbsp;30&nbsp;метров&nbsp;&mdash; леса карельских национальных парков из-за
                    непроходимых болот никогда не&nbsp;знали топора. Некоторым соснам уже больше чем
                    полтысячелетия. Прикоснитесь к&nbsp;живому существу, видевшему солнце раньше,
                    чем
                    увидал его Иван Грозный.
                    В&nbsp;девственном лесу на&nbsp;сотню километров не&nbsp;встретишь тропы.
                    А&nbsp;на&nbsp;редких тропинках деревья
                    в&nbsp;паре метров от&nbsp;земли помечены медвежьими когтями. Чтобы все знали,
                    кто
                    тут хозяин. </p>
                </div>
              </article>
            </li>
          </ul>
        </section>

        <section class="page__cover">
          <a class="cover" href="https://stampsy.com/na-elektrichkakh-do-baikala">
            <p class="cover__title">До&nbsp;Байкала &laquo;на&nbsp;собаках&raquo;</p>
            <p class="cover__subtitle">По&nbsp;мотивам учебной темы о&nbsp;Транссибе&nbsp;&mdash;
              путешествие от&nbsp;столицы до&nbsp;Байкала на&nbsp;электричках.</p>
          </a>
        </section>
      </main>

      <footer class="page__footer footer">
        <nav>
          <ul class="footer__links">
            <li class="footer__link">
              <a class="link" href="https://yandex.ru/maps">Карты</a>
            </li>
            <li class="footer__link">
              <a class="link" href="https://yandex.ru/pogoda">Погода</a>
            </li>
            <li class="footer__link">
              <a class="link" href="https://rasp.yandex.ru">Расписание</a>
            </li>
            <li class="footer__link">
              <a class="link" href="https://calendar.yandex.ru">Календарь</a>
            </li>
            <li class="footer__link">
              <a class="link" href="https://travel.yandex.ru">Путешествия</a>
            </li>
          </ul>
        </nav>
        <p class="footer__author">© 2022. Dan Ignatov</p>
      </footer>
    </div>
  `;

  return result;
};

const storybookConfig = createStorybookConfigByWidth(Template);

export const Width_320 = storybookConfig.Width_320;
export const Width_480 = storybookConfig.Width_480;
export const Width_768 = storybookConfig.Width_768;
export const Width_900 = storybookConfig.Width_900;
export const Width_1024 = storybookConfig.Width_1024;
export const Width_1080 = storybookConfig.Width_1080;
export const Width_1280 = storybookConfig.Width_1280;
export const Width_1440 = storybookConfig.Width_1440;
