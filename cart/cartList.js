const cartList = new Cart;

// helper variables
const cartInStorage = JSON.parse(localStorage.getItem('cart'));

// setting prop values
cartList.dataFromBack = goods;
cartList.itemsInStore = cartInStorage;


cartList.render();
