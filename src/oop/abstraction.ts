//oop - abstraction

//idea pai but express er real implemenation jana jai na

//implemenation pore krbo
//type interface ar abstraction kore real implemenatation korle pari;

// interface multiPlay{
//     play():void;
//     pause():void;
//     stop():void;

// }

// class MusicPlayer implements multiPlay{
//     play(): void {
//         console.log("playing music....");
//     }
//     pause(): void {
//         console.log("music play login");
//     }
//     stop(): void {
//         console.log("music play stop...");
//     }
// }
// const music= new MusicPlayer;
// music.play();

abstract class multiPlay {
    abstract play(): void;
    abstract pause(): void;
    abstract stop(): void;
}
class MusicPlayer extends multiPlay{
    play(): void {
        console.log("playing music....");
    }
    pause(): void {
        console.log("music play login");
    }
    stop(): void {
        console.log("music play stop...");
    }
}
const music= new MusicPlayer;
music.play();
