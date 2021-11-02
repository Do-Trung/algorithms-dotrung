// Bài 21:Hãy viết function calSalary(salary, n) , trả về lương của năm thứ n. 
// Biết rằng cứ mỗi năm lương sẽ tăng bằng 10% năm liền trước.
// Viết bằng 2 cách, đệ qui và không dùng đệ qui

//cách 1:
function calSalaryC1(salary, n){
    if(n == 1 && n >= 0){
        return salary
    }
    salary = salary + salary* 0.1
    return calSalaryC1(salary, n-1)
}

//cách 2:
function calSalaryC2(salary, n){
    for(let i = 1; i < n; i++){
        salary = salary *0.1 +salary
    }
    return salary;
}
console.log(calSalaryC2(3000,4))