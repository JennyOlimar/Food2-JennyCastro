export const GetProducto = () => new Promise( (resolve, reject) => {
    setTimeout(() => resolve([
        {
            id: 1,
            title: 'Balls',
            description: 'Mr. Babbache ball',
            price: 30,
            pictureUrl: 'https://www.firetoys.eu/media/catalog/product/cache/5d6d96cb5e22bab60cddeb679efa32bd/m/r/mrb-beach-1kg-menu_1.jpg',
            stock: 7
        },
        {
            id: 2,
            title: 'Clubs',
            description: 'Mr. Babbache club',
            price: 20,
            pictureUrl: 'https://www.juegosmalabares.com/images/productos/thumbnails/maza-mister-babache-artist-club-2-621_thumb_320x320.jpg',
            stock: 9
        },
    ]), 1000);
});

export const GetArticulo = () => new Promise( (resolve, reject) => {
    setTimeout(() => resolve([
        {
            id: 1,
            title: 'Balls',
            description: 'Mr. Babbache ball',
            price: 30,
            pictureUrl: 'https://www.firetoys.eu/media/catalog/product/cache/5d6d96cb5e22bab60cddeb679efa32bd/m/r/mrb-beach-1kg-menu_1.jpg',
            stock: 7
        },
    ]), 1000);
});
