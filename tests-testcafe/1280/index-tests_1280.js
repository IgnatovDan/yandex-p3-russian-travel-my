import { Selector } from 'testcafe';
import { compareScreenshot } from 'devextreme-screenshot-comparer';

fixture`Index page screenshot 1280`
  .page('../../index.html');

test(`Index page screenshot test 1280`, async t => {
  await t.resizeWindow(1280, 1440);

  await t.expect(await compareScreenshot(t, 'index-page_1280.png')).ok();
});

test(`Header screenshot test 1280`, async t => {
  await t.resizeWindow(1280, 1000);
  const element = Selector('.header');
  await t.expect(await compareScreenshot(t, 'header_1280.png', element)).ok();
});

test.page`../section-pages/cover.html`(`Cover screenshot test 1280`, async t => {
  await t.resizeWindow(1280, 1000);
  await t.expect(await compareScreenshot(t, 'cover_1280.png')).ok();
});
