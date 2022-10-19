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

test(`Lead screenshot test 1080`, async t => {
  await t.resizeWindow(1080, 1000);
  const element = Selector('.lead');
  await t.expect(await compareScreenshot(t, 'lead_1080.png', element)).ok();
});

test(`Intro screenshot test 1080`, async t => {
  await t.resizeWindow(1080, 1000);
  const element = Selector('.intro');
  await t.expect(await compareScreenshot(t, 'intro_1080.png', element)).ok();
});
