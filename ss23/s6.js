let a=+prompt(" nhap diem toan vao : ");
let b=+prompt(" nhap diem van vao : ");
let c=+prompt(" nhap diem anh vao : ");

let stb= ( a+b+c)/3;

if( 8.0 <= stb && stb <= 10.0 ){
    console.log("  gioi " ,stb);
}else if( 6.5 <= stb && stb  <= 7.9){
    console.log(" kha ", stb);
} else if(5.0 <= stb && stb <= 6.4){
    console.log(" trung binh ", stb);
}else if( stb < 5.0){
    console.log(" yeu ",stb);
}else {
    console.log("ko hop le ");
}

