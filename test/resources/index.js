import readTextFile from "../functions/readfromfile"

const details = readTextFile();
const name = details[0].trim('"');
const pass = details[1].trim('"');
export default {
    ebayHomeURL : 'https://www.ebay.com/',
    ebayHomeTitle : 'Electronics, Cars, Fashion, Collectibles & More | eBay',
    partialGolfCartLink : '/Golf-Equipment/',
    //username : 'tomsmith',
    //password : 'SuperSecretPassword!',
    username : name,
    password : pass,
    secureLoginPageURL : 'https://the-internet.herokuapp.com/secure',
    herokkuLoginPageURL : 'https://the-internet.herokuapp.com/login', 
    itemsList : ['Golf Clubs',
    'Iron Set Golf Clubs',
    'Driver Golf Clubs',
    'Putter Golf Clubs',
    "Men's Golf Clubs"
    ]
}