
let milisegundo = 0;
let segundo = 0;
let minuto = 0;
let hora = 0;


function fStart(){

    document.getElementById("botonPlay").disabled = true;

        accede1 = setInterval(function(){

            for (i=0;i<1;i++){
                 milisegundo = milisegundo + 1
                document.getElementById("contador").innerHTML = number(hora) + ":" + number(minuto) + ":" + number(segundo) + ":" +  number(milisegundo) ;
            }
            if(milisegundo==100){
                milisegundo=0;
            }    
        } ,10)

        accede2 = setInterval(function(){ 

            for (i=0;i<1;i++){
                segundo = segundo + 1
                document.getElementById("contador").innerHTML = number(hora) + ":" + number(minuto) + ":" + number(segundo) + ":" +  number(milisegundo);
            }
            if(segundo==60){
                segundo=0;
            }
         } ,1000)       

         accede3 = setInterval(function(){   
            for (i=0;i<1;i++){
                minuto = minuto + 1
                document.getElementById("contador").innerHTML = number(hora) + ":" + number(minuto) + ":" + number(segundo) + ":" +  number(milisegundo);
            }
            if(minuto==60){
                minuto=0;
            }
        } ,60000)

        accede4 = setInterval(function(){   
            for (i=0;i<1;i++){
                hora = hora + 1
                document.getElementById("contador").innerHTML = number(hora) + ":" + number(minuto) + ":" + number(segundo) + ":" +  number(milisegundo);
            }
            if(hora==60){
                hora=0;
            }
        } ,3600000)

    } 



function fPause(){
    
    clearInterval(accede1)
    clearInterval(accede2)
    clearInterval(accede3)
    clearInterval(accede4)

    document.getElementById("botonPlay").disabled = false;
}

function fStop(){
    
    clearInterval(accede1)
    clearInterval(accede2)
    clearInterval(accede3)
    clearInterval(accede4)

    milisegundo = 0;
    segundo = 0;
    minuto = 0;
    hora = 0;

    document.getElementById("contador").innerHTML = number(hora) + ":" + number(minuto) + ":" + number(segundo) + ":" +  number(milisegundo);
    document.getElementById("botonPlay").disabled = false;

}

function number(num){
    if(num<10){
    
        return "0"+ num;
    }else{
        return num;
    }
    
}


document.getElementById("botonPlay").addEventListener( 'click', fStart);

document.getElementById("botonPause").addEventListener( 'click', fPause);

document.getElementById("botonStop").addEventListener( 'click', fStop);




let numerito= 0 ;

for (i=0;i<80;i++){

    numerito = numerito + 1;

    console.log(numerito)

    if(numerito==59){
        numerito = 0;
    }
}






