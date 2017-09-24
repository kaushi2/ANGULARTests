import { ANGularTestsPage } from './app.po';

describe('angular-tests App', () => {
  let page: ANGularTestsPage;

  beforeEach(() => {
    page = new ANGularTestsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
