import { compareScreenshot } from 'devextreme-screenshot-comparer';

fixture`Index page screenshot 1080`
  .page('../../index.html');

test(`Index page screenshot test 1080`, async t => {
  await t.resizeWindow(1080, 800);
  await t.expect(await compareScreenshot(t, 'index-page_1080.png')).ok();
});
