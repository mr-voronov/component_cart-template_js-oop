class Cart {
    constructor(
        items,
        cartClass = 'cart-list',
        btnIncreaseClass = ['btn', 'btn--increase'],
        btnDecreaseClass = ['btn', 'btn--decrease'],
        btnRemoveClass = ['btn', 'btn--remove'],
        currency = 'UAH'
    ) {
        this.items = items,
        this.cartClass = cartClass,
        this.btnIncreaseClass = btnIncreaseClass,
        this.btnDecreaseClass = btnDecreaseClass,
        this.btnRemoveClass = btnRemoveClass,
        this.currency = currency;
    }

    // https://youtu.be/bNK80YG_FiM?t=329
}