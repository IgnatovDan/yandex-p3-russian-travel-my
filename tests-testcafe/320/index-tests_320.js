import { compareScreenshot } from 'devextreme-screenshot-comparer';
import { Selector } from 'testcafe';

fixture`Index page screenshot 320`
  .page('../../index.html');

test(`Index page screenshot test 320`, async t => {
  await t.resizeWindow(320, 1000);
  await t.expect(await compareScreenshot(t, 'index-page_320.png')).ok();
});

test.page`../section-pages/header.html`(`Header screenshot test 320`, async t => {
  await t.resizeWindow(320, 1000);
  const element = Selector('.header');
  await t.expect(await compareScreenshot(t, 'header_320.png', element)).ok();
});

test.page`../section-pages/lead.html`(`Lead screenshot test 320`, async t => {
  await t.resizeWindow(320, 1000);
  const element = Selector('.lead');
  await t.expect(await compareScreenshot(t, 'lead_320.png', element)).ok();
});

test.page`../section-pages/intro.html`(`Intro screenshot test 320`, async t => {
  await t.resizeWindow(320, 1000);
  const element = Selector('.intro');
  await t.expect(await compareScreenshot(t, 'intro_320.png', element)).ok();
});

test.page`../section-pages/photo-grid.html`(`Photo-grid screenshot test 320`, async t => {
  await t.resizeWindow(320, 1000);
  const element = Selector('.photo-grid');
  await t.expect(await compareScreenshot(t, 'photo-grid_320.png', element)).ok();
});

test.page`../section-pages/places.html`(`Places screenshot test 320`, async t => {
  await t.resizeWindow(320, 1000);
  const element = Selector('.places');
  await t.expect(await compareScreenshot(t, 'places_320.png', element)).ok();
});

test.page`../section-pages/cover.html`(`Cover screenshot test 320`, async t => {
  await t.resizeWindow(320, 1000);
  await t.expect(await compareScreenshot(t, 'cover_320.png')).ok();
});

// TODO: add similar tests for other resolutions
// TODO: test entire page with all spaces instead of internals of a block
