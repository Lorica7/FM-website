console.log ('latest');

/* ****** Product Vendor Services *****************************/
const grabDiv = document.getElementById ('pvs-border');
const grabCircle = document.getElementById ('circle');

grabDiv.addEventListener ('mouseover', () => {
  grabCircle.classList.remove ('orb');
});

grabDiv.addEventListener ('mouseout', () => {
  grabCircle.classList.remove ('orb');
});

/***************Two 22222222222  Real Estate Group   */

const grabDiv2 = document.getElementById ('circle2');
const getTarget = document.getElementById ('target');

getTarget.addEventListener ('mouseover', () => {
  grabDiv2.classList.add ('orb');
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

const getTarget4 = document.getElementById ('target-four');
const orbHolder = document.getElementById ('orb-holder');

getTarget4.addEventListener ('mouseover', () => {
  orbHolder.classList.add ('orb');
  console.log ('Four here');
});

getTarget4.addEventListener ('mouseout', () => {
  orbHolder.classList.remove ('orb');
});

/**************FIVE******************** */

const getTarget5 = document.getElementById ('target-five');
const orbHolder2 = document.getElementById ('orb-holder-two');

getTarget5.addEventListener ('mouseover', () => {
  orbHolder2.classList.add ('orb');
  console.log ('Four here');
});

getTarget5.addEventListener ('mouseout', () => {
  orbHolder2.classList.remove ('orb');
});
