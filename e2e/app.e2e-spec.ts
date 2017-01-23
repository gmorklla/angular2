import { PollPage } from './app.po';

describe('poll App', function() {
  let page: PollPage;

  beforeEach(() => {
    page = new PollPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
