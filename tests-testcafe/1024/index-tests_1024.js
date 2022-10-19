import { Selector } from 'testcafe';
import { compareScreenshot } from 'devextreme-screenshot-comparer';

fixture`Index page screenshot 1024`
  .page('../../index.html');

test(`Index page screenshot test 1024`, async t => {
  await t.resizeWindow(1024, 1440);
  await t.expect(await compareScreenshot(t, 'index-page_1024.png')).ok();
});

test(`Header screenshot test 1024`, async t => {
  await t.resizeWindow(1024, 1000);
  const element = Selector('.header');
  await t.expect(await compareScreenshot(t, 'header_1024.png', element)).ok();
});

test(`Lead screenshot test 1024`, async t => {
  await t.resizeWindow(1024, 1000);
  const element = Selector('.lead');
  await t.expect(await compareScreenshot(t, 'lead_1024.png', element)).ok();
});

test(`Intro screenshot test 1024`, async t => {
  await t.resizeWindow(1024, 1000);
  const element = Selector('.intro');
  await t.expect(await compareScreenshot(t, 'intro_1024.png', element)).ok();
});
