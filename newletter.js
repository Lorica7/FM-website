window.onscroll = function (ev) {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    setTimeout (classChanger, 1500);
    console.log (ev);
  }
};

let classChanger = function () {
  document.getElementById ('banner1').classList.add ('moved');
  document.getElementById ('wrapped-frame').classList.add ('moved');
};

// let API_url = 'https://api.sendgrid.com/v3/';

// let reqBody = {
//   contacts: [
//     {
//       email: 'string (required)',
//     },
//   ],
// };
