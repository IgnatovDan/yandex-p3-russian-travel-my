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
