console.log ('hi there');

/* ****** Product Vendor Services *****************************/
const grabDiv = document.getElementById ('pvs-border');
const grabCircle = document.getElementById ('circle');

grabDiv.addEventListener ('mouseover', () => {
  grabCircle.classList.add ('orb');
  console.log ('mousing over!');
});

grabDiv.addEventListener ('mouseout', () => {
  grabDiv.classList.remove ('orb');
  console.log ('mousing out');
});

/***************Two 22222222222  Real Estate Group   */

const grabDiv2 = document.getElementById ('second');
const getTarget = document.getElementById ('target');
// const getFuzz = document.querySelectorAll ('brookfield');
// const getFuzz2 = document.querySelectorAll ('westfield');
// const getFuzz3 = document.querySelectorAll ('centennial');

getTarget.addEventListener ('mouseover', () => {
  grabDiv2.classList.add ('orb');
  // getFuzz.classList.add ('image-fuzz');
  // getFuzz2.classList.add ('image-fuzz');
  // getFuzz3.classList.add ('image-fuzz');

  console.log ('mousing over!');
});

getTarget.addEventListener ('mouseout', () => {
  grabDiv2.classList.remove ('orb');
  getOrb.classList.remove ('fuzz');

  console.log ('mousing out');
});

/*  THREE 3333333333333333333333333333 **************/

const getTarget3 = document.getElementById ('target-three');

getTarget3.addEventListener ('mouseover', () => {
  getTarget3.classList.add ('orb');
  console.log ('mousing over!');
});

getTarget3.addEventListener ('mouseout', () => {
  getTarget3.classList.remove ('orb');
  console.log ('mousing out');
});

/* ************************ Four ( R&D) **********************/

const getTarget4 = document.querySelector ('.target-four');
const orbHolder = document.getElementById ('orb-holder');
// const getRD = document.getElementById ('rand');

getTarget4.addEventListener ('mouseover', () => {
  orbHolder.classList.add ('orb');
  // getRD.classList.add ('fuzz');
  console.log ('mousing over!');
});

getTarget4.addEventListener ('mouseout', () => {
  orbHolder.classList.remove ('orb');
  console.log ('mousing out');
});
