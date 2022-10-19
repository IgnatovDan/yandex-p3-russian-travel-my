import { compareScreenshot } from 'devextreme-screenshot-comparer';
import { Selector } from 'testcafe';

fixture`Index page screenshot 320`
  .page('../../index.html');

test(`Index page screenshot test 320`, async t => {
  await t.resizeWindow(320, 1000);
  await t.expect(await compareScreenshot(t, 'index-page_320.png')).ok();
});

test(`Header screenshot test 320`, async t => {
  await t.resizeWindow(320, 1000);
  const element = Selector('.header');
  await t.expect(await compareScreenshot(t, 'header_320.png', element)).ok();
});

test(`Lead screenshot test 320`, async t => {
  await t.resizeWindow(320, 1000);
  const element = Selector('.lead');
  await t.expect(await compareScreenshot(t, 'lead_320.png', element)).ok();
});

test(`Intro screenshot test 320`, async t => {
  await t.resizeWindow(320, 1000);
  const element = Selector('.intro');
  await t.expect(await compareScreenshot(t, 'intro_320.png', element)).ok();
});
