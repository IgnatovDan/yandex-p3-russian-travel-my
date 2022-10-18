import { compareScreenshot } from 'devextreme-screenshot-comparer';

fixture`Index page screenshot 1024`
  .page('../../index.html');

test(`Index page screenshot test 1024`, async t => {
  await t.resizeWindow(1024, 1440);
  await t.expect(await compareScreenshot(t, 'index-page_1024.png')).ok();
});
