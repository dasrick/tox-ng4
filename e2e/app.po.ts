import { browser, element, by } from 'protractor';

export class ToxNg4Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root span')).getText();
  }
}
