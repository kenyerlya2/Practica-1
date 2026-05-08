"use strict";
// PASO 1: Definición de las categorías usando Enumeradores (Enums)
// Decidí utilizar 'String Enums' (asignarle un texto a cada valor) para que,
// al momento de imprimir los datos, el usuario vea el nombre real de la categoría
// y no un índice numérico automático (0, 1, 2...).
var GeneroPelicula;
(function (GeneroPelicula) {
    GeneroPelicula["Accion"] = "Acci\u00F3n";
    GeneroPelicula["Comedia"] = "Comedia";
    GeneroPelicula["Drama"] = "Drama";
    GeneroPelicula["CienciaFiccion"] = "Ciencia Ficci\u00F3n";
    GeneroPelicula["Documental"] = "Documental";
})(GeneroPelicula || (GeneroPelicula = {}));
var PaisPelicula;
(function (PaisPelicula) {
    PaisPelicula["Venezuela"] = "Venezuela";
    PaisPelicula["Espania"] = "Espa\u00F1a";
    PaisPelicula["Mexico"] = "M\u00E9xico";
    PaisPelicula["EstadosUnidos"] = "Estados Unidos";
    PaisPelicula["Colombia"] = "Colombia";
})(PaisPelicula || (PaisPelicula = {}));
// PASO 3: Registro de la información (Carga de datos)
// Creo un arreglo que almacena objetos del tipo 'Pelicula'. Al asignar el género
// y el país, invoco directamente los Enums que definí en el Paso 1.
const listadoPeliculas = [
    {
        titulo: "Papita, Maní, Tostón",
        genero: GeneroPelicula.Comedia,
        pais: PaisPelicula.Venezuela
    },
    {
        titulo: "El laberinto del fauno",
        genero: GeneroPelicula.CienciaFiccion,
        pais: PaisPelicula.Espania
    },
    {
        titulo: "Amores Perros",
        genero: GeneroPelicula.Drama,
        pais: PaisPelicula.Mexico
    }
];
// PASO 4: Lógica de visualización (Mostrar los datos)
// Desarrollo una función que recibe mi arreglo de películas y las imprime en consola.
// Utilizo un bucle 'forEach' porque me permite recorrer la lista secuencialmente,
// extrayendo la información de cada película de forma ordenada.
function mostrarCartelera() {
    console.log("=== CARTELERA DE PELÍCULAS ===");
    listadoPeliculas.forEach((pelicula, indice) => {
        // Uso 'Template Literals' (comillas invertidas) para incrustar las variables
        // directamente dentro del texto de forma más limpia que concatenando con el signo '+'.
        console.log(`Película #${indice + 1}: ${pelicula.titulo}`);
        console.log(`  > Género: ${pelicula.genero}`);
        console.log(`  > País de origen: ${pelicula.pais}`);
        console.log("-------------------------------");
    });
}
// PASO 5: Ejecución del programa
// Llamo a la función para que el código procese y muestre los resultados.
mostrarCartelera();

