import { compareScreenshot } from 'devextreme-screenshot-comparer';

fixture`Index page screenshot 480`
  .page('../../index.html');

test(`Index page screenshot test 480`, async t => {
  await t.resizeWindow(480, 1000);
  await t.expect(await compareScreenshot(t, 'index-page_480.png')).ok();
});
