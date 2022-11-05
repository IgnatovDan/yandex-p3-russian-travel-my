import { createStorybookConfigByWidth } from './utils/utils.js';

export default {
  title: 'Footer',
}

const Template = () => {
  const result = document.createElement('div');
  result.className = 'page';
  result.innerHTML = `
    <div class="page__content">
      <footer class="page__footer footer">
        <nav class="footer__navigation">
          <ul class="footer__links">
            <li class="footer__link">
              <a class="link" href="">Карты</a>
            </li>
            <li class="footer__link">
              <a class="link" href="">Погода</a>
            </li>
            <li class="footer__link">
              <a class="link" href="">Расписание</a>
            </li>
            <li class="footer__link">
              <a class="link" href="">Календарь</a>
            </li>
            <li class="footer__link">
              <a class="link" href="">Путешествия</a>
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
