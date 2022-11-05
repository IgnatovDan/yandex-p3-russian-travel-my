export function createStorybookConfigByWidth(template) {
  function createStorybookConfigEntry(template, viewPortWidth) {
    return Object.assign(
      template.bind({}),
      {
        parameters: {
          viewport: { defaultViewport: String(viewPortWidth) },
          chromatic: { viewports: [viewPortWidth] },
        }
      }
    )
  }

  return {
    Width_320: createStorybookConfigEntry(template, 320),
    Width_480: createStorybookConfigEntry(template, 480),
    Width_768: createStorybookConfigEntry(template, 768),
    Width_900: createStorybookConfigEntry(template, 900),
    Width_1024: createStorybookConfigEntry(template, 1024),
    Width_1080: createStorybookConfigEntry(template, 1080),
    Width_1280: createStorybookConfigEntry(template, 1280),
    Width_1440: createStorybookConfigEntry(template, 1440),
  };
}
