function searchFunction() {
    var input, filter, ol, li, i, a, txtValue;
    input = document.getElementById('search_input');
    filter = input.value.toUpperCase();
    ol = document.getElementById("film_id");
    li = ol.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByClassName("link_style")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        }
        else {
            li[i].style.display = "none";
        }
    }
}

function filterFunction() {
    var ol, li, i, j, article, p;
    var date, intDate, class_list;

    var date_sel = document.getElementById('date_sel').selectedIndex;
    var date_opt = document.getElementById('date_sel').options;

    var country_sel = document.getElementById('country_sel').selectedIndex;
    var country_opt = document.getElementById('country_sel').options;

    // создать массивы для возраста и определния года-страны
    ol = document.getElementById("film_id");
    li = ol.getElementsByTagName('li');
    let form = document.forms.f_form;
    let genre_check = form.elements.genre_ch;
    let age_restr = form.elements.radio_btn;

    let arr_1 = [];
    let arr_2 = [];
    let arr_3 = [];

    //Genre
    for (i = 0; i < li.length; i++) {
        article = li[i].getElementsByTagName('article')[0];
        p = article.getElementsByClassName('genre')[0];
        li[i].style.display = "none";
         
        if (genre_check[0].checked == true) {
            if (p.innerText.includes('Комедии') == true) {
                li[i].style.display = "";
                arr_1[arr_1.length] = li[i];
            }
        }
        if (genre_check[1].checked == true) {
            if (p.innerText.includes('Фантастика') == true) {
                li[i].style.display = "";
                arr_1[arr_1.length] = li[i];
            }
        }
        if (genre_check[2].checked == true) {
            if (p.innerText.includes('Ужасы') == true) {
                li[i].style.display = "";
                arr_1[arr_1.length] = li[i];
            }
        }
        if (genre_check[3].checked == true) {
            if (p.innerText.includes('Триллеры') == true) {
                li[i].style.display = "";
                arr_1[arr_1.length] = li[i];
            }
        }
        if (genre_check[4].checked == true) {
            if (p.innerText.includes('Исторический') == true) {
                li[i].style.display = "";
                arr_1[arr_1.length] = li[i];
            }
        }
        if (genre_check[5].checked == true) {
            if (p.innerText.includes('Боевики') == true) {
                li[i].style.display = "";
                arr_1[arr_1.length] = li[i];
            }
        }
        if (genre_check[6].checked == true) {
            if (p.innerText.includes('Детектив') == true) {
                li[i].style.display = "";
                arr_1[arr_1.length] = li[i];
            }
        }
        if (genre_check[7].checked == true) {
            if (p.innerText.includes('Документальный') == true) {
                li[i].style.display = "";
                arr_1[arr_1.length] = li[i];
            }
        }
        if (genre_check[8].checked == true) {
            if (p.innerText.includes('Мелодрамы') == true) {
                li[i].style.display = "";
                arr_1[arr_1.length] = li[i];
            }
        }
        if (genre_check[9].checked == true) {
            if (p.innerText.includes('Приключения') == true) {
                li[i].style.display = "";
                arr_1[arr_1.length] = li[i];
            }
        }
    }

    if (arr_1.length == 0) {
        arr_1 = li;
    }
    console.log(arr_1);

    //Date
    for (i = 0; i < arr_1.length; i++) {
        arr_1[i].style.display = "none";
        article = arr_1[i].getElementsByTagName('article')[0];
        date = article.getElementsByClassName('date')[0];
        intDate = parseInt(date.innerText);
        switch (date_opt[date_sel].value) {
            case '1990-1999':
                if (intDate >=1990 && intDate <= 1999) {
                    arr_1[i].style.display = "";
                    arr_2[arr_2.length] = arr_1[i];
                }
                break;
            case '2000-2010':
                if (intDate >=2000 && intDate <= 2010) {
                    arr_1[i].style.display = "";
                    arr_2[arr_2.length] = arr_1[i];
                }
                break;
            case '2011-2020':
                if (intDate >=2011 && intDate <= 2020) {
                    arr_1[i].style.display = "";
                    arr_2[arr_2.length] = arr_1[i];
                }
                break;
            case '2021-2030':
                if (intDate >=2021 && intDate <= 2030) {
                    arr_1[i].style.display = "";
                    arr_2[arr_2.length] = arr_1[i];
                }
                break;
            default:
                arr_1[i].style.display = "";
                arr_2[arr_2.length] = arr_1[i];
        }
    }
    console.log(arr_2);

    //Country
    for (i = 0; i < arr_2.length; i++) {
        arr_2[i].style.display = "none";
        elem = arr_2[i].querySelector('article');
        class_list = elem.classList;
        if (class_list.contains(country_opt[country_sel].value)) {
            arr_2[i].style.display = "";
            arr_3[arr_3.length] = arr_2[i];
        }
        else if (country_opt[country_sel].value == 'all_c') {
            arr_2[i].style.display = "";
            arr_3[arr_3.length] = arr_2[i];
        }
    }
    console.log(arr_3);

    //Age restriction
    for (i = 0; i < arr_3.length; i++) {
        arr_3[i].style.display = "none";
        elem = arr_3[i].querySelector('article');
        class_list = elem.classList;
        if (age_restr[0].checked == true) {
            if (class_list.contains('censored')) {
                arr_3[i].style.display = "";
            }
        else if (age_restr[1].checked == true) {
                if (!class_list.contains('censored')) {
                    arr_3[i].style.display = "";
                }
            }
        }
        else {
            arr_3[i].style.display = "";
        }
    }
}