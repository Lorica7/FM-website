console.log ('hi there');

document.addEventListener ('DOMContentLoaded', function (event) {
  const grabDiv = document.querySelector ('#orb');

  grabDiv.addEventListener ('mouseover', () => {
    grabDiv.classList.add ('orb');
  });

  grabDiv.addEventListener ('mouseout', () => {
    grabDiv.classList.remove ('orb');
  });
  console.log (event);
});
