import { golfCartPage, homePage, login, logout } from "../functions";
//import readTextFile from "../functions/readfromfile";

function main() {
    for(let i=0;i<5;i++){
        login();
        logout();
        homePage();
        golfCartPage();
    }
}

main();


