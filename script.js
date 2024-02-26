function generetNumber() {

    const min= Math.ceil(document.querySelector(".input-min").value)
    const max= Math.floor(document.querySelector(".input-max").value)


 
    const result= Math.floor(Math.random() * (max - min + 1) + min);
  
    alert(result)
}



/*
 =
 +=
 -=
 /=
 *=
 %=


 */

 let result =20


//  result += 70 // result = result + 70

 result -= 70 // result = result -70

 console.log(result)

