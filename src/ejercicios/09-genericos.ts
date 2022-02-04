/*
    ===== Código de TypeScript =====
*/

function queTipoSoy<T>( argumento: T ){
    return argumento;
}

let soyUnString = queTipoSoy('Hola que Tal');
let soyUnNUmero = queTipoSoy(123);
let soyUnArreglo = queTipoSoy( [1,2,3,4,5,6] );

let soyExplicito = queTipoSoy<number>(100);