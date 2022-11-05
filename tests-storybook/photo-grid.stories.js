import { createStorybookConfigByWidth } from './utils/utils.js';

export default {
  title: 'Photo-grid',
}

const Template = () => {
  const result = document.createElement('div');
  result.className = 'page';
  result.innerHTML = `
    <div class="page__content">
      <main>
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
