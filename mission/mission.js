
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        document.body.style.backgroundColor = '#121212';
        document.body.style.color = '#f0f0f0';
        logo.src = 'byui-logo-white.png';

        localStorage.setItem('theme', 'dark');
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        logo.src = 'byui-logo-blue.webp';

        localStorage.setItem('theme', 'light');
    }
}           
                    