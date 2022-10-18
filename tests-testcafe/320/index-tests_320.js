import { compareScreenshot } from 'devextreme-screenshot-comparer';

fixture`Index page screenshot 320`
  .page('../../index.html');

test(`Index page screenshot test 320`, async t => {
  await t.resizeWindow(320, 1000);
  await t.expect(await compareScreenshot(t, 'index-page_320.png')).ok();
});
