window.onscroll = function (ev) {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    setTimeout (classChanger, 2500);
    console.log (ev);
    console.log ('no way!!!');
  }
};

let classChanger = function () {
  console.log ('no way!!!');
  document.getElementById ('banner1').classList.add ('moved');
};
