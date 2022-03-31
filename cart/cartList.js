if (localStorage.getItem('cart')) {
    https://youtu.be/bNK80YG_FiM?t=1290

    const cartList = new Cart;

    // helper variables
    const cartInStorage = JSON.parse(localStorage.getItem('cart'));

    // setting prop values
    cartList.dataFromBack = goods;
    cartList.itemsInStore = cartInStorage;


    cartList.render();
}
