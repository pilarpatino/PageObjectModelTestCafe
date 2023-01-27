import {Selector, t} from 'testcafe'

class LoginPage{
    constructor(){
        this.emailInput= Selector('#Email');
        this.passwordInput = Selector('#Password');
        this.submitButton = Selector('input.button-1.login-button');
        this.accoountHeader = Selector("Strong").withText("Returning Customer")
    }
}

export default new LoginPage();
