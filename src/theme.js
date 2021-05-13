const bodyTheme=document.querySelector('body');
const themeSwitch=document.querySelector('.theme-switch__toggle');
themeSwitch.addEventListener('change', onChange);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const thema = localStorage.getItem('tool') || Theme.LIGHT;
bodyTheme.classList.add(thema);
themeSwitch.checked = thema === Theme.DARK;

// =====================второй способ!===========================
// if (localStorage.getItem('tool')) {    
//     themeSwitch.checked = bodyTheme.classList.contains(Theme.DARK)
//         ? true
//         : false;
// };

function onChange() {           
    if (this.checked) {        
        localStorage.setItem('tool', Theme.DARK);
        bodyColor('light-theme', 'dark-theme');
    }
    else {           
        localStorage.setItem('tool', Theme.LIGHT);
        bodyColor('dark-theme',  'light-theme');
    }
};
function bodyColor(themeRemove, themeAdd) {
    bodyTheme.classList.remove(themeRemove);
    bodyTheme.classList.add(themeAdd);    
}

