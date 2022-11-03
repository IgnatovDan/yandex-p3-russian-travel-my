import { Selector } from 'testcafe';
import { compareScreenshot } from 'devextreme-screenshot-comparer';

fixture`Index page screenshot 1080`
  .page('../../index.html');

test(`Index page screenshot test 1080`, async t => {
  await t.resizeWindow(1080, 1440);
  await t.expect(await compareScreenshot(t, 'index-page_1080.png')).ok();
});

test(`Header screenshot test 1080`, async t => {
  await t.resizeWindow(1080, 1000);
  const element = Selector('.header');
  await t.expect(await compareScreenshot(t, 'header_1080.png', element)).ok();
});

test.page`../section-pages/cover.html`(`Cover screenshot test 1080`, async t => {
  await t.resizeWindow(1080, 1000);
  await t.expect(await compareScreenshot(t, 'cover_1080.png')).ok();
});
