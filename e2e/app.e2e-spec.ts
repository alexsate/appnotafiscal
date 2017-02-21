import { SpringT2Page } from './app.po';

describe('spring-t2 App', function() {
  let page: SpringT2Page;

  beforeEach(() => {
    page = new SpringT2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
