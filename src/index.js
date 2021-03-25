import '../src/styles.css';
import menuGallery from './menu.json'
import menuCard from './templates/card.hbs';
console.log(menuGallery)
 console.log(menuCard)

const refs = {
  body: document.querySelector('body'),
  switch: document.querySelector('#theme-switch-toggle'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
refs.switch.addEventListener('change', setClass);
refs.switch.addEventListener('change', setLocalStorage);
function setClass(e) {
  const check = refs.switch.checked;

  if (check) {
    refs.body.classList.add(Theme.DARK);
    refs.body.classList.remove(Theme.LIGHT);
  } else {
    refs.body.classList.add(Theme.LIGHT);
    refs.body.classList.remove(Theme.DARK);
  }
}

function setLocalStorage(e) {
  const check = refs.switch.checked;

  if (check) {
    localStorage.setItem('theme', Theme.DARK);
  } else {
    localStorage.removeItem('theme');
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

const themeInLocal = localStorage.getItem('theme');

if (themeInLocal === Theme.DARK) {
  refs.body.classList.add(Theme.DARK);
  refs.switch.checked = true;
}




