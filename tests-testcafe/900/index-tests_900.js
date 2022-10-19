import { Selector } from 'testcafe';
import { compareScreenshot } from 'devextreme-screenshot-comparer';

fixture`Index page screenshot 900`
  .page('../../index.html');

test(`Index page screenshot test 900`, async t => {
  await t.resizeWindow(900, 1000);
  await t.expect(await compareScreenshot(t, 'index-page_900.png')).ok();
});

test(`Header screenshot test 900`, async t => {
  await t.resizeWindow(900, 1000);
  const element = Selector('.header');
  await t.expect(await compareScreenshot(t, 'header_900.png', element)).ok();
});

test(`Lead screenshot test 900`, async t => {
  await t.resizeWindow(900, 1000);
  const element = Selector('.lead');
  await t.expect(await compareScreenshot(t, 'lead_900.png', element)).ok();
});

test(`Intro screenshot test 900`, async t => {
  await t.resizeWindow(900, 1000);
  const element = Selector('.intro');
  await t.expect(await compareScreenshot(t, 'intro_900.png', element)).ok();
});
