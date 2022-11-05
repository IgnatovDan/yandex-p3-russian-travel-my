import { createStorybookConfigByWidth } from './utils/utils.js';

export default {
  title: 'Lead',
}

const Template = () => {
  const result = document.createElement('div');
  result.className = 'page';
  result.innerHTML = `
    <div class="page__content">
      <main>
        <section class="page__lead lead">
          <h1 class="lead__title">Путешествия по&nbsp;России</h1>
          <p class="lead__subtitle">Настоящая страна не в выпусках новостей, а здесь.</p>

          <!-- TODO: calc(100vw - 148px * 2) - calc(1280px - 148px * 2) -->
          <img class="lead__image" src="./images/lead-image-320.jpg" alt="карта с маршрутом" srcset="
          ./images/lead-image-320.jpg 320w, 
          ./images/lead-image-768.jpg 768w,
          ./images/lead-image-928.jpg 928w,
          ./images/lead-image-984.jpg 984w"
            sizes="(max-width: 1024px) 100vw, (max-width: 1280px) calc(100vw - 48px * 2), (min-width: 1280px) calc(100vw - 148px * 2)">
          <!-- TODO: sync position for 1024/1280 -->
          <!-- TODO: sync font for 768 -->
          <p class="lead__caption">ваша полка — верхняя</p>
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
