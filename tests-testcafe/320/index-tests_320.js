import { compareScreenshot } from 'devextreme-screenshot-comparer';

fixture`Index page screenshot 320`
  .page('../../index.html');

test(`Index page screenshot test 320`, async t => {
  await t.expect(await compareScreenshot(t, 'index-page_320.png')).ok();
});

test.page`../section-pages/header.html`(`Header screenshot test 320`, async t => {
  await t.expect(await compareScreenshot(t, 'header_320.png')).ok();
});

test.page`../section-pages/lead.html`(`Lead screenshot test 320`, async t => {
  await t.expect(await compareScreenshot(t, 'lead_320.png')).ok();
});

test.page`../section-pages/intro.html`(`Intro screenshot test 320`, async t => {
  await t.expect(await compareScreenshot(t, 'intro_320.png')).ok();
});

test.page`../section-pages/photo-grid.html`(`Photo-grid screenshot test 320`, async t => {
  await t.expect(await compareScreenshot(t, 'photo-grid_320.png')).ok();
});

test.page`../section-pages/places.html`(`Places screenshot test 320`, async t => {
  await t.expect(await compareScreenshot(t, 'places_320.png')).ok();
});

test.page`../section-pages/places.html`(`Places_hover screenshot test 320`, async t => {
  await t.hover('.place__website-link').wait(1000);
  await t.expect(await compareScreenshot(t, 'places_hover_320.png')).ok();
});

test.page`../section-pages/cover.html`(`Cover screenshot test 320`, async t => {
  await t.expect(await compareScreenshot(t, 'cover_320.png')).ok();
});

test.page`../section-pages/cover.html`(`Cover_hover screenshot test 320`, async t => {
  await t.hover('.cover').wait(1000);
  await t.expect(await compareScreenshot(t, 'cover_hover_320.png')).ok();
});

test.page`../section-pages/footer.html`(`Footer screenshot test 320`, async t => {
  await t.expect(await compareScreenshot(t, 'footer_320.png')).ok();
});

test.page`../section-pages/footer.html`(`Footer_hover screenshot test 320`, async t => {
  await t.hover('.footer__link').wait(1000);
  await t.expect(await compareScreenshot(t, 'footer_hover_320.png')).ok();
});
