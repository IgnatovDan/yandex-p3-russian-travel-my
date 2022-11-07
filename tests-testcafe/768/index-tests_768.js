import { Selector } from 'testcafe';
import { compareScreenshot } from 'devextreme-screenshot-comparer';

fixture`Index page screenshot 768`
  .page('../../index.html');

test(`Index page screenshot test 768`, async t => {
  await t.resizeWindow(768, 1000);
  await t.expect(await compareScreenshot(t, 'index-page_768.png')).ok();
});

test.page`../section-pages/header.html`(`Header screenshot test 768`, async t => {
  await t.resizeWindow(768, 1000);
  await t.expect(await compareScreenshot(t, 'header_768.png')).ok();
});

test.page`../section-pages/lead.html`(`Lead screenshot test 768`, async t => {
  await t.resizeWindow(768, 1000);
  await t.expect(await compareScreenshot(t, 'lead_768.png')).ok();
});

test.page`../section-pages/intro.html`(`Intro screenshot test 768`, async t => {
  await t.resizeWindow(768, 1000);
  await t.expect(await compareScreenshot(t, 'intro_768.png')).ok();
});

test.page`../section-pages/photo-grid.html`(`Photo-grid screenshot test 768`, async t => {
  await t.resizeWindow(768, 1000);
  await t.expect(await compareScreenshot(t, 'photo-grid_768.png')).ok();
});

test.page`../section-pages/places.html`(`Places screenshot test 768`, async t => {
  await t.resizeWindow(768, 1000);
  await t.expect(await compareScreenshot(t, 'places_768.png')).ok();
});

test.page`../section-pages/cover.html`(`Cover screenshot test 768`, async t => {
  await t.resizeWindow(768, 1000);
  await t.expect(await compareScreenshot(t, 'cover_768.png')).ok();
});

test.page`../section-pages/cover.html`(`Cover_hover screenshot test 768`, async t => {
  await t.resizeWindow(768, 100);
  await t.hover('.cover').wait(1000);
  await t.expect(await compareScreenshot(t, 'cover_hover_768.png')).ok();
});

test.page`../section-pages/footer.html`(`Footer screenshot test 768`, async t => {
  await t.resizeWindow(768, 100);
  await t.expect(await compareScreenshot(t, 'footer_768.png')).ok();
});
