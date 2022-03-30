class Cart {
    constructor(
        dataFromBack,
        itemsInStore,
        cartClass = 'cart-list',
        btnIncreaseClass = ['btn', 'btn--increase'],
        btnDecreaseClass = ['btn', 'btn--decrease'],
        btnRemoveClass = ['btn', 'btn--remove'],
        currency = 'UAH'
    ) {
        this.dataFromBack = dataFromBack,
        this.itemsInStore = itemsInStore,
        this.cartClass = cartClass,
        this.btnIncreaseClass = btnIncreaseClass,
        this.btnDecreaseClass = btnDecreaseClass,
        this.btnRemoveClass = btnRemoveClass,
        this.currency = currency;
    }

    render() {
        console.log('this: ', this);

        
        // creating table and adding classes to it
        const table = document.createElement('table');

        table.classList.add(this.cartClass);

        // looping over all the items in local storage
        for (const article in this.itemsInStore) {
            const tr = document.createElement('tr');  

            // forming table data tags with elements in
            const btnDelete = () => {
                const td = document.createElement('td');
                const btn = document.createElement('button');

                btn.classList.add(...this.btnRemoveClass);
                btn.textContent = 'x';
                btn.setAttribute('data-articul', article);

                td.append(btn);

                return td;
            }

            const img = () => {
                const td = document.createElement('td');
                const img = document.createElement('img');

                img.src = this.dataFromBack[article]['image'];

                td.append(img);

                return td;
            }

            const name = () => {
                const td = document.createElement('td');
                const p = document.createElement('p');

                p.textContent = this.dataFromBack[article]['name'];

                td.append(p);

                return td;
            }

            const btnDecrease = () => {
                const td = document.createElement('td');
                const btn = document.createElement('button');

                btn.classList.add(...this.btnDecreaseClass);
                btn.textContent = '-';
                btn.setAttribute('data-articul', article);

                td.append(btn);

                return td;
            }

            const quantity = () => {
                const td = document.createElement('td');
                const p = document.createElement('p');

                p.textContent = this.itemsInStore[article];

                td.append(p);

                return td;
            }

            const btnIncrease = () => {
                const td = document.createElement('td');
                const btn = document.createElement('button');

                btn.classList.add(...this.btnIncreaseClass);
                btn.textContent = '+';
                btn.setAttribute('data-articul', article);

                td.append(btn);

                return td;
            }

            const sum = () => {
                const td = document.createElement('td');
                const p = document.createElement('p');

                p.textContent = this.dataFromBack[article]['price'] * this.itemsInStore[article];

                td.append(p);

                return td;
            }


            // https://youtu.be/bNK80YG_FiM?t=588


            // forming table row
            tr.append( btnDelete() );
            tr.append( img() );
            tr.append( name() );
            tr.append( btnDecrease() );
            tr.append( quantity() );
            tr.append( btnIncrease() );
            tr.append( sum() );

            // forming table
            table.append(tr);
        }


        document.querySelector('#cart').append(table);
    }    
}
