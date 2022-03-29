const addToStorage = (targetElem) => {
    const dataForStorage = {};

    document.querySelector(targetElem).addEventListener('click', (event) => {
        if (event.target.classList.contains('btn--add-to-cart')) {
            const articul = event.target.dataset['articul'];

            if (dataForStorage[articul] === undefined) {
                dataForStorage[articul] = 0;
            }

            dataForStorage[articul]++;
        }

        localStorage.setItem('cart', JSON.stringify(dataForStorage));
    });    
}
