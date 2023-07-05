var count = 0;
for(var item in localStorage) {
    if (item != 'length' && item != 'clear' && item != 'getItem' && 
    item != 'key' && item != 'removeItem' && item != 'setItem' && item != 'theme') {
        const arr = JSON.parse(localStorage.getItem(item));

        let div = document.createElement('div');
        div.setAttribute('class', 'film_container');
        div.style.backgroundImage = `url('${arr['picture']}')`;
        let main = document.querySelector('main');
        main.appendChild(div);

        let div2 = document.createElement('div');
        div2.setAttribute('class', 'fav active');
        div2.setAttribute('id', item);
        div.appendChild(div2);

        let a2 = document.createElement('a');
        a2.href = arr['reference'];
        a2.setAttribute('class', 'link_fav');
        a2.text = arr['film_name'];
        div.appendChild(a2);

        let div3 = document.createElement('div');
        div3.setAttribute('class', 'text_block');
        div.appendChild(div3);

        let p1 = document.createElement('p');
        p1.textContent = arr['year'];
        div3.appendChild(p1);

        let p2 = document.createElement('p');
        p2.textContent = arr['genre'];
        div3.appendChild(p1);

        let p3 = document.createElement('p');
        p3.textContent = arr['description'];
        div3.appendChild(p3);

        count++;
    }
}

if (count == 0) {
    let div_empty = document.createElement('div');
    let h2 = document.createElement('h2');
    let main = document.querySelector('main');
    main.appendChild(div_empty);
    h2.textContent = "Нет фильмов в Избранных";
    div_empty.appendChild(h2);
}
