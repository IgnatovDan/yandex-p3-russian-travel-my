import { compareScreenshot } from 'devextreme-screenshot-comparer';

fixture`Index page screenshot 768`
  .page('../../index.html');

test(`Index page screenshot test 768`, async t => {
  await t.resizeWindow(768, 1000);
  await t.expect(await compareScreenshot(t, 'index-page_768.png')).ok();
});
