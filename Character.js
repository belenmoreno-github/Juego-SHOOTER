/**
 *  Cada uno de los personajes del juego, es decir, aquellos elementos que tienen “vida”.
 *  @extends Entity
 */
class Character extends Entity {
    /**
     * Inicializa un personaje
     * @param game {Game} La instancia del juego al que pertenece el personaje
     * @param width {Number} Ancho del personaje
     * @param height {Number} Alto del personaje
     * @param x {Number} Posición horizontal del personaje
     * @param y {Number} Posición vertical del personaje
     * @param speed {Number} Velocidad del personaje
     * @param myImage {String} Ruta de la imagen del personaje
     * @param myImageDead {String} Ruta de la imagen del personaje cuando muere
     */
    constructor (game, width, height, x, y, speed, myImage, myImageDead) {
        super(game, width, height, x, y, speed, myImage);
        this.dead = false; // Indice si el personaje está vivo o muerto
        this.myImageDead = myImageDead;
    }

    /**
     * Mata a un personaje
     */

    collide(img) {
        this.image.src = img || this.myImageDead;
        this.dead = true;
    }

    /**
     * Para que me aparezca por pantalla la puntuación y las vidas 
     */
    count_score(score) {
        document.getElementById("scoreli").innerHTML = "Score: " + String(score);
    }

    count_lives(lives) {
        document.getElementById("livesli").innerHTML = "Lives: " + String(lives);
    }
}

