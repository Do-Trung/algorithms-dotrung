//Bai 22: Hãy viết function calMonth(money, rate) , trả về số tháng tiền cần gửi tiết kệm để tiền gốc + 
 //lãi tăng gấp đôi so với tiền gốc. Money là số tiền gốc, rate là % lãi suất mỗi tháng. ví dụ calMount(1000, 5). 
//viết bằng 2 cách, đệ qui và không dùng đệ qui

//C1
function calMonthC1Dequy(money, rate){
    
}
//C2
function calMonthC2(money, rate){
    const moneyMonth = Math.round(money / ( money * (rate /100)));  
    return moneyMonth;
}