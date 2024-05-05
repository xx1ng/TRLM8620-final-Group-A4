import Utils from "../../services/Utils.js";
import { locale, updateLocale, showCart} from "../../app.js";
import i18n from "../../services/i18n.js";

//global dropdown element reference
let drop;

let Navbar = {
    render: async () => {
        //fetch locale-sensitive strings via i18n method
        let searchPlaceholder = i18n.getString("Navbar", "searchPlaceholder");
        let searchButtonLabel = i18n.getString("Navbar", "searchButtonLabel");
        let logoAlt = i18n.getString("Navbar", "logoAlt");
        let searchIconAlt = i18n.getString("Navbar", "searchIconAlt");
        let historyLink = i18n.getString("Navbar", "historyLink");
        let arrowAlt = i18n.getString("Navbar", "arrowAlt");
        let greetingText = i18n.getString("Navbar", "greetingText");
        let cartAlt = i18n.getString("Navbar", "cartAlt");
        let navLinkHome = i18n.getString("Navbar", "navLinkHome");
        let navLinkDroids = i18n.getString("Navbar", "navLinkDroids");
        let navLinkVehicles = i18n.getString("Navbar", "navLinkVehicles");

        let localeLabel = i18n.getString("LocaleSelector", "localeLabel");
        let localeEN = i18n.getString("LocaleSelector", "localeEN");
        let localeZH = i18n.getString("LocaleSelector", "localeZH");
        let localeFR = i18n.getString("LocaleSelector", "localeFR");


        //view is solely for HTML markup, contains no static text
        let view =
        `<header>
        <!-- logo, search bar, local, profile drop down -->
        <section>
            <img src="img/Logo.png" id="logo" alt="${logoAlt}">
        </section>
        <section id="search">
            <div id="bar">
                <input type="text" class="searchTerm" placeholder="${searchPlaceholder}" aria-label="${searchButtonLabel}">
                <button type="submit" class="searchButton" aria-label="${searchButtonLabel}">
                    <img src="img/search.svg" id="searchIcon" alt="${searchIconAlt}">
                </button>
             </div>
        </section>
        <section id="headOptions">
            <div class="dropdown">
                <div class="dropbtn">
                    <h2 id="greetingText">${greetingText}</h2>
                    <img src="img/arrow-down.svg" id="downArrow" alt="${arrowAlt}">
                </div>
                <div class="dropdown-content">
                    <a href="./#/history" class=".historyButt">${historyLink}</a>
                </div>
            </div>
            <img src="img/cart.svg" class="cartIcon" alt="${cartAlt}">
            <div class="localeSelector">
              <label for="locale"><h3>${localeLabel}</h3></label>
              <select id="locale" class="hamDrop">
                <option value="en-US">${localeEN}</option>
                <option value="zh-CN">${localeZH}</option>
              </select>
            </div>
        </section>
    </header>
    <nav>
        <!-- nav links here -->
        <ul>
            <li><a href="./#/" class="navLink" id="">${navLinkHome}</a></li>
            <li><a href="./#/droids" class="navLink" id="droids">${navLinkDroids}</a></li>
            <li><a href="./#/vehicles" class="navLink" id="vehicles">${navLinkVehicles}</a></li>
        </ul>
    </nav>
    `;
        return view
    },
    after_render: async () => {

        //cart slider functionality
        var cartIcons = document.querySelectorAll(".cartIcon");
        //show/hide the cart when cart icon is clicked
        for(let icon of cartIcons) {
            icon.addEventListener("click", showCart, false);
        }

        //add click listener to clse cart when user clicks anywhere else on page
        var overlayBG = document.querySelector('.bg');
        overlayBG.addEventListener('click', hideCart, false);

        var logo = document.querySelector("#logo");
        //redirect to home on logo click
        logo.addEventListener("click", function() {
            location.href="./#";
        }, false);

        //underline active link
        //figure out what resource path we're at and add the activeLink class so it can be styled in css
        let request = Utils.parseRequestURL();
        //link animation stuff
        let navLinks = document.querySelectorAll(".navLink");
        for(let cur of navLinks) {
            cur.classList.remove("activeLink");
            cur.classList.remove("inactiveLink");
            if(cur.id == request.resource) {
                cur.classList.add("activeLink");
            }
            else {
                cur.classList.add("inactiveLink");
            }
        }

        drop = document.querySelector('#locale');
        //show selected locale in dropdown
        drop.value = locale;
        //listen for locale changes
        drop.addEventListener("input", changeLocale, false);
    }
}

//function to hide cart (only when it's currently visible)
var hideCart = e => {
    console.log('click to hide triggered');
    var slider = document.querySelector(".cartSlider")
    var bg = document.querySelector('.bg');

    slider.classList.remove('showCart');
    bg.classList.remove('overlay');
}

//function to change locale and reload page
var changeLocale = (e) => {
    let newLocale = drop.value;
    updateLocale(newLocale);
}

export default Navbar;