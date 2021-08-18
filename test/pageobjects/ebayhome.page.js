import Page from "./page";
class EbayHomePage extends Page{
    open(){
        super.open('https://www.ebay.com/');
    }

    get shopCategoryButton(){
        return $('#gh-shop-a');
    }
    get golfLink(){
        return $('//*[@id="gh-sbc"]/tbody/tr/td[3]/ul[1]/li[4]/a');
    }
} 
export default new EbayHomePage;