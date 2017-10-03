import { TestProjectPage } from './app.po';

describe('test-project - All Questions View', () => {
    let page: TestProjectPage;

    beforeEach(() => {
        page = new TestProjectPage();
    });

    it('should display title', () => {
        page.navigateTo('/allqbase');
        expect(page.getTitleText()).toEqual('QUESTIONS');
    });
    
    it('should display title', () => {
        expect(page.getTitleText()).toEqual('QUESTIONS');
    });
    
    it('should display question\'s author name', () => {
        expect(page.getAuthorName()).toEqual('Eva');
    });
    
    it('should open modal window with question\'s author name', () => {
        page.openModalByAuthorName();
        expect(page.getUserNameFromModal()).toEqual(page.getAuthorName());
    });
});
