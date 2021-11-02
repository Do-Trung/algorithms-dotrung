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
const Category = [
  { id: 1, name: "Comuter" },
  { id: 2, name: "Memory" },
  { id: 3, name: "Card" },
  { id: 4, name: "Acsesory" },
];
//bài 13:Hãy viết function sortByCategoryName(listProduct, listCategory)
//trả về danh sách product sắp xếp theo category name theo thứ tự abc
//Làm theo thuật toán của bài 12.
function sortByCategoryName(listProduct, listCategory) {
  const mergeArray = [];
  const listProductLength = listProduct.length;
  const listCategoryLength = listCategory.length;
  listCategory.sort((a,b) => a.name.localeCompare(b.name))
  for(let i = 0; i < listCategoryLength; i++){
    for(let j =0; j< listProductLength; j++){
      if(listCategory[i].id == listProduct[j].categoryId){
        mergeArray.push(listProduct[j])
      }
    }
  }
  return mergeArray;
}
console.log(sortByCategoryName(Product,Category))
