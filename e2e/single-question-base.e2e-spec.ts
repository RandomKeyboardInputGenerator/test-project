import { TestProjectPage } from './app.po';

describe('test-project - Single Question View', () => {
    let page: TestProjectPage;

    beforeEach(() => {
        page = new TestProjectPage();
    });

    it('should display title', () => {
        page.navigateTo('/question/0');
        expect(page.getTitleText()).toEqual('QUESTION');
    });
});

