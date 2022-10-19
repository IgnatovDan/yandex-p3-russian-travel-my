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

test(`Lead screenshot test 1440`, async t => {
  await t.resizeWindow(1440, 1000);
  const element = Selector('.lead');
  await t.expect(await compareScreenshot(t, 'lead_1440.png', element)).ok();
});

test(`Intro screenshot test 1440`, async t => {
  await t.resizeWindow(1440, 1000);
  const element = Selector('.intro');
  await t.expect(await compareScreenshot(t, 'intro_1440.png', element)).ok();
});
