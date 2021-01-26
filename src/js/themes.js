const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const { LIGHT, DARK } = Theme;

const checkBoxRef = document.querySelector('.theme-switch__toggle');
const bodyRef = document.querySelector('body');

const savedTheme = localStorage.getItem('Theme');

bodyRef.classList.add(LIGHT);

function changeTheme(event) {
  if (checkBoxRef.checked) {
    bodyRef.classList.replace(LIGHT, DARK);
    localStorage.setItem('Theme', DARK);
  } else {
    bodyRef.classList.replace(DARK, LIGHT);
    localStorage.setItem('Theme', LIGHT);
  }
}

if (savedTheme === DARK) {
  bodyRef.classList.replace(LIGHT, DARK);
  checkBoxRef.checked = true;
} 

checkBoxRef.addEventListener('change', changeTheme);


// local Storage







//checkBoxRef.addEventListener('change', saveToLocal);



// function saveToLocal(event) {
//   if (event.target.checked) {
//     localStorage.setItem('Theme', DARK);
//   } else {
//     localStorage.setItem('Theme', LIGHT);
//   }
// }


// function changeToDarkTheme() {
//   bodyRef.classList.add(DARK);
//   bodyRef.classList.remove(LIGHT);
//   checkBoxRef.checked = true; 
// };

// function changeToLightTheme() {
//   bodyRef.classList.add(LIGHT);
//   bodyRef.classList.remove(DARK);
//   checkBoxRef.checked = false;

//   //localStorage.removeItem(Theme.DARK);  второй способ
// }

// function changeTheme(event) {
//   if (event.target.checked) {
//       changeToDarkTheme();
//   }
//   else  {
//       changeToLightTheme();
//     }
// }