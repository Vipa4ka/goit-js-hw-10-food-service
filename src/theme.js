const bodyTheme=document.querySelector('body');
const themeSwitch=document.querySelector('.theme-switch__toggle');
themeSwitch.addEventListener('change', onChange);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

bodyTheme.classList = localStorage.getItem('tool');
bodyTheme.classList.add(Theme.LIGHT);

if (bodyTheme.classList.contains(Theme.DARK)) {
    themeSwitch.checked = true;
};

if (!localStorage.tool) {
        localStorage.setItem('tool', Theme.LIGHT);
    };
// =====================второй способ!===========================
// if (localStorage.getItem('tool')) {    
//     themeSwitch.checked = bodyTheme.classList.contains(Theme.DARK)
//         ? true
//         : false;
// };

function onChange() {           
    if (this.checked) {        
        localStorage.setItem('tool', Theme.DARK);
        bodyTheme.classList.remove(Theme.LIGHT);
        bodyTheme.classList.add(Theme.DARK); 
    }
    else {           
        localStorage.setItem('tool', Theme.LIGHT);
        bodyTheme.classList.remove(Theme.DARK);
        bodyTheme.classList.add(Theme.LIGHT);        
    }
};





// function bodyDark() {
//     bodyTheme.classList.remove(Theme.LIGHT);
//     bodyTheme.classList.add(Theme.DARK);
// };
// function bodyLight() {
//     bodyTheme.classList.remove(Theme.DARK);
//     bodyTheme.classList.add(Theme.LIGHT);    
// };    