import { compareScreenshot } from 'devextreme-screenshot-comparer';

fixture`Index page screenshot 1280`
  .page('../../index.html');

test(`Index page screenshot test 1280`, async t => {
  await t.resizeWindow(1280, 1440);

  await t.expect(await compareScreenshot(t, 'index-page_1280.png')).ok();
});
