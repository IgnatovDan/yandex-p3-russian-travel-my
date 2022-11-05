import { Selector } from 'testcafe';
import { compareScreenshot } from 'devextreme-screenshot-comparer';

fixture`Index page screenshot 1280`
  .page('../../index.html');

test(`Index page screenshot test 1280`, async t => {
  await t.resizeWindow(1280, 1440);
  await t.expect(await compareScreenshot(t, 'index-page_1280.png')).ok();
});

test.page`../section-pages/header.html`(`Header screenshot test 1280`, async t => {
  await t.resizeWindow(1280, 1000);
  await t.expect(await compareScreenshot(t, 'header_1280.png')).ok();
});

test.page`../section-pages/lead.html`(`Lead screenshot test 1280`, async t => {
  await t.resizeWindow(1280, 1000);
  await t.expect(await compareScreenshot(t, 'lead_1280.png')).ok();
});

test.page`../section-pages/intro.html`(`Intro screenshot test 1280`, async t => {
  await t.resizeWindow(1280, 1000);
  await t.expect(await compareScreenshot(t, 'intro_1280.png')).ok();
});

test.page`../section-pages/photo-grid.html`(`Photo-grid screenshot test 1280`, async t => {
  await t.resizeWindow(1280, 1000);
  await t.expect(await compareScreenshot(t, 'photo-grid_1280.png')).ok();
});

test.page`../section-pages/places.html`(`Places screenshot test 1280`, async t => {
  await t.resizeWindow(1280, 1000);
  await t.expect(await compareScreenshot(t, 'places_1280.png')).ok();
});

test.page`../section-pages/cover.html`(`Cover screenshot test 1280`, async t => {
  await t.resizeWindow(1280, 1000);
  await t.expect(await compareScreenshot(t, 'cover_1280.png')).ok();
});

test.page`../section-pages/footer.html`(`Footer screenshot test 1280`, async t => {
  await t.resizeWindow(1280, 100);
  await t.expect(await compareScreenshot(t, 'footer_1280.png')).ok();
});
