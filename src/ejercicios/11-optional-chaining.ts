/*
    ===== Código de TypeScript =====
*/

interface Pasajero {
    nombre: string;
    hijos?: string[];
}

const pasajero1: Pasajero = {
    nombre: 'Fernando'
}

const pasajero2: Pasajero = {
    nombre: 'Melissa',
    hijos: ['natalia','Gabriel']
}

function imprimeHijos( pasajeros: Pasajero ): void {
    const cuantosHijos = pasajeros.hijos?.length || 0;

    console.log( cuantosHijos );
}

imprimeHijos( pasajero1 );