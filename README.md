[![Screenshot tests](https://github.com/IgnatovDan/yandex-p3-russian-travel-my/actions/workflows/run-screenshot-tests.yaml/badge.svg)](https://github.com/IgnatovDan/yandex-p3-russian-travel-my/actions/workflows/run-screenshot-tests.yaml)

# Project: Roundtrip to Russia

### Overview

* Live site on gh-pages: https://ignatovdan.github.io/yandex-p3-russian-travel-my/
* In this project, I used HTML, CSS, img/srcset, CI (Testcafe, headless chrome, Github action/workflow on PR from branches)
* Source Figma design: https://www.figma.com/file/5S2WSbEFL6awjVWJ0NWL8Q/Sprint-3_-Russia-_-desktop-mobile?node-id=28503%3A0
* Step-by-step layout implementation with full page screenshot testing on each step, for example https://github.com/IgnatovDan/yandex-p3-russian-travel-my/pull/4

## Links:

- Img+srcset+sizes
  - [Img+srcset+sizes](https://cloudfour.com/thinks/responsive-images-101-part-5-sizes/)
  - [Stackoverflow - Img+srcset+sizes doesn't work in Chrome emulator](https://stackoverflow.com/questions/72375309/img-srcset-and-sizes-not-working-properly-and-impossible-to-adjust-any-ideas)

- Testcafe
  - [Test Static HTML Pages](https://testcafe.io/documentation/402805/recipes/basics/test-static-html-pages)
  - [Screenshots](https://testcafe.io/documentation/402840/guides/advanced-guides/screenshots-and-videos#screenshots)
  - [Emulate Custom Device Guide](https://testcafe.io/documentation/403584/guides/intermediate-guides/mobile-devices-cloud-browsers-and-emulation#custom-device-guide)
  - [Configuration File](https://testcafe.io/documentation/402638/reference/configuration-file)
  - [Integrate TestCafe with GitLab](https://testcafe.io/documentation/402816/guides/continuous-integration/gitlab)
  - [Run Tests Concurrently](https://testcafe.io/documentation/403626/guides/intermediate-guides/run-tests-concurrently)
  - [Use the TestCafe Docker Image](https://testcafe.io/documentation/402838/guides/advanced-guides/use-testcafe-docker-image)
  - [Creating a visual regression tool for your web app](https://medium.com/@byrne.greg/creating-a-visual-regression-tool-for-your-web-app-f4920974e2ec)
  - [Execute Visual Regression Tests in TestCafe](https://www.browserstack.com/guide/visual-regression-in-testcafe)
  - [devextreme-screenshot-comparer](https://www.npmjs.com/package/devextreme-screenshot-comparer)
  - [Visual regression testing #1207](https://github.com/DevExpress/testcafe/issues/1207)

- Обработка текста, неразрывные пробелы: https://www.artlebedev.ru/typograf/

- TODO: try [Storybook](https://storybook.js.org/docs/react/writing-tests/visual-testing), [StoryShots + Puppeteer](https://github.com/storybookjs/storybook/tree/main/addons/storyshots/storyshots-puppeteer#imagesnapshots)
- TODO: try [happo.io](https://github.com/happo/happo.io), [Happo docs: Storybook](https://docs.happo.io/docs/storybook)
- TODO: try [Resemble.js](https://github.com/rsmbl/Resemble.js)
- TODO: try [pixelmatch](https://github.com/mapbox/pixelmatch)
- TODO: try [hermione](https://github.com/gemini-testing/hermione) + [looks-same](https://github.com/gemini-testing/looks-same)
- TODO: Add &nbsp; in texts
