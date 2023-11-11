class Product {
  title = 'DEFAULT';
  imageUrl;
  description;
  price;

  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

const productList = {
  products: [
    new Product(
      'A Pillow',
      'https://tse1.mm.bing.net/th?id=OIP.g9907fpotFfK7Qs2D5Rv-AHaGL&pid=Api&P=0&w=300&h=300',
      'A soft pillow!',
      19.99
    ),

    new Product(
      'A Carpet',
      'https://tse4.mm.bing.net/th?id=OIP.ZobBsKpwKY7dZVblJqUBjQHaFj&pid=Api&P=0&w=300&h=300',
      'A carpet which you might like',
      89.99
    ),
  ],
  render() {
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for (const prod of this.products) {
      const prodEl = document.createElement('li');
      prodEl.className = 'product-item';
      prodEl.innerHTML = `
        <div>
           <img src="${prod.imageUrl}" alt="${prod.title}">
           <div class="product-item__content">
                <h2>${prod.title}</h2>
                <h3>\$${prod.price}</h3>
                <p>${prod.description}</p>
                <button>Add to cart</button>
           </div>
        </div>
      `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  },
};

productList.render();
