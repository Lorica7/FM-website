window.onscroll = function (ev) {
  console.log (ev);
  console.log.log ('no way!!!');
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    setTimeout (classChanger, 5000);
  }
};

let classChanger = function () {
  document.getElementById ('banner1').classList.remove ('closed');
  document.getElementById ('banner1').classList.add ('slide-up');
};
