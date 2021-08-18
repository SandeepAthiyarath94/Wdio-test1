import {expect as chaiExpect} from 'chai';
import ebayhomePage from '../pageobjects/ebayhome.page';
import golfPage from '../pageobjects/golf.page';
import loginPage from '../pageobjects/login.page';
import logoutPage from '../pageobjects/logout.page';
import resources from '../resources';
export function homePage() {
    describe('Ebay Home Page', () => {
        it('should validate home page url', async () => {
            await ebayhomePage.open();
            await expect(await browser).toHaveUrl(resources.ebayHomeURL);
        });

        it('should validate the home page title', async() => {
            await expect(await browser).toHaveTitle(resources.ebayHomeTitle);        
        });

        it('should click on shop by category, select golf and redirect to new page', async() => {
            await (await ebayhomePage.shopCategoryButton).click();
            await (await ebayhomePage.golfLink).isClickable();
            await (await ebayhomePage.golfLink).click();
            await expect(await browser).toHaveUrlContaining(resources.partialGolfCartLink);
            
        });
    });
}

export function golfCartPage(){
    describe('Golf cart Page Tests', () => {
        it('should verify that all fields under the featured categories are listed', async() => {
            let numberOfCategoryItems = await golfPage.golfCategories.$$('li').length;
            chaiExpect(numberOfCategoryItems).to.equal(5);
        });

        it('should verify the text for each categories listed under featured categories', async() => {
            let numberOfCategoryItems = await golfPage.golfCategories.$$('li').length;
            let itemNames = [];
            for(let i=0;i<numberOfCategoryItems;i++){
                let itemText = await golfPage.golfCategories.$$('li')[i].getText();
                itemNames.push(itemText);
            }
            chaiExpect(itemNames).to.deep.equal(resources.itemsList);
        });
    });
}

export function login(){
    describe('Login test page', () => {
        it('should validate the username entered is correct', async() => {
            loginPage.open();
            await (loginPage.username).addValue(resources.username);
            await expect(await loginPage.username).toHaveValue(resources.username);
        });

        it('should validate the password entered is correct', async() => { 
            await (await loginPage.password).addValue(resources.password);
            await expect(await loginPage.password).toHaveValue(resources.password)        
        });

        it('should login and redirect to new page', async() => {
            await (await loginPage.loginButton).click();
            await expect(await browser).toHaveUrl(resources.secureLoginPageURL);
        });
    });    
}
 
export function logout(){
    describe('logout from the test website', () => {
        it('should logout and redirect to login page', async() => {
            await (await logoutPage.logoutButton).click();
            await expect(await browser).toHaveUrl(resources.herokkuLoginPageURL);
        });
    });
}