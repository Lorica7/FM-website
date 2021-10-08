console.log ('hi there');

/* ****** Product Vendor Services *****************************/
const grabDiv = document.getElementById ('pvs-border');
const grabCircle = document.getElementById ('circle');

grabDiv.addEventListener ('mouseover', () => {
  grabCircle.classList.add ('orb');
});

grabDiv.addEventListener ('mouseout', () => {
  grabCircle.classList.remove ('orb');
});

/***************Two 22222222222  Real Estate Group   */

const grabDiv2 = document.getElementById ('circle2');
const getTarget = document.getElementById ('target');
// const getFuzz = document.querySelectorAll ('brookfield');
// const getFuzz2 = document.querySelectorAll ('westfield');
// const getFuzz3 = document.querySelectorAll ('centennial');

getTarget.addEventListener ('mouseover', () => {
  grabDiv2.classList.add ('orb');
  // getFuzz.classList.add ('image-fuzz');
  // getFuzz2.classList.add ('image-fuzz');
  // getFuzz3.classList.add ('image-fuzz');
});

getTarget.addEventListener ('mouseout', () => {
  grabDiv2.classList.remove ('orb');
  // getOrb.classList.remove ('fuzz');
});

/*  THREE 3333333333333333333333333333 **************/

const getTarget3 = document.getElementById ('orb3');
const getThree = document.getElementById ('circle-three');

getTarget3.addEventListener ('mouseover', () => {
  getThree.classList.add ('orb');
  console.log ('three here');
});

getTarget3.addEventListener ('mouseout', () => {
  getThree.classList.remove ('orb');
});

/* ************************ Four ( R&D) **********************/

const getTarget4 = document.getElementById ('.target-four');
const orbHolder = document.getElementById ('orb-holder');

getTarget4.addEventListener ('mouseover', () => {
  orbHolder.classList.add ('orb');
  console.log ('Four here');
});

getTarget4.addEventListener ('mouseout', () => {
  orbHolder.classList.remove ('orb');
});
