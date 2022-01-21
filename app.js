function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

async function fetchProducts() {
    const response = await fetch(
      "https://rest-atlas-test.herokuapp.com/products_api",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        const ul = document.getElementById('products');
        let products = data;
        //console.log(products);
        
        for(let product of products){
            let li = createNode('li');
            let span = createNode('span');           
            span.innerHTML = `${product.name} ${product.price} ${product.category}`;            
            append(li, span);
            append(ul, li);
        }
        
      })
      .catch((error) => console.log(error));
  }

  fetchProducts();