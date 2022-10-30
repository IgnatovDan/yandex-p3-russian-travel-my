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

export const Width_320 = Object.assign(
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
