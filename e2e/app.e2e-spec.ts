import { ToxNg4Page } from './app.po';

describe('tox-ng4 App', () => {
  let page: ToxNg4Page;

  beforeEach(() => {
    page = new ToxNg4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
