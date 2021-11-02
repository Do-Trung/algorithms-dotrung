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
  //bài 14: Hãy viết function mapProductByCategory(listProduct, listCategory) 
  //trả về danh sách product có chứa tên category tương ứng theo categoryId
  const Category = [
    { id: 1, name: "Comuter" },
    { id: 2, name: "Memory" },
    { id: 3, name: "Card" },
    { id: 4, name: "Acsesory" },
  ];
  function mapProductByCategory(listProduct, listCategory){
      const listProductLength = listProduct.length;
      const listCategoryLength = listCategory.length;
      for(let i = 0; i<listProductLength; i++){
        for(let j = 0; j < listCategoryLength; j++){
          if(listProduct[i].categoryId == listCategory[j].id){
            listProduct[i].categoryName = listCategory[j].name
          }
        }
      }
      return listProduct

    }
  console.log(mapProductByCategory(Product, Category));