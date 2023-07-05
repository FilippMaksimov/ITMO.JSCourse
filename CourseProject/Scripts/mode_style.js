//Функция с параметром
function colorMode(param) {
    switch (param) {
        case 'light':
            if (document.body.classList.contains('dark') == true) {
                document.body.classList.remove('dark');
                localStorage.setItem('theme', 'light');
            }
            alert('light mode');
            break;
        case 'dark':
            if (document.body.classList.contains('dark') == false) {
                document.body.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            }
            alert('dark mode');
            break;
        default:
            alert("Ошибка входного параметра функции!");
    }
}