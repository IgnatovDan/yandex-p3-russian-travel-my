export default {
  title: 'Header',
}

const Template = () => {
  const result = document.createElement('div');
  result.className = 'page';
  result.innerHTML = `
    <div class="page__content">
      <main>
        <section class="page__cover cover">
          <p class="cover__title">До&nbsp;Байкала &laquo;на&nbsp;собаках&raquo;</p>
          <p class="cover__subtitle">По&nbsp;мотивам учебной темы о&nbsp;Транссибе&nbsp;&mdash; путешествие от&nbsp;столицы до&nbsp;Байкала на&nbsp;электричках.</p>
        </section>
      </main>
    </div>
  `;

  return result;
};

export const Width_320 = Object.assign(
  // TODO: add a new function in utils.js, return all resolutions in a single object, export each member as a named variable
  Template.bind({}),
  {
    parameters: {
      viewport: { defaultViewport: '320' },
      chromatic: { viewports: [320] },
    }
  }
);

export const Width_480 = Object.assign(
  Template.bind({}),
  {
    parameters: {
      viewport: { defaultViewport: '480' },
      chromatic: { viewports: [480] },
    }
  }
);

export const Width_768 = Object.assign(
  Template.bind({}),
  {
    parameters: {
      viewport: { defaultViewport: '768' },
      chromatic: { viewports: [768] },
    }
  }
);

export const Width_900 = Object.assign(
  Template.bind({}),
  {
    parameters: {
      viewport: { defaultViewport: '900' },
      chromatic: { viewports: [900] },
    }
  }
);

export const Width_1024 = Object.assign(
  Template.bind({}),
  {
    parameters: {
      viewport: { defaultViewport: '1024' },
      chromatic: { viewports: [1024] },
    }
  }
);

export const Width_1080 = Object.assign(
  Template.bind({}),
  {
    parameters: {
      viewport: { defaultViewport: '1080' },
      chromatic: { viewports: [1080] },
    }
  }
);

export const Width_1280 = Object.assign(
  Template.bind({}),
  {
    parameters: {
      viewport: { defaultViewport: '1280' },
      chromatic: { viewports: [1280] },
    }
  }
);

export const Width_1440 = Object.assign(
  Template.bind({}),
  {
    parameters: {
      viewport: { defaultViewport: '1440' },
      chromatic: { viewports: [1440] },
    }
  }
);
