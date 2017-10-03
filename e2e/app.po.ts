import { browser, by, element, protractor } from 'protractor';

export class TestProjectPage {
    vaitForDataLoad() {
        let EC = protractor.ExpectedConditions;
        let layout = element(by.css('.layout'));
        browser.wait(EC.visibilityOf(layout), 5000);
    }
    
    vaitForAngular() {
        browser.waitForAngularEnabled(true);
    }
    
    navigateTo(url) {
        this.vaitForAngular();
        browser.get(url);
        this.vaitForDataLoad();
    }

    getTitleText() {
        return element(by.css('.q-title')).getText();
    }
    
    openModalByAuthorName() {
        return element(by.css('.question-author-name')).click();
    }
    
    getAuthorName() {
        return element(by.css('.question-author-name')).getText();
    }
    
    getUserNameFromModal() {
        return element(by.css('.modal-user-name')).getText();
    }
    
}
