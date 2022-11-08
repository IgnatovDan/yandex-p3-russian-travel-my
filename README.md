[![Testcafe tests](https://github.com/IgnatovDan/yandex-p3-russian-travel-my/actions/workflows/run-testcafe-tests.yaml/badge.svg)](https://github.com/IgnatovDan/yandex-p3-russian-travel-my/actions/workflows/run-testcafe-tests.yaml) 
[![Chromatic tests](https://github.com/IgnatovDan/yandex-p3-russian-travel-my/actions/workflows/run-chromatic-tests.yaml/badge.svg)](https://github.com/IgnatovDan/yandex-p3-russian-travel-my/actions/workflows/run-chromatic-tests.yaml)

# Project: Roundtrip to Russia

### Overview

* Live site on gh-pages: https://ignatovdan.github.io/yandex-p3-russian-travel-my/
* In this project, I used HTML, CSS, img/srcset, CI (Testcafe, Storybooks, Chromatic, Docker, headless chrome, Github action/workflow for PRs)
* Source Figma design: https://www.figma.com/file/5S2WSbEFL6awjVWJ0NWL8Q/Sprint-3_-Russia-_-desktop-mobile?node-id=28503%3A0

### Testing:
- [Testcafe](https://testcafe.io/)
  - Testcafe test/base screens/yaml/docker/readme files: https://github.com/IgnatovDan/yandex-p3-russian-travel-my/tree/main/tests-testcafe

- [Storybook](https://storybook.js.org/docs/react/writing-tests/visual-testing) + [Chromatic](https://www.chromatic.com/)
  - Storybook story files: https://github.com/IgnatovDan/yandex-p3-russian-travel-my/tree/main/tests-storybook
  - Storybook project: https://main--635e4b3f0703423a27d6678b.chromatic.com/
  - Chromatic library: https://www.chromatic.com/library?appId=635e4b3f0703423a27d6678b&branch=main

### Links:

- Img+srcset+sizes
  - [Img+srcset+sizes](https://cloudfour.com/thinks/responsive-images-101-part-5-sizes/)
  - [Stackoverflow - Img+srcset+sizes doesn't work in Chrome emulator](https://stackoverflow.com/questions/72375309/img-srcset-and-sizes-not-working-properly-and-impossible-to-adjust-any-ideas)

- Обработка текста, неразрывные пробелы: https://www.artlebedev.ru/typograf/

- More for visual testing:
  - [StoryShots + Puppeteer](https://github.com/storybookjs/storybook/tree/main/addons/storyshots/storyshots-puppeteer#imagesnapshots)
  - [happo.io](https://github.com/happo/happo.io), [Happo docs: Storybook](https://docs.happo.io/docs/storybook)
  - [Resemble.js](https://github.com/rsmbl/Resemble.js)
  - [pixelmatch](https://github.com/mapbox/pixelmatch)
  - [hermione](https://github.com/gemini-testing/hermione) + [looks-same](https://github.com/gemini-testing/looks-same)
