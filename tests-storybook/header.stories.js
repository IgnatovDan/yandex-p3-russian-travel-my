import { createStorybookConfigByWidth } from './utils/utils.js';

export default {
  title: 'Header',
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
