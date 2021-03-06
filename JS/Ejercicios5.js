// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
console.log("%cEjercicio 15", "font-weight:bold; font-size:12px");
const conversorBinario = (numero = undefined, base = undefined) => {
  if (numero === undefined) return console.warn("Inserte un número válido.");
  if (base === undefined)
    return console.warn(
      "Inserte un número base válido, para decimal (10) o para binario (2)."
    );
  if (Math.sign(numero) === -1 || Math.sign(base) === -1)
    return console.error(
      "Ingresastes un número negativo, ingresa uno positivo."
    );
  if (typeof numero !== "number" || typeof base !== "number")
    return console.error(
      "Ingresastes un texto, objeto o array, ingresa un número válido."
    );
  let baseAString = base.toString();
  if (baseAString.length > 2)
    return console.error(
      "Has ingresado un número inválido, ingresa una base correcta (2 o 10)."
    );

  if (/^[2]{1}$/.test(baseAString) || /^[0-1]{2}$/.test(baseAString)) {
    let binario = new RegExp("^([0-1])*$", "ig");

    if (base === 10) {
      let decimalEnBinario = numero.toString(2);
      return console.log(
        `El número binario ${numero} en decimal es ${decimalEnBinario} base 2.`
      );
    }

    if (base === 2 && binario.test(numero)) {
      let binarioEnDecimal = parseInt(numero, 2);
      return console.log(
        `El número binario ${numero} en decimal es ${binarioEnDecimal} base 10.`
      );
    } else
      return console.error(
        "Insertastes una base binaria para un número decimal. Inserta una base 10 para decimal y 2 para binaria."
      );
  } else
    console.error(
      "Has ingresado un número inválido, ingresa una base correcta (2 o 10)."
    );
};
conversorBinario(4, 10);

//16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
console.log("%cEjercicio 16", "font-weight:bold; font-size:12px");
const descuento = (monto, porcentaje) => {
  const formatterPesosArg = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "ARS",
  });
  if (monto === undefined || porcentaje === undefined)
    return console.warn("Inserte un número válido.");
  if (monto === 0)
    return console.warn(
      "El monto no puede ser igual a 0. Inserte un monto mayor."
    );
  if (Math.sign(monto) === -1 || Math.sign(porcentaje) === -1)
    return console.error(
      "Ingresastes un número negativo, ingresa uno positivo."
    );
  if (typeof monto !== "number" || typeof porcentaje !== "number")
    return console.error(
      "Ingresastes un texto, objeto o array, ingresa un número válido."
    );

  let descuentoTotal = monto * (porcentaje / 100);
  let montoDescuento = monto - descuentoTotal;
  let montoDescuentoConDecimales = montoDescuento.toFixed(2);

  return console.info(`El monto de su compra es de ${formatterPesosArg.format(
    monto
  )} su descuento es del ${porcentaje}%.
Su saldo total a pagar es de ${formatterPesosArg.format(
    montoDescuentoConDecimales
  )}. Gracias por su compra.`);
};

descuento(100, 20);

//17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020)
console.log("%cEjercicio 17", "font-weight:bold; font-size:12px");
const edadNacimiento = (fecha = undefined) => {
  if (fecha === undefined)
    return console.warn("No has colocado ninguna fecha.");
  if (!(fecha instanceof Date))
    return console.error(
      "Los datos que has puesto no corresponden con una fecha."
    );

  let hoy = new Date();
  let tiempoTranscurrido = hoy.getTime() - fecha.getTime();
  let aniosEnMS = 1000 * 60 * 60 * 24 * 365;
  let aniosActuales = Math.floor(tiempoTranscurrido / aniosEnMS);

  return console.log(
    `Desde ${fecha.getUTCFullYear()} han pasado hasta ahora ${aniosActuales} años.`
  );
};

edadNacimiento(new Date(1984, 4, 23));

console.log(
  "%c5ta Ronda de ejercicios hecha, gracias Jon, hecho por Codereggs",
  "color:lightblue; font-size:20px"
);
