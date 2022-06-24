//백틱에 대한 이해
const cart = [
    {name:'옷', pirce: 2000},
    {name:'가방', pirce: 1000}
];

let numOfItems = `카트에 ${cart.length}개의 아이템이 있습니다.`
let cartTable = 
`
    <ul>
        <li>품목 : ${cart[0].name}, 가격: ${cart[0].pirce}</li>
        <li>품목 : ${cart[1].name}, 가격: ${cart[1].pirce}</li>
    </ul>`

console.log(numOfItems);
console.log(cartTable);

let personName = 'harin';
let helloString = 'hello' + personName;
let helloTemplateString = `hello ${personName}`;
console.log(helloString === helloTemplateString);
console.log(typeof helloTemplateString);