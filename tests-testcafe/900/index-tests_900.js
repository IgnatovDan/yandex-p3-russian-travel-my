import { Selector } from 'testcafe';
import { compareScreenshot } from 'devextreme-screenshot-comparer';

fixture`Index page screenshot 900`
  .page('../../index.html');

test(`Index page screenshot test 900`, async t => {
  await t.resizeWindow(900, 1000);
  await t.expect(await compareScreenshot(t, 'index-page_900.png')).ok();
});

test.page`../section-pages/header.html`(`Header screenshot test 900`, async t => {
  await t.resizeWindow(900, 1000);
  await t.expect(await compareScreenshot(t, 'header_900.png')).ok();
});

test.page`../section-pages/lead.html`(`Lead screenshot test 900`, async t => {
  await t.resizeWindow(900, 1000);
  await t.expect(await compareScreenshot(t, 'lead_900.png')).ok();
});

test.page`../section-pages/intro.html`(`Intro screenshot test 900`, async t => {
  await t.resizeWindow(900, 1000);
  await t.expect(await compareScreenshot(t, 'intro_900.png')).ok();
});

test.page`../section-pages/photo-grid.html`(`Photo-grid screenshot test 900`, async t => {
  await t.resizeWindow(900, 1000);
  await t.expect(await compareScreenshot(t, 'photo-grid_900.png')).ok();
});

test.page`../section-pages/places.html`(`Places screenshot test 900`, async t => {
  await t.resizeWindow(900, 1000);
  await t.expect(await compareScreenshot(t, 'places_900.png')).ok();
});

test.page`../section-pages/cover.html`(`Cover screenshot test 900`, async t => {
  await t.resizeWindow(900, 1000);
  await t.expect(await compareScreenshot(t, 'cover_900.png')).ok();
});
