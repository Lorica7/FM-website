console.log ('hi there');

const grabDiv = document.getElementById ('orb');

grabDiv.addEventListener ('mouseover', () => {
  grabDiv.classList.add ('orb');
  console.log ('mousing over!');
});

grabDiv.addEventListener ('mouseout', () => {
  grabDiv.classList.remove ('orb');
  console.log ('mousing out');
});

const grabDiv2 = document.getElementById ('second');
const getTarget = document.getElementById ('target');

getTarget.addEventListener ('mouseover', () => {
  grabDiv2.classList.add ('orb');
  console.log ('mousing over!');
});

getTarget.addEventListener ('mouseout', () => {
  grabDiv2.classList.remove ('orb');
  console.log ('mousing out');
});
