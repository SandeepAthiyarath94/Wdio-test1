import Page from "./page";
class GolfPage extends Page{
    get golfCategories(){
        return $('div.dialog__cell section:nth-child(1) ul');
    }
}
export default new GolfPage;