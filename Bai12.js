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
//bài 12: Hãy viết function sortByName(listProduct) 
//trả về danh sách product sắp xếp độ dài của tên từ cao đến thấp. 
//Làm theo thuật toán insertion.
function sortByName(listProduct){
    const n = listProduct.length;
    for( let i = 0; i < n; i++){
        let current = listProduct[i];
        let j = i -1;
        while((j > -1) && (current.name.length > listProduct[j].name.length)){
            listProduct[j+1] = listProduct[j];
            j--;
        }
        listProduct[j+1] = current;
    }
    return listProduct;
}