let a=+prompt(" nhập số đo cân nặng của cậu vào : ");
let b=+prompt(" nhập số đo chiều cao của cậu vào : ");
let BMI= a/( b*b );
if( BMI < 18.5 ){
    console.log(" cân nặng thấp ( gầy ) ");
} else if ( 18.5<= BMI && BMI<= 24.9 ){
    console.log(" bình thường ");
}else if (BMI >=  25){
    console.log(" thừa cân  ");
}else if (25<= BMI && BMI <= 29.9){
    console.log(" tiền béo phì ");
}else if ( 30<= BMI && BMI <= 34.9){
    console.log(" béo phì độ I ");
}else if(35<=BMI && BMI <= 39.9){
    console.log(" béo phì độ II");
}else if ( BMI >= 40 ){
    console.log(" béo phì độ III");
}