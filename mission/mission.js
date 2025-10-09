
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        document.body.style.backgroundColor = '#333';
        document.body.style.color = 'white';
        logo.src = 'byui-logo-white.png';

        localStorage.setItem('theme', 'dark');
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = '#333';
        logo.src = 'byui-logo-blue.webp';

        localStorage.setItem('theme', 'light');
    }
}           
                    