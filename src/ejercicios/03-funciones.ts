/*
    ===== Código de TypeScript =====
*/

function sumar(a: number, b: number): number{
    return a+b;
}

const sumarFelcha = (a: number, b: number):number => {
    return a + b;
}

function multiplicar(numero: number, otronumero?: number, base: number = 2): number{
    return numero * base;
}

interface PersonajeLOR {
    nombre: string;
    pv: number;
    mostrarHp: () => void;
}

function curar(personaje: PersonajeLOR, curarX: number): void {
    personaje.pv += curarX;
}

const nuevopersonaje: PersonajeLOR ={
    nombre: 'Straider',
    pv: 70,
    mostrarHp(){
        console.log( 'Puntos de Vida:', this.pv );
    }
}

curar( nuevopersonaje, 20)

nuevopersonaje.mostrarHp();

const resultado = multiplicar(2,0,5);

console.log(resultado);