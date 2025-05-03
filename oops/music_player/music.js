
class Musicplayer{
    constructor(title, artist, audio) {
    this.title = title;
       this.artist = artist
       this.audio = audio
    }

    getdetails() {
        console.log(`Now playing: ${this.title} by ${this.artist}`);     
    }
    play() {
       console.log(`Playing ${this.title}`);
       // let audio = new Audio(this.audio);
        // audio.play();
    }
}

const player1 = new Musicplayer("Gumaan", "talha anjum", "https://soundcloud.com/mohammad-muzammil-835869367/gumaan-young-stunners-talha?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing");
const player2 = new Musicplayer("Tum Hi Ho", "Arijit Singh", "https://soundcloud.com/radhi14891/tum-hi-ho-meri-ashiqui-ashiqui?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing");
const player3 = new Musicplayer("Lagdi Lahore Di", "Guru Randhawa", "https://soundcloud.com/jaidi007/o-lagdi-lahore-di-aa?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing");

const playlist = [player1, player2, player3]
console.log(playlist);

playlist[0].getdetails();
playlist[0].play();