import { createStorybookConfigByWidth } from './utils/utils.js';
  
export default {
  title: 'Cover',
}

const Template = () => {
  const result = document.createElement('div');
  result.className = 'page';
  result.innerHTML = `
    <div class="page__content">
      <main>
        <section class="page__cover">
          <a class="cover" href="https://stampsy.com/na-elektrichkakh-do-baikala">
            <p class="cover__title">До&nbsp;Байкала &laquo;на&nbsp;собаках&raquo;</p>
            <p class="cover__subtitle">По&nbsp;мотивам учебной темы о&nbsp;Транссибе&nbsp;&mdash;
              путешествие от&nbsp;столицы до&nbsp;Байкала на&nbsp;электричках.</p>
          </a>
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
