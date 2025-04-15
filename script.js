
let productsItem = document.querySelectorAll('.product-item');
const products = Array.from(productsItem).map(item=>{
    const productsName = item.querySelector('.product-name').innerText;
    const price = parseInt(item.querySelector('.price').innerText, 10);
    return {name: productsName, price, element: item}
})
 


const blockProducts = document.querySelector('.block-products');

let ascending = true;

function sortingProducts(filteredProducts = products){
   let sorted = [...filteredProducts].sort((a, b) => ascending ? a.price -b.price : b.price- a.price);
    blockProducts.innerHTML = '';
    sorted.forEach(product=>{
    blockProducts.appendChild(product.element);
 })
}

const sortButton = document.getElementById('sortButton');
sortButton.addEventListener('click', ()=>{
    ascending = !ascending;
    sortButton.textContent = ascending ? 'По возрастанию': 'По убыванию';
    sortingProducts();
})

let searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', ()=>{
applyFilter()

})

function applyFilter(){
    let searchText = searchInput.value.trim().toLowerCase();
    const filtered = products.filter(product => 
        product.name.toLowerCase().includes(searchText)  
    )
    sortingProducts(filtered);
}