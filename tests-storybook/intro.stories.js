import { createStorybookConfigByWidth } from './utils/utils.js';

export default {
  title: 'Intro',
}

const Template = () => {
  const result = document.createElement('div');
  result.className = 'page';
  result.innerHTML = `
    <div class="page__content">
      <main>
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
      </main>
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
