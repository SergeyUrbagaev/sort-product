let prices = [
    {id: 1, name: "Товар1", price: 40,},
    {id: 2, name: "Товар2", price: 52,},
    {id: 3, name: "Товар3", price: 56,},
    {id: 4, name: "Товар4", price: 36,},
    {id: 5, name: "Товар5", price: 23,},
    {id: 6, name: "Товар6", price: 78,},
    {id: 6, name: "Товар7", price: 100,},
]

let productsItem = document.querySelectorAll('.product-item');
const products = Array.from(productsItem).map(item=>{
    const productsName = item.querySelector('.product-name').innerText;
    const price = parseInt(item.querySelector('.price').innerText, 10);
    return {name: productsName, price, element: item}

})

 

const blockProducts = document.querySelector('.block-products');
 
let ascending = true;

function sortingProducts(){
    products.sort((a, b)=> ascending ? a.price -b.price : b.price- a.price);
    blockProducts.innerHTML = '';
    products.forEach(product=>{
    blockProducts.appendChild(product.element);
 })
}

const sortButton = document.getElementById('sortButton');
sortButton.addEventListener('click', ()=>{
    ascending = !ascending;
    sortButton.textContent = ascending ? 'По возрастанию': 'По убыванию';
    sortingProducts();
})