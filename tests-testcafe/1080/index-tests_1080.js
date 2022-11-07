import { Selector } from 'testcafe';
import { compareScreenshot } from 'devextreme-screenshot-comparer';

fixture`Index page screenshot 1080`
  .page('../../index.html');

test(`Index page screenshot test 1080`, async t => {
  await t.resizeWindow(1080, 1440);
  await t.expect(await compareScreenshot(t, 'index-page_1080.png')).ok();
});

test.page`../section-pages/header.html`(`Header screenshot test 1080`, async t => {
  await t.resizeWindow(1080, 1000);
  await t.expect(await compareScreenshot(t, 'header_1080.png')).ok();
});

test.page`../section-pages/lead.html`(`Lead screenshot test 1080`, async t => {
  await t.resizeWindow(1080, 1000);
  await t.expect(await compareScreenshot(t, 'lead_1080.png')).ok();
});

test.page`../section-pages/intro.html`(`Intro screenshot test 1080`, async t => {
  await t.resizeWindow(1080, 1000);
  await t.expect(await compareScreenshot(t, 'intro_1080.png')).ok();
});

test.page`../section-pages/photo-grid.html`(`Photo-grid screenshot test 1080`, async t => {
  await t.resizeWindow(1080, 1000);
  await t.expect(await compareScreenshot(t, 'photo-grid_1080.png')).ok();
});

test.page`../section-pages/places.html`(`Places screenshot test 1080`, async t => {
  await t.resizeWindow(1080, 1000);
  await t.expect(await compareScreenshot(t, 'places_1080.png')).ok();
});

test.page`../section-pages/cover.html`(`Cover screenshot test 1080`, async t => {
  await t.resizeWindow(1080, 1000);
  await t.expect(await compareScreenshot(t, 'cover_1080.png')).ok();
});

test.page`../section-pages/cover.html`(`Cover_hover screenshot test 1080`, async t => {
  await t.resizeWindow(1080, 100);
  await t.hover('.cover').wait(1000);
  await t.expect(await compareScreenshot(t, 'cover_hover_1080.png')).ok();
});

test.page`../section-pages/footer.html`(`Footer screenshot test 1080`, async t => {
  await t.resizeWindow(1080, 100);
  await t.expect(await compareScreenshot(t, 'footer_1080.png')).ok();
});
