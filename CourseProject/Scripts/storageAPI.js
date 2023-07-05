$(function() {
    var art, a, img, ref, p, date, genre, desc;
    $('div.fav').click(function() {
        const data_object = {
            film_name: '',
            reference: '',
            picture: '', 
            year: '',
            genre: '',
            description: ''
        }
        var key = $(this).attr('id');
        if ($(this).hasClass('active')) {
            $(this).removeClass('active')
            localStorage.removeItem(key);
        }
        else {
            $(this).addClass('active');
            //Добавление в хранилище;
            art = $(this).parent().first();

            //Picture
            a = art.children('a')[0];
            img = a.children[0].getAttribute('src');
            data_object.picture = img;
            console.log(data_object.picture);
            //Film_name
            a = art.children('a')[1];
            data_object.film_name = a.text;
            console.log(data_object.film_name);
            //Ref
            ref = a.getAttribute('href');
            data_object.reference = ref;
            console.log(data_object.reference);
            //Year
            p = art.children('p.date')[0];
            date = p.innerText;
            data_object.year = date;
            console.log(data_object.year);
            //Genre
            p = art.children('p.genre')[0];
            genre = p.innerText;
            data_object.genre = genre;
            console.log(data_object.genre);
            //Description
            p = art.children('p.film_description')[0];
            desc = p.innerText;
            data_object.description = desc;
            console.log(data_object.description);

            //Добавление данных
            localStorage.setItem(key, JSON.stringify(data_object));
        }
    });
});