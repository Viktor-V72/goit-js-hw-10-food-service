const checkBoxRef = document.querySelector('.theme-switch__toggle');
const bodyRef = document.querySelector('body');

function changeToDarkTheme() {
    bodyRef.classList.add('dark-theme');
    bodyRef.classList.remove('light-theme');
    checkBoxRef.checked = true;

    
};

function changeToLightTheme() {
     bodyRef.classList.add('light-theme');
     bodyRef.classList.remove('dark-theme');
     checkBoxRef.checked = false;
    
     localStorage.removeItem('dark-theme');
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

const savedDarkMessage = localStorage.getItem('dark-theme');

checkBoxRef.addEventListener('change', saveToLocal);

if (savedDarkMessage) {
  changeToDarkTheme();
}

function saveToLocal(event) {
  if (event.currentTarget.checked) {
    localStorage.setItem('dark-theme', event.currentTarget.checked);
  }
}
