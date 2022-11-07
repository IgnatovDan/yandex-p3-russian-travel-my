import { compareScreenshot } from 'devextreme-screenshot-comparer';

fixture`Index page screenshot 480`
  .page('../../index.html');

test(`Index page screenshot test 480`, async t => {
  await t.expect(await compareScreenshot(t, 'index-page_480.png')).ok();
});

test.page`../section-pages/header.html`(`Header screenshot test 480`, async t => {
  await t.expect(await compareScreenshot(t, 'header_480.png')).ok();
});

test.page`../section-pages/lead.html`(`Lead screenshot test 480`, async t => {
  await t.expect(await compareScreenshot(t, 'lead_480.png')).ok();
});

test.page`../section-pages/intro.html`(`Intro screenshot test 480`, async t => {
  await t.expect(await compareScreenshot(t, 'intro_480.png')).ok();
});

test.page`../section-pages/photo-grid.html`(`Photo-grid screenshot test 480`, async t => {
  await t.expect(await compareScreenshot(t, 'photo-grid_480.png')).ok();
});

test.page`../section-pages/places.html`(`Places screenshot test 480`, async t => {
  await t.expect(await compareScreenshot(t, 'places_480.png')).ok();
});

test.page`../section-pages/cover.html`(`Cover screenshot test 480`, async t => {
  await t.expect(await compareScreenshot(t, 'cover_480.png')).ok();
});

test.page`../section-pages/cover.html`(`Cover_hover screenshot test 480`, async t => {
  await t.hover('.cover').wait(1000);
  await t.expect(await compareScreenshot(t, 'cover_hover_480.png')).ok();
});

test.page`../section-pages/footer.html`(`Footer screenshot test 480`, async t => {
  await t.expect(await compareScreenshot(t, 'footer_480.png')).ok();
});
