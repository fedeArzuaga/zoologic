/**
 * We're creating a generic class called "Animal" to create our two initial instances: Lion and Tiger.
 * Additionally, this class could be used in the future to create another animal instances
 */

class Animal {
    
    constructor(type, sound) {
        this.type = type,
        this.sound = sound
    }

    speak( message ) {

        // Splitting our initial message in diferent parts by their empty spaces
        const splittedMessage = message.split(" ");
        let animalSpeaking = "";

        // Putting the respective sound to the animal after each word in the sentence
        for ( let i = 0; i < splittedMessage.length; i++ ) {
            animalSpeaking += splittedMessage[i];
            animalSpeaking += ` ${this.sound} `;
        }

        // Removing the last space in the string
        const result = animalSpeaking.substring(0, animalSpeaking.length - 1);

        return result;

    }

}

module.exports = {
    Animal
}