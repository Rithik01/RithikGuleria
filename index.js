"use strict";
//////////////////// Creating a responsive navbar //////////
const mobile_nav = document.querySelector('.mobile-navbar-btn');
const headerElem = document.querySelector('.header');

mobile_nav.addEventListener('click', () =>{
   headerElem.classList.toggle('active');
})



////// Scroll to top button ///////

/// We can create a new element with the help document.create in javascript ///

const heroSection = document.querySelector('.section-hero');
const footerElem = document.querySelector('.section-footer');

const scrollElement = document.createElement('div');
scrollElement.classList.add("scrollTop-style");

scrollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;

// We can add a JS element that we created into your html by first getting its refercne
// The meaning of this is that we want to add the scroll Element after our footer.
footerElem.after(scrollElement);


const scrollTop = () => {
  // Here below we called a function scrollToView and it whenever we will click on the icon it will go to the hero section.
  heroSection.scrollIntoView({behavior: "smooth"});
}


scrollElement.addEventListener('click', scrollTop);


//////// Animate Number counter ////////
// const counterNum = document.querySelectorAll('.counter-numbers');

// const speed = 5;

// /////////////// Here below we got the target number ////////////////////
// counterNum.forEach((currElem) => {
//   // Yaha vo dekhega function call hua hai updateNumber fir vo dekhta hai ki upar vahi function define hua hai to usme vo dekhta hai ki ye jo currentElem hai jo humne get kia hai uska unhone dataset attribute ke andar numbers karke jo ek attribute hai ya variable hai to unhone iss value ko get karne ki koshish ki hai aur usko integer me pass kardia hai with the use of parseInt function aur use const targetNumber me store kardia hai //.
//   const updateNumber = () => {
//   const targetNumber = parseInt(currElem.dataset.number);
//   // console.log(targetNumber);
  


//   ////////////// Here below we got the actual number /////////
//   const initialNum = parseInt(currElem.innerText);
//   // console.log(initialNum);
//   const incrementNumber = Math.trunc(targetNumber / speed);
//   // console.log(incrementNumber);

//   if(initialNum < targetNumber) {
//     currElem.innerText = `${initialNum + incrementNumber}+`;

//     setTimeout(updateNumber, 300);
//   }
//   }

//   updateNumber();
// })


// window.addEventListener("scroll", function(){
//   // var header = documentquerySelector('.header');
//   // let header = document.getElementsByClassName("header");
//   let header = this.document.getElementById("testId");
//   // console.log("header is ===== ", header);
//   header.classList.add("sticky");
//   // header.addClass('sticky', window.scrollY > 0);
// })

window.onscroll = function() {
  myFunction();
};

let header  = document.getElementById("headerId"),
  sticky    = header.offsetTop;

// console.log("sticky ======== ", sticky);

function myFunction() {
  // console.log("window.pageYOffset ======== ", window.pageYOffset);
  
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

$(document).ready(function() {
  $(".counter-numbers").counterUp({
    delay : 10,
    time : 1200,
  });
});


const imgRef = document.querySelector('img[data-src]');

const lazyImg = (entries) => {
  // Here below we have targeted only one image otherwise we needed to use forEach()
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;
}
 const imgObserver = new IntersectionObserver(lazyImg, {
  root: null,
  threshold: 0,
});

imgObserver.observe[imgRef];





