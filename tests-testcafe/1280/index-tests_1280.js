import { compareScreenshot } from 'devextreme-screenshot-comparer';

fixture`Index page screenshot 1280`
  .page('../../index.html');

test(`test1`, async t => {
  await t.resizeWindow(1280, 800);

  await t.expect(await compareScreenshot(t, 'index-page_1280.png')).ok();
});
