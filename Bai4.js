const Product = [
    { name: "CPU", price: 750, quality: 10, categoryId: 1 },
    { name: "RAM", price: 50, quality: 2, categoryId: 2 },
    { name: "HDD", price: 70, quality: 1, categoryId: 2 },
    { name: "Main", price: 400, quality: 3, categoryId: 1 },
    { name: "Keyboard", price: 30, quality: 8, categoryId: 4 },
    { name: "Mouse", price: 25, quality: 50, categoryId: 4 },
    { name: "VGA", price: 60, quality: 35, categoryId: 3 },
    { name: "Monitor", price: 120, quality: 28, categoryId: 2 },
    { name: "Case", price: 120, quality: 28, categoryId: 5 },
  ];
//bài 4: Hãy viết function findProduct(listProduct, nameProduct) 
//trả về product có tên = nameProduct truyền vào.
function findProduct(listProduct, nameProducts) {
    const arrayLength = listProduct.length;
    for(let i = 0; i < arrayLength; i++){
        if(listProduct[i].name == nameProducts){
            return listProduct[i];
        }
    }
}
console.log(findProduct(Product,"RAM"))



