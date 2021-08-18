import Page from "./page";
class LogoutPage extends Page{
    get logoutButton(){
        return $('//a[@href="/logout"]');
    }
}
export default new LogoutPage;