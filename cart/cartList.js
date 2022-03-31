if (localStorage.getItem('cart')) {
    // https://youtu.be/bNK80YG_FiM?t=1290

    const cartInStorage = JSON.parse(localStorage.getItem('cart'));
    const cartList = new Cart;

    // setting prop values
    cartList.dataFromBack = goods;
    cartList.itemsInStore = cartInStorage;

    document.querySelector('#cart').append(cartList.render());

    document.querySelector('#cart').addEventListener('click', (event) => {
        const target = event.target;

        if (target.classList.contains('btn--remove')) {
            cartList.deleteItem(target.dataset['articul']);

            document.querySelector('#cart').innerHTML = '';
            document.querySelector('#cart').append(cartList.render());

            localStorage.setItem('cart', JSON.stringify(cartList.itemsInStore));

            return true;
        } else if (target.classList.contains('btn--decrease')) {
            console.log('btn--decrease');

            cartList.decreaseQuantity(target.dataset['articul']);

            document.querySelector('#cart').innerHTML = '';
            document.querySelector('#cart').append(cartList.render());

            localStorage.setItem('cart', JSON.stringify(cartList.itemsInStore));

            return true;

        } else if (target.classList.contains('btn--increase')) {
            console.log('btn--increase');

            cartList.increaseQuantity(target.dataset['articul']);

            document.querySelector('#cart').innerHTML = '';
            document.querySelector('#cart').append(cartList.render());

            localStorage.setItem('cart', JSON.stringify(cartList.itemsInStore));

            return true;
        }
    });
}
