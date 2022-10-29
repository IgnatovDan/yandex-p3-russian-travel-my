export default {
  title: 'photo-grid',
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

export const Width_320 = Object.assign(
  Template.bind({}),
  { parameters: { viewport: { defaultViewport: '320', } } }
);

export const Width_480 = Object.assign(
  Template.bind({}),
  { parameters: { viewport: { defaultViewport: '480', } } }
);

export const Width_768 = Object.assign(
  Template.bind({}),
  { parameters: { viewport: { defaultViewport: '768', } } }
);

export const Width_900 = Object.assign(
  Template.bind({}),
  { parameters: { viewport: { defaultViewport: '900', } } }
);

export const Width_1024 = Object.assign(
  Template.bind({}),
  { parameters: { viewport: { defaultViewport: '1024', } } }
);

export const Width_1080 = Object.assign(
  Template.bind({}),
  { parameters: { viewport: { defaultViewport: '1080', } } }
);

export const Width_1280 = Object.assign(
  Template.bind({}),
  { parameters: { viewport: { defaultViewport: '1280', } } }
);

export const Width_1440 = Object.assign(
  Template.bind({}),
  { parameters: { viewport: { defaultViewport: '1440', } } }
);
