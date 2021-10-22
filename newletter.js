window.onscroll = function (ev) {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    document.getElementById ('banner1').classList.remove ('closed');
    document.getElementById ('banner1').classList.add ('slide-up');
  }
};
