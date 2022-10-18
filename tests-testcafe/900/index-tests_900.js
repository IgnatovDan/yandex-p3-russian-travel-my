import { compareScreenshot } from 'devextreme-screenshot-comparer';

fixture`Index page screenshot 900`
  .page('../../index.html');

test(`Index page screenshot test 900`, async t => {
  await t.resizeWindow(900, 800);
  await t.expect(await compareScreenshot(t, 'index-page_900.png')).ok();
});
