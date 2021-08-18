import Page from './page';
class LoginPage extends Page{
    open(){
        super.open('https://the-internet.herokuapp.com/login');
    }

    get username(){
        return $('#username');

    }

    get password(){
        return $('#password');
    }

    get loginButton(){
        return $('button');
    }

}

export default new LoginPage;