const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "h4-1":"Features",
    "content-1": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "h4-2":"About",
    "content-2": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "h4-3":"Services",
    "content-3": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "h4-4":"Product",
    "content-4": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "h4-5":"Vision",
    "content-5": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Nav
let nav = document.querySelectorAll('a');
nav[0].textContent = "Services";
nav[1].textContent = "Product";
nav[2].textContent = "Vision";
nav[3].textContent = "Features";
nav[4].textContent = "About";
nav[5].textContent = "Contact";
console.log(nav[0]);

//ANUBHAV'S CODE
let counter = 1;
nav.forEach(currentItem => {
  currentItem.textContent = siteContent['nav'][`nav-item-${counter}`];
  currentItem.style.color = 'green';
  counter++
})

let newNav1 = document.querySelectorAll('a')[0];
newNav1.prepend("Hotdogs");

//let newNav2 = document.querySelectorAll('a')[5].createElement('block').appendChild(document.querySelectorAll('a')[5].createElement('b'));
//newNav2.createElement('block').appendChild(newNav2.createElement('b'));

//CTA
let ctaText = document.getElementsByTagName("h1");
ctaText[0].textContent = "DOM is awesome!"
console.log(ctaText[0]);

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

let btnText = document.getElementsByTagName("button");
btnText[0].textContent = siteContent["cta"]["button"];
console.log(siteContent["cta"]["button"]);
console.log(btnText);

//Main Content
let allh4 = document.querySelectorAll("h4");
let counter2 = 1;
allh4.forEach(currentItem => {
  currentItem.textContent = siteContent['main-content'][`h4-${counter2}`];
  counter2++
})

let allContent = document.querySelectorAll("p");
let counter3 = 1;
allContent.forEach(currentItem => {
  currentItem.textContent = siteContent['main-content'][`content-${counter3}`];
  counter3++
})

let mainImg = document.getElementById("middle-img");
mainImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//Contact
let lasth4 = document.querySelectorAll("h4")[5];
lasth4.textContent = "Contact";

let contactP1 = document.querySelectorAll("p")[5];
contactP1.textContent = siteContent["contact"]["address"];
let contactP2 = document.querySelectorAll("p")[6];
contactP2.textContent = siteContent["contact"]["phone"];
let contactP3 = document.querySelectorAll("p")[7];
contactP3.textContent = siteContent["contact"]["email"];

//Footer
let footerP1 = document.querySelectorAll("p")[8];
footerP1.textContent = siteContent["footer"]["copyright"];