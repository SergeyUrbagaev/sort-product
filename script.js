let prices = [
    {id: 1, name: "Товар1", price: 40,},
    {id: 2, name: "Товар1", price: 52,},
    {id: 3, name: "Товар1", price: 56,},
    {id: 4, name: "Товар1", price: 36,},
    {id: 5, name: "Товар1", price: 23,},
    {id: 6, name: "Товар1", price: 78,},
    {id: 6, name: "Товар1", price: 100,},
]

let arrPrice = document.querySelectorAll('.price');

arrPrice.forEach(function(el, index){
        el.innerHTML = prices[index].price
    
})
