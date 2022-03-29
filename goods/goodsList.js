const goodsList = (data, targetElem) => {
    const goods = data;
    const goodsList = document.createElement('article');

    goodsList.classList.add('goods-list');

    // looping over goods obj with all the goods in 'db'
    for (const key in goods) {
        // creating elements
        const goodsItem = document.createElement('section'); // main
        const image = document.createElement('img');
        const header = document.createElement('h2');
        const price = document.createElement('p')
        const button = document.createElement('button');

        // adding classes
        goodsItem.classList.add('goods-item');
        image.classList.add('goods-item__img');
        header.classList.add('goods-item__title');
        price.classList.add('goods-item__price');
        button.classList.add('btn', 'btn--add-to-cart');

        // adding content, links, data
        image.src = `${goods[key]['image']}`;
        header.textContent = `${goods[key]['name']}`;
        price.textContent = `${goods[key]['price']}`;
        button.textContent = 'Add';
        button.dataset.articul = `${key}`;

        // filling in single item card and whole list with it
        goodsItem.append(image, header, price, button);
        goodsList.append(goodsItem);
    }

    document.querySelector(targetElem).append(goodsList);
}
