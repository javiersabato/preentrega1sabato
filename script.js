let opcion = 0
let habitacionElegida = 0

//precio de las habitaciones
let precio1 = 90000
let precio2 = 172500
let precio3 = 430000

//habitaciones 
let hab1 = "Luna Nueva"
let hab2 = "Luna Creciente"
let hab3 = "Luna Llena"

//cantidad de personas a hospedar
let cantPers1 = "para 1"
let cantPers2 = "para 2"
let cantPersFam = "familiar"

const mensaje = "BIENVENIDO/A AL HOTEL DE LA LUNA 🌕"
const mensaje2 = "MUCHAS GRACIAS POR ELEGIRNOS, ESPERAMOS QUE TENGA UNA MUY LINDA EXPERIENCIA Y DISFRUTE SU ESTADÍA"

let nombre = prompt("Ingrese su nombre").toUpperCase()
alert(nombre + " " + mensaje)
 
 
do {
    opcion = Number(prompt("Habitaciones disponibles \n 1. Luna Nueva \n 2. Luna Creciente \n 3. Luna Llena \n Ingrese 0 para salir \n Todas nuestras habitaciones cuentan con un estilo muy elegante y refinado, haciendo referencia a su respectiva fase lunar. "))
        if (opcion == 1) {
        habitacionElegida = Number(prompt("Habitación " + hab1 + "\n 1. Para 1 " + "$" + precio1 + "\n 2. Para 2 " + "$" + precio2 + "\n 3. Familiar (hasta 5 personas) " + "$" + precio3 + "\n El valor indicado es solo por 5 noches, para consultar por mas o menos noches, comunicarse a 4598 - LUNA(5862)"))
        if (habitacionElegida === 1) {
            alert("Usted eligió la habitación " + hab1 + " " + cantPers1 + "\n Monto a pagar: $" + precio1 + "\n" + mensaje2)
        } else if (habitacionElegida === 2) {
            alert("Usted eligió la habitación " + hab1 + " " + cantPers2 + "\n Monto a pagar: $" + precio2 + "\n" + mensaje2)    
        } else if (habitacionElegida === 3) {
            alert("Usted eligió la habitación " + hab1 + " " + cantPersFam + "\n Monto a pagar: $" + precio3 + "\n" + mensaje2)    
        }else if (opcion != 0){
            alert ("Error, ingrese una opción válida")
        }
        

    } else if (opcion == 2) {
        habitacionElegida = Number(prompt("Habitación " + hab2 + "\n 1. Para 1 " + "$" + precio1 + "\n 2. Para 2 " + "$" + precio2 + "\n 3. Familiar (hasta 5 personas) " + "$" + precio3 + "\n El valor indicado es solo por 5 noches, para consultar por mas o menos noches, comunicarse a 4598 - LUNA(5862)"))
        if (habitacionElegida === 1) {
            alert("Usted eligió la habitación " + hab2 + " " + cantPers1 + "\n Monto a pagar: $" + precio1 + "\n" + mensaje2)
        } else if (habitacionElegida === 2) {
            alert("Usted eligió la habitación " + hab2 + " " + cantPers2 + "\n Monto a pagar: $" + precio2 + "\n" + mensaje2)
        } else if (habitacionElegida === 3) {
            alert("Usted eligió la habitación " + hab2 + " " + cantPersFam + "\n Monto a pagar: $" + precio3 + "\n" + mensaje2)
        }else if (opcion != 0){
            alert ("Error, ingrese una opción válida")
        }
             

    } else if (opcion == 3) {
        habitacionElegida = Number(prompt("Habitación " + hab3 + "\n 1. Para 1 " + "$" + precio1 + "\n 2. Para 2 " + "$" + precio2 + "\n 3. Familiar (hasta 5 personas) " + "$" + precio3 + "\n El valor indicado es solo por 5 noches, para consultar por mas o menos noches, comunicarse a 4598 - LUNA(5862)"))
        if (habitacionElegida === 1) {
            alert("Usted eligió la habitación " + hab3 + " " + cantPers1 + "\n Monto a pagar: $" + precio1 + "\n" + mensaje2)
        } else if (habitacionElegida === 2) {
            alert("Usted eligió la habitación " + hab3 + " " + cantPers2 + "\n Monto a pagar: $" + precio2 + "\n" + mensaje2)
        } else if (habitacionElegida === 3) {
            alert("Usted eligió la habitación " + hab3 + " " + cantPersFam + "\n Monto a pagar: $" + precio3 + "\n" + mensaje2)
        }else if (opcion != 0){
            alert ("Error, ingrese una opción válida")
        }    

    } else if (opcion != 0){
        alert ("Error, ingrese una opción válida")
    }
    
        
} while (opcion != 0) 



