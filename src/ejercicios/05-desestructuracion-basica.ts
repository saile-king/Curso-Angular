/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: detalle;
}

interface detalle {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015
    }
}

const { volumen, segundo, cancion, detalles } = reproductor;
const { autor } = detalles;

console.log('El volumen actual es: ', volumen);
console.log('EL segundo actual es: ', segundo);
console.log('La cancion actual es: ', cancion);
console.log('El autor es: ', autor);


const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const [p1,p2,p3] = dbz

console.log('Personaje 1:', p1);
console.log('Personaje 2:', p2);
console.log('Personaje 3:', p3);