/**
 * Está función evalua el valor de cada carta
 * @param {String} carta Carta que pertenece al deck
 * @returns {Number} Valor de la carta
 */

export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}