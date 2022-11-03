import { Selector } from 'testcafe';
import { compareScreenshot } from 'devextreme-screenshot-comparer';

fixture`Index page screenshot 1440`
  .page('../../index.html');

test(`Index page screenshot test 1440`, async t => {
  await t.resizeWindow(1440, 1600);
  await t.expect(await compareScreenshot(t, 'index-page_1440.png')).ok();
});

test(`Header screenshot test 1440`, async t => {
  await t.resizeWindow(1440, 1000);
  const element = Selector('.header');
  await t.expect(await compareScreenshot(t, 'header_1440.png', element)).ok();
});

test.page`../section-pages/cover.html`(`Cover screenshot test 1440`, async t => {
  await t.resizeWindow(1440, 1000);
  await t.expect(await compareScreenshot(t, 'cover_1440.png')).ok();
});
