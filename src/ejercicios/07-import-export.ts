/*
    ===== Código de TypeScript =====
*/

import { calcularISV, Producto } from "./06-desestructuracion-funcion";

const carritoCompras: Producto[] = [
    {
        desc: 'Samsung a01',
        precio: 500
    },
    {
        desc: 'Samsung a22',
        precio: 700
    },
    {
        desc: 'Xiaomi note 10',
        precio: 900
    }
];

const [ total, isv ] = calcularISV( carritoCompras );

console.log('El total es: ', total);
console.log('El ISV es: ', isv);