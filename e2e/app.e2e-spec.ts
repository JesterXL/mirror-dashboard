import { MirrorDashboardPage } from './app.po';

describe('mirror-dashboard App', function() {
  let page: MirrorDashboardPage;

  beforeEach(() => {
    page = new MirrorDashboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
