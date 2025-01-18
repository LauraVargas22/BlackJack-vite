/**
 * Función para crear Carta HTML
 * @param {String} carta
 * @returns {HTMLImageElement} Imagen de retorno
 */

export const crearCarta = (carta) => {

    if(!carta) throw new('La carta es un argumento obligatorio');

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');

    return imgCarta;
}