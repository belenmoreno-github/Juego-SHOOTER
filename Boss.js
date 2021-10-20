/**
 * BOSS al que hay que destruir para ganar la partida
 */


class Boss extends Opponent {
    /**
     * {Game} La instancia del juego al que pertenece el oponente
     */
    constructor (game) { 
        const bossmyImage = BOSS_PICTURE,
            bossspeed = BOSS_SPEED,
            bossmyImageDead = BOSS_PICTURE_DEAD,
            isBoss = true;

        super(game, isBoss);
        this.direction = "R"; // Dirección hacia la que se mueve el oponente
        this.speed = bossspeed;
        this.myImage = bossmyImage;
        this.myImageDead = bossmyImageDead;



        setTimeout(() => this.shoot(), 1000 + getRandomNumber(2500));
    }


    /**
     * Mata al oponente
     */
    collide() {
        //if (!this.dead) {
            super.collide();
            this.game.endGame2();  
        //}
    }
}