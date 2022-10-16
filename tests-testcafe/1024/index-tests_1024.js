import { compareScreenshot } from 'devextreme-screenshot-comparer';

fixture`Index page screenshot 1024`
  .page('../../index.html');

test(`test1`, async t => {
  await t.resizeWindow(1024, 800);
  await t.expect(await compareScreenshot(t, 'index-page_1024.png')).ok();
});
