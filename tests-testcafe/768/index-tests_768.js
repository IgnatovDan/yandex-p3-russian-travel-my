import { compareScreenshot } from 'devextreme-screenshot-comparer';

fixture`Index page screenshot 768`
  .page('../../index.html');

test(`test1`, async t => {
  await t.resizeWindow(768, 800);
  await t.expect(await compareScreenshot(t, 'index-page_768.png')).ok();
});
