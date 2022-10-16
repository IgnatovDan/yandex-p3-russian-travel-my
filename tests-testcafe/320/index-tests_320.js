import { compareScreenshot } from 'devextreme-screenshot-comparer';

fixture`Index page screenshot 320`
  .page('../../index.html');

test(`test1`, async t => {
  await t.resizeWindow(320, 800);
  await t.expect(await compareScreenshot(t, 'index-page_320.png')).ok();
});
