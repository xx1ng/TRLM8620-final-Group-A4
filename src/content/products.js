import i18n from '../services/i18n.js';
import {locale} from '../app.js';

var productCatalog = [{}];

const products = {

    loadProductCatalog : async() => {

        await i18n.loadStringsJSON(locale);
        console.log("Loaded locale strings for " + locale);

        productCatalog = [{
            "productID" : 1,
            "type": "droid",
            "class": 2,
            "title": i18n.getString("title", "1"),
            "price": 21,
            "qty": 0,
            "imageURL": "img/espresso_martini.png",
            "desc": i18n.getString("desc", "1")
        },
        {
            "productID" : 2,
            "type": "droid",
            "class": 4,
            "title": i18n.getString("title", "2"),
            "price": 25,
            "qty": 0,
            "imageURL": "img/dry_martini.png",
            "desc": i18n.getString("desc", "2")
        },
        {
            "productID" : 3,
            "type": "droid",
            "class": 1,
            "title": i18n.getString("title", "3"),
            "price": 18,
            "qty": 0,
            "imageURL": "img/rosita.png",
            "desc": i18n.getString("desc", "3")
        },
        {
            "productID" : 4,
            "type": "droid",
            "title": i18n.getString("title", "4"),
            "price": 19,
            "qty": 0,
            "imageURL": "img/night_tripper.png",
            "desc": i18n.getString("desc", "4")
        },
        {
            "productID" : 5,
            "type": "vehicle",
            "title": i18n.getString("title", "5"),
            "price": 20,
            "qty": 0,
            "imageURL": "img/scotch-sour.png",
            "desc": i18n.getString("desc", "5")
        },
        {
            "productID" : 6,
            "type": "droid",
            "title": i18n.getString("title", "6"),
            "price": 18,
            "qty": 0,
            "imageURL": "img/silver-fizz.png",
            "desc": i18n.getString("desc", "6")
        },
        {
            "productID" : 7,
            "type": "vehicle",
            "title": i18n.getString("title", "7"),
            "price": 22,
            "qty": 0,
            "imageURL": "img/wet-martini.png",
            "desc": i18n.getString("desc", "7")
        },
        {
            "productID" : 8,
            "type": "vehicle",
            "title": i18n.getString("title", "8"),
            "price": 16,
            "qty": 0,
            "imageURL": "img/pho_king_champ.png",
            "desc": i18n.getString("desc", "8")
        },
        
        {
            "productID" : 9,
            "type": "vehicle",
            "title": i18n.getString("title", "9"),
            "price": 18,
            "qty": 0,
            "imageURL": "img/spicy_margarita.png",
            "desc": i18n.getString("desc", "9")
        },
        {
            "productID" : 10,
            "type": "droid",
            "title": i18n.getString("title", "10"),
            "price": 23,
            "qty": 0,
            "imageURL": "img/cbd_gin_tonic.png",
            "desc": i18n.getString("desc", "10")
        },
        {
            "productID" : 11,
            "type": "vehicle",
            "title": i18n.getString("title", "11"),
            "price": 150000,
            "qty": 0,
            "imageURL": "img/T70.png",
            "desc": i18n.getString("desc", "11")
        },
        {
            "productID" : 12,
            "type": "vehicle",
            "title": i18n.getString("title", "12"),
            "price": 134999,
            "qty": 0,
            "imageURL": "img/Y-Wing.png",
            "desc": i18n.getString("desc", "12")
        },
        {
            "productID" : 13,
            "type": "droid",
            "title": i18n.getString("title", "13"),
            "price": 4999,
            "qty": 0,
            "imageURL": "img/Super_Tactical.png",
            "desc": i18n.getString("desc", "13")
        }
        
        ];

        return productCatalog;
    }
}


export default products;