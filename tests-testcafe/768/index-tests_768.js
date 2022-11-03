import { Selector } from 'testcafe';
import { compareScreenshot } from 'devextreme-screenshot-comparer';

fixture`Index page screenshot 768`
  .page('../../index.html');

test(`Index page screenshot test 768`, async t => {
  await t.resizeWindow(768, 1000);
  await t.expect(await compareScreenshot(t, 'index-page_768.png')).ok();
});

test(`Header screenshot test 768`, async t => {
  await t.resizeWindow(768, 1000);
  const element = Selector('.header');
  await t.expect(await compareScreenshot(t, 'header_768.png', element)).ok();
});

test(`Lead screenshot test 768`, async t => {
  await t.resizeWindow(768, 1000);
  const element = Selector('.lead');
  await t.expect(await compareScreenshot(t, 'lead_768.png', element)).ok();
});

test.page`../section-pages/cover.html`(`Cover screenshot test 768`, async t => {
  await t.resizeWindow(768, 1000);
  await t.expect(await compareScreenshot(t, 'cover_768.png')).ok();
});
