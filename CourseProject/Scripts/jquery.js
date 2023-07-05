$(function() {
    $('#navigation li').hover(function() {
        $(this).children('ul').stop(false, true).fadeIn(300);
    }, function() {
        $(this).children('ul').stop(false, true).fadeOut(300);
    });
    $('#filter_btn').click(function() {
         if (document.getElementById('filter_btn').value == 'Фильтр') {
             $(".filter_form").css("display", "block");
             $('#filter_btn').val('Скрыть фильтр');
         }
         else {
             $(".filter_form").css("display", "none");
             $('#filter_btn').val('Фильтр');
         }
     });

    var mode = localStorage.getItem('theme');
    if (mode == 'dark') {
        $('.theme').addClass('dark');
    }

    var li, article, date, genre;
    li = $('.list_item');
    var comedy_g = 0;
    var action_g = 0;
    var triller_g = 0;
    var horror_g = 0;
    var melod_g = 0;
    var det_g = 0;
    var hist_g = 0;
    var doc_g = 0;
    var fant_g = 0;
    var jurney_g = 0;
    var total = 0;
    li.each(function() {
        article = $(this).children('article')[0];
        date = $('p.date', article)[0];
        console.log(date);
        if (parseInt(date.innerText) == 2023) {
            article.classList.add("new");
        }
        genre = $('p.genre', article)[0];
        if (genre.innerText.includes('Комедии')) {
            comedy_g++;
        }
        if (genre.innerText.includes('Боевики')) {
            action_g++;
        }
        if (genre.innerText.includes('Триллеры')) {
            triller_g++;
        }
        if (genre.innerText.includes('Ужасы')) {
            horror_g++;
        }
        if (genre.innerText.includes('Мелодрамы')) {
            melod_g++;
        }
        if (genre.innerText.includes('Детектив')) {
            det_g++;
        }
        if (genre.innerText.includes('Исторический')) {
            hist_g++;
        }
        if (genre.innerText.includes('Документальный')) {
            doc_g++;
        }
        if (genre.innerText.includes('Фантастика')) {
            fant_g++;
        }
        if (genre.innerText.includes('Приключения')) {
            jurney_g++;
        }
        total++;
    })
    $("td:contains('Всего фильмов(место)')").html(total);
    $("td:contains('Комедии(место)')").html(comedy_g);
    $("td:contains('Боевики(место)')").html(action_g);
    $("td:contains('Триллеры(место)')").html(triller_g);
    $("td:contains('Ужасы(место)')").html(horror_g);
    $("td:contains('Детектив(место)')").html(det_g);
    $("td:contains('Исторический(место)')").html(hist_g);
    $("td:contains('Документальный(место)')").html(doc_g);
    $("td:contains('Фантастика(место)')").html(fant_g);
    $("td:contains('Приключения(место)')").html(jurney_g);
    $("td:contains('Мелодрамы(место)')").html(melod_g);
});