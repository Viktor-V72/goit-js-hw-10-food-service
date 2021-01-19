const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const { LIGHT, DARK } = Theme;

const checkBoxRef = document.querySelector('.theme-switch__toggle');
const bodyRef = document.querySelector('body');

function changeToDarkTheme() {
  bodyRef.classList.add(DARK);
  bodyRef.classList.remove(LIGHT);
  checkBoxRef.checked = true;

    
};

function changeToLightTheme() {
  bodyRef.classList.add(LIGHT);
  bodyRef.classList.remove(DARK);
  checkBoxRef.checked = false;
    
  //localStorage.removeItem(Theme.DARK);  второй способ
}

function changeTheme(event) {
  if (event.target.checked) {
      changeToDarkTheme();
  }
  else  {
      changeToLightTheme();
    }
}

checkBoxRef.addEventListener('change', changeTheme);



// local Storage

const savedMessage = localStorage.getItem('Theme');

checkBoxRef.addEventListener('change', saveToLocal);

if (savedMessage === DARK) {
  changeToDarkTheme();
} else {
  changeToLightTheme();
}


function saveToLocal(event) {
  if (event.target.checked) {
    localStorage.setItem('Theme', DARK);
  } else {
    localStorage.setItem('Theme', LIGHT);
  }
}
