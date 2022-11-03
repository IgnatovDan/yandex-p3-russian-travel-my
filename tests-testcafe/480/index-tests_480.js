import { Selector } from 'testcafe';
import { compareScreenshot } from 'devextreme-screenshot-comparer';

fixture`Index page screenshot 480`
  .page('../../index.html');

test(`Index page screenshot test 480`, async t => {
  await t.resizeWindow(480, 1000);
  await t.expect(await compareScreenshot(t, 'index-page_480.png')).ok();
});

test(`Header screenshot test 480`, async t => {
  await t.resizeWindow(480, 1000);
  const element = Selector('.header');
  await t.expect(await compareScreenshot(t, 'header_480.png', element)).ok();
});

test(`Lead screenshot test 480`, async t => {
  await t.resizeWindow(480, 1000);
  const element = Selector('.lead');
  await t.expect(await compareScreenshot(t, 'lead_480.png', element)).ok();
});

test.page`../section-pages/cover.html`(`Cover screenshot test 480`, async t => {
  await t.resizeWindow(480, 1000);
  await t.expect(await compareScreenshot(t, 'cover_480.png')).ok();
});
