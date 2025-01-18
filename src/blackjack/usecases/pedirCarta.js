import { tipos, especiales } from "..";
//import { crearDeck } from "./crearDeck";

/**
 * Esta función me permite tomar una carta
 * @param {Array<string>} deck Arreglo de Cartas
 * @returns {String} Retorna la carta del deck
 */
export const pedirCarta = (deck) => {
    
    //deck = crearDeck(tipos, especiales);
    
    if (!deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }

    const carta = deck.pop();
    return carta;
}