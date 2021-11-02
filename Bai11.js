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
//bài 11: Hãy viết function sortByPrice(listProduct) 
//trả về danh sách product sắp xếp theo giá từ thấp đến cao. Làm theo thuật toán buble.
function sortByPrice(listProduct){
    const arrayLength = listProduct.length;
    for( let i = 0; i < arrayLength; i++){
        for( let j = i + 1; j < arrayLength; j++){
            if(listProduct[i].price > listProduct[j].price){
               var assignValue = listProduct[i];
               listProduct[i] = listProduct[j];
               listProduct[j] = assignValue;
            }
        }
    }
    return listProduct;
    }