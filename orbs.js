/* ****** Product Vendor Services *****************************/
const grabTarget = document.getElementById ('pvs-border');
const grabCircle = document.getElementById ('circle');

grabTarget.addEventListener ('mouseover', () => {
  grabCircle.classList.add ('orb');
});

grabTarget.addEventListener ('mouseout', () => {
  grabCircle.classList.remove ('orb');
});

/***************Two 22222222222  Real Estate Group   */
const grabTarget2 = document.getElementById ('target');

const grabCircle2 = document.getElementById ('circle2');

grabTarget2.addEventListener ('mouseover', () => {
  grabCircle2.classList.add ('orb');
});

grabTarget2.addEventListener ('mouseout', () => {
  grabCircle2.classList.remove ('orb');
});

/*  THREE 3333333333333333333333333333 **************/

const getTarget3 = document.getElementById ('target-three');
const getCircle3 = document.getElementById ('circle-three');

getTarget3.addEventListener ('mouseover', () => {
  getCircle3.classList.add ('orb');
});

getTarget3.addEventListener ('mouseout', () => {
  getCircle3.classList.remove ('orb');
});

/* ************************ Four ( R&D) **********************/

const getTarget4 = document.getElementById ('target-four');
const getCircle4 = document.getElementById ('circle-four');

getTarget4.addEventListener ('mouseover', () => {
  getCircle4.classList.add ('orb');
  console.log ('Four here');
});

getTarget4.addEventListener ('mouseout', () => {
  getCircle4.classList.remove ('orb');
});

/**************FIVE******************** */

const getTarget5 = document.getElementById ('target-five');
const getCircle5 = document.getElementById ('circle-five');

getTarget5.addEventListener ('mouseover', () => {
  getCircle5.classList.add ('orb');
  console.log ('Four here');
});

getTarget5.addEventListener ('mouseout', () => {
  getCircle5.classList.remove ('orb');
});

const pvg = document.querySelectorAll ('purple-back');
