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
        <nav>
          <ul class="footer__links">
            <li class="footer__links-item">
              <a class="footer__link" href="https://yandex.ru/maps">Карты</a>
            </li>
            <li class="footer__links-item">
              <a class="footer__link" href="https://yandex.ru/pogoda">Погода</a>
            </li>
            <li class="footer__links-item">
              <a class="footer__link" href="https://rasp.yandex.ru">Расписание</a>
            </li>
            <li class="footer__links-item">
              <a class="footer__link" href="https://calendar.yandex.ru">Календарь</a>
            </li>
            <li class="footer__links-item">
              <a class="footer__link" href="https://travel.yandex.ru">Путешествия</a>
            </li>
          </ul>
        </nav>
        <p class="footer__author">© 2022. Dan Ignatov</p>
      </footer>
    </div>
  `;

  return result;
};

const TemplateLongTexts = () => {
  const result = document.createElement('div');
  result.className = 'page';
  result.innerHTML = `
    <div class="page__content">
      <footer class="page__footer footer">
        <nav>
          <ul class="footer__links">
            <li class="footer__links-item">
              <a class="footer__link" href="https://yandex.ru/maps">Карты Карты Карты Карты Карты Карты Карты Карты</a>
            </li>
            <li class="footer__links-item">
              <a class="footer__link" href="https://yandex.ru/pogoda">Погода</a>
            </li>
            <li class="footer__links-item">
              <a class="footer__link" href="https://rasp.yandex.ru">Расписание Расписание Расписание</a>
            </li>
            <li class="footer__links-item">
              <a class="footer__link" href="https://calendar.yandex.ru">Календарь</a>
            </li>
          </ul>
        </nav>
        <p class="footer__author">© 2022. Dan Ignatov Dan Ignatov Dan Ignatov Dan Ignatov</p>
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

const storybookLongTextsConfig = createStorybookConfigByWidth(TemplateLongTexts);

export const Width_320_LongTexts = storybookLongTextsConfig.Width_320;
export const Width_480_LongTexts = storybookLongTextsConfig.Width_480;
export const Width_768_LongTexts = storybookLongTextsConfig.Width_768;
export const Width_900_LongTexts = storybookLongTextsConfig.Width_900;
export const Width_1024_LongTexts = storybookLongTextsConfig.Width_1024;
export const Width_1080_LongTexts = storybookLongTextsConfig.Width_1080;
export const Width_1280_LongTexts = storybookLongTextsConfig.Width_1280;
export const Width_1440_LongTexts = storybookLongTextsConfig.Width_1440;
