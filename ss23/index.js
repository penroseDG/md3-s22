console.log(" Hello babe ");
 // 1. quy tắc đặt tên biến 
 // 2. phân biệt được khai báo bởi 3 từ khóa 
   //var/let/const

console.log(" person1 có giá trị = ", person1);
console.log(" person2 có giá trị = ", person2);
console.log(" person3 có giá trị = ", person3);



    var person1="penroseDG";
    let person2=" ducvip";
    const person3=" ducdang1612";                    

    // 1. constanst - Hằng số                         
    // 2. sử dụng biến trước khi khai báo 
    // 3. đối với biến được khai báo bởi 2 từ khóa " let " và " const " thì sẽ 
      //  -  không thể truy cập ( sử dụng) vào 2 biến trước khi khai báo 
      //  -  đối với biến được khai báo bởi từ khóa var 
      //  -  có thể truy cập ( sử dụng ) biến đó  
      //  -  khi sử dụng biến được khai báo bởi từ khóa var
      //     trước khi khai báo sẽ mặc định có 1 giá trị được lưu trữ trong biến đó là underfined

      //  Cơ chế hoisting trong Javascript 
      // 4. phạm vi hoạt động ( Scope)
      
      let Baoconghienkhong = true;

      const QuynhCoBanTraiChua = true ; 

      let TuancoGiongVuonkHong = true ;

      let Ducvipcochungthuykhong = true;

      let duccophaitrapboykhong = false;


      // > , >=, <, <=, == , !=       


      console.log(" 1 > 1 ");
      console.log(" 1 >=1 ");
      console.log(" 1 < 1 ");
      console.log(" 1 <=1 ");

       1=="1";// toán tử so sán tương đối 
       1==="1";// toán tử so sánh tuyệt đối

       1 != "1"// toán tử so sánh khác tương đối 
       1 !== "1"// toán tử so sánh khác tuyệt đối 


       console.log(" kết quả của phép so sánh == là: " , 1 == "1");
       console.log(" kết quả so sánh của phép tính === là : ", 1==="1");

// && ( and ) và || ( or )
// 1 > 1 || 2 == 2 ( true )
// 1 > 1 && 2 == 2 ( false)

if(condition){
    // logic 1 
} else if (condition){
    // logic 2 
} else if (condition){
    // logic 3 
} else {              
    // logic else 
}