let a =+prompt("nhap so thang bann chon : ");
switch (a) {
    case 1,3,5,7,9,11 : 
    console.log(" tháng này có 30 ngày  ");        
        break;
    case 2 :
    console.log(" tháng này có 28 ngày ");
        break;
    case  4,6,8,10,12 : 
    console.log(" tháng này có 31 ngày  ");
         break;
    default:
        console.log(" xin mời bé nhập lại ");
        break;
}