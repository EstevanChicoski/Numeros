

//alert ("olá mundo");



//Atividade criança, adulto ou idoso

function validarIdade(idade){

    if(idade <= 21)
      if(idade <= 10){
          return "criança"
      }else{
          return "jovem"
      }

  else
      if(idade <= 50){
          return "adulto"
      }

      else{
          return "idoso"
      }
}

var capturando = ""

function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    var ss = " "


    capturando = document.getElementById('name').value

    console.log(capturando)
    if(capturando == ""){
        window.alert('ERRO!! Tente inserir os dados novamente')
        return false
    }

    if (fano.value.length == 0 || Number(fano.value) > ano || Number(fano.value) < "1900"){
        window.alert('ERRO!! Tente inserir os dados novamente')
        return false
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)

        if (fsex[0].checked){
         var    genero = "Homem"
         var ss = " "}
        else{
         var   genero = "Mulher"
         var ss = " "}


         //senhor ou senhora;
            var idd = validarIdade(idade, genero)

            res.innerHTML = ("Olá " + capturando + "! Detectamos " + genero + " com " + idade + " anos, você é " + idd)
    }

}

//numeros

function executar(){

    var numbertext ="";
    var number = document.getElementById('number').value

    number = parseInt(number)


           var  centenas  = parseInt(number / 100);
           var  dezenas =  parseInt((number%100) / 10);
           var   unidades =  parseInt(((number%100)%10));

          
               

                switch(centenas){case 1:
                    case 1:
                        numbertext += cemOuCento(unidades, dezenas);
                        numbertext += verificarE(dezenas,unidades)
                        break;
                    case 2:
                        numbertext += "duzentos ";
                        numbertext += verificarE(dezenas,unidades)
                        break;
                    case 3:
                        numbertext += "trezentos " ;
                        numbertext += verificarE(dezenas,unidades)
                        break;
                    case 4:
                        numbertext += "quatrossentos ";
                        numbertext += verificarE(dezenas,unidades)
                        break;
                    case 5:
                        numbertext += "quinhentos ";
                        numbertext += verificarE(dezenas,unidades)
                        break;
                    case 6:
                        numbertext += "seissentos ";
                        numbertext += verificarE(dezenas,unidades)
                        break;
                    case 7:
                        numbertext += "setessentos ";
                        numbertext += verificarE(dezenas,unidades)
                        break;
                    case 8:
                        numbertext += "oitossentos ";
                        numbertext += verificarE(dezenas,unidades)
                        break;
                    case 9:
                        numbertext += "novessentos ";
                        numbertext += verificarE(dezenas,unidades)
                        break;
                    case 10:
                        numbertext += "mil ";
                        numbertext += verificarE(dezenas,unidades)
                        break;
                    }


                    if(dezenas === 1 && unidades <= 9 && unidades > 0){
                
                        switch(unidades) {
                            case 1:
                                numbertext += "onze ";
                                break;
                            case 2:
                                numbertext += "doze ";
                                break;
                            case 3:
                                numbertext += "treze ";
                                break;
                            case 4:
                                numbertext += "quatorze ";
                                break;
                            case 5:
                                numbertext +=  "quinze ";
                                break;
                            case 6:
                                numbertext += "dezesseis ";
                                break;
                            case 7:
                                numbertext += "dezessete ";
                                break;
                            case 8:
                                numbertext += "dezoito ";
                                break;
                            case 9:
                                numbertext += "dezenove ";
                                break;
                            }
                    }else{

                switch(dezenas) {
                    case 1:
                        numbertext += "dez ";
                        break;
                    case 2:
                        numbertext += "vinte ";
                        numbertext += verificarE(dezenas,unidades)
                        break;
                    case 3:
                        numbertext += "trinta ";
                        numbertext += verificarE(dezenas,unidades)
                        break;
                    case 4:
                        numbertext += "quarenta ";
                        numbertext += verificarE(dezenas,unidades)
                        break;
                    case 5:
                        numbertext += "cincoenta ";
                        numbertext += verificarE(dezenas,unidades)
                        break;
                    case 6:
                        numbertext += "sessenta ";
                        numbertext += verificarE(dezenas,unidades)
                        break;
                    case 7:
                        numbertext += "setenta " ;
                        numbertext += verificarE(dezenas,unidades)
                        break;
                    case 8:
                        numbertext += "oitenta ";
                        numbertext += verificarE(dezenas,unidades)
                        break;
                    case 9:
                        numbertext += "noventa ";
                        numbertext += verificarE(dezenas,unidades)
                        break;

                    }
                
                switch(unidades) {

                    case 1:
                        numbertext += "um ";
                        break;
                    case 2:
                        numbertext += "dois ";
                        break;
                    case 3:
                        numbertext += "três ";
                        break;
                    case 4:
                        numbertext += "quatro ";
                        break;
                    case 5:
                        numbertext += "cinco ";
                        break;
                    case 6:
                        numbertext += "seis ";
                        break;
                    case 7:
                        numbertext += "sete ";
                        break;
                    case 8:
                        numbertext += "oito ";
                        break;
                    case 9:
                        numbertext += "nove ";
                        break;

                    }

                }

           console.log(" " + centenas+" "+ dezenas + " " + unidades)

           document.getElementById('number').value = numbertext

}

// onfocus

/*

setTimeout(fumction(){
    //função a ser executada
 }, //tempo)

*/

class Carro{
    constructor (valor1, valor2, valor3) {
        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;
    }
}

var uno =  new Carro("Fiat", "Uno", 2010);

console.log(uno);

//cem ou cento

function cemOuCento(unidades, dezenas){
    if(unidades == 0 && dezenas == 0)
        return "cem "
    else
        return "cento ";
}

//verificação do E

function verificarE(dezenas, unidades){
   
    if(dezenas > 0){
        if(unidades != 0 )
             return  "e ";
         else
            return " ";
    } else {
        if(unidades > 0)
            return  "e ";
        else
            return " ";
    }
} 

/*

if(centenas > 0 && dezenas == 0 && unidades && 0, centenas == 0 && dezenas > 0 && unidades == 0, centenas == 0 && dezenas == 0 && unidades > 0)
        numbertext = (numbertext)
     else 
        numbertext = (numbertext + "e ")

        //////////////////////////////////////////////////

if(centenas == 0 && dezenas == 0 && unidades >= 0){
        numbertext = (numbertext)
    } else if(centenas >= 0 && dezenas > 0 && unidades > 0){
        numbertext = (numbertext + "e ")
    }
    
*/