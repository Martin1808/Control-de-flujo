let arper=prompt("Ingresa si quieres calcular: \n1.-área\n  \n2.-perimetro\n")


switch (arper){
  case"1":

  let figura=prompt("Ingresa de qué figura quieres conocer el área: \na.-Cuadrado\n  \n b.-Rectangulo\n  \nc.-Circulo\n \nd.-Triangulo\n");
  switch(figura){
   case"a":
     
     let lado=parseFloat(prompt("Introduce el valor de un lado del cuadrado:"));
     
     let areaCuadrado= lado*lado;
     console.log("El area de tu cuadrado es:",areaCuadrado);
   break;
    case"b":
     let base=parseFloat(prompt("Introduce el valor de la base:"));
     let alt=parseFloat(prompt("Introduce el valor de la altura:"));
     let areaRectang= base*alt;
     console.log("El area de tu rectangulo es:",areaRectang);
    break;
    case"c":
     let radio=parseFloat(prompt("Introduce el valor del radio:"));
     let areac= 3.1416*(radio)**2;
     console.log("El área del ciruclo es:",areac);
     break;
    case"d":
     let baset=parseFloat(prompt("Introduce el valor de la base:"));
     let altt=parseFloat(prompt("Introduce el valor de la altura:"));
     let areatrin=(baset*altt)/2;
     console.log("El área del triangulo es:",areatrin);
     break;
     default:
         console.log("Valor no esperado")
    
  } 

 case "2":
 {
    let figura=prompt("Ingresa de qué figura quieres conocer el perimetro: \na.-Cuadrado\n  \n b.-Rectangulo\n  \nc.-Circulo\n \nd.-Triangulo\n");
    switch(figura){
     case"a":
       
       let lado=parseFloat(prompt("Introduce el valor de un lado del cuadrado:"));
       
       let perCuadrado= lado+lado+lado+lado;
       console.log("El perimetro de tu cuadrado es:",perCuadrado);
     break;
      case"b":
       let basep=parseFloat(prompt("Introduce el valor de la base:"));
       let altp=parseFloat(prompt("Introduce el valor de la altura:"));
       let areaRectang= basep+altp+basep+altp;
       console.log("El perímetro de tu rectangulo es:",areaRectang);
      break;
      case"c":
       let radio=parseFloat(prompt("Introduce el valor del radio:"));
       let peradio=2*3.1416*radio;
       console.log("El área del ciruclo es:",peradio);
       break;
      case"d":
       let basepe=parseFloat(prompt("Introduce el valor de la base:"));
       let altpe=parseFloat(prompt("Introduce el valor de la altura:"));
       let pertrin=(basepe+altpe+altpe+basepe);
       console.log("El área del triangulo es:",pertrin);
       break;
       default:
           console.log("Valor no esperado")
      
    } 




 }
}
