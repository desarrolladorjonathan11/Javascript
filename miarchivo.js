let numero1, numero2, operacion

do {
    numero1 = parseFloat(prompt("ingrese valor del producto"))
    numero2 = parseFloat(prompt("ingrese unidades vendidas "))
    operacion = prompt("ingrese 'venta en blanco' para confirmar")

} while (isNaN(numero1) || isNaN(numero2))

switch (operacion) {
    case "venta en blanco":
        alert(("Precio de venta final = $") + ((numero1 * numero2) * 1.21))
        break
    default:
        alert("operacion no valida")
        break
}





