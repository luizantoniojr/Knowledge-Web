import { ProfileMappingWebPage } from './app.po';

describe('profile-mapping-web App', () => {
  let page: ProfileMappingWebPage;

  beforeEach(() => {
    page = new ProfileMappingWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
