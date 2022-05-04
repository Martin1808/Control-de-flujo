let dia=prompt("Ingresa el dia de tu nacimiento en el siguiente formato: dd");
let mes=prompt("Ingresa el mesa de tu nacimiento \n1.-Enero  \n2.-Febrero \n3.-Marzo  \n4.-Abril \n5.-Mayo  \n6.-Junio  \n7.-Julio  \n8.-Agosto  \n9.-Spetiembre \n10.-Octubre \n11.-Noviembre \n12.-Diciembre");


  switch (mes){
    case "1":
        if (dia>=01 && dia<=20){
            alert("Eres Capricornio");
        }else if(dia>=21 && dia<=31){
            alert("Tu signo zodiacal es Acuario")
        }
        break;
    case "2":
        if (dia>=01 && dia<=18){
          alert("Eres Acuario");
        }else if(dia>=19 && dia<=28){
          alert("Tu signo zodiacal es Piscis")
        }
        break;
    case "3":
            if (dia=>01 && dia<=20){
              alert("Eres Piscis");
            }else if(dia>=21 && dia<=31){
              alert("Tu signo zodiacal es Aries")
              
            }
            break;       
    case "4":
                if (dia=>01 && dia<=20){
                  alert("Eres Aries");
                }else if(dia>=21 && dia<=30){
                  alert("Tu signo zodiacal es Tauro")
                }
                break;
     case "5":
                    if (dia>=01 && dia<=21){
                      alert("Eres Tauro");
                    }else if(dia>=22 && dia<=31){
                      alert("Tu signo zodiacal es Géminis")
                    }
                    break;
    case "6":
                        if (dia>=01 && dia<=21){
                          alert("Eres Géminis");
                        }else if(dia>=22 && dia<=30){
                          alert("Tu signo zodiacal es Cancer")
                        }
                        break;
    case "7":
                            if (dia>=01 && dia<=22){
                              alert("Eres Cancer");
                            }else if(dia>=23 && dia<=31){
                              alert("Tu signo zodiacal es Leo")
                            }
                            break;
    case "8":
                                 if (dia>=01 && dia<=23){
                                 alert("Eres Leo");
                                 }else if(dia>=24 && dia<=31){
                                  alert("Tu signo zodiacal es Virgo")
                            }
                            break;
    case "9":
                    if (dia>=01 && dia<=23){
                      alert("Eres Virgo");
                    }else if(dia>=24 && dia<=30){
                      alert("Tu signo zodiacal es Libra")
                    }
                    break;
    case "10":
                if (dia>=01 && dia<=23){
                  alert("Eres Libra");
                }else if(dia>=24 && dia<=31){
                  alert("Tu signo zodiacal es Escorpión")
                }
                break;
   case "11":
                    if (dia>=01 && dia<=22){
                      alert("Eres Escorpión");
                    }else if(dia>=23 && dia<=30){
                      alert("Tu signo zodiacal es Sagitario")
                    }
                    break;
   case "12":
                        if (dia>=01 && dia<=21){
                          alert("Eres Sagitario");
                        }else if(dia>=22 && dia<=31){
                          alert("Tu signo zodiacal es Capricornio")
                        }
                        break;
    default:
        console.log("Datos no válidos");


  }
