//The abstract MediaPlayer defines three abstract methods (play(), pause(), 
//stop()) that each subclass must implement, plus two concrete methods (displayStatus() 
//and logAction()) that all players inherit.
//The PlayerController depends only on the abstract MediaPlayer, so it works with any player type without modification.

abstract class MediaPlayer{
    private  playName :string;
    constructor(playName:string){
        this.playName = playName
    }

    abstract play():void;
    abstract pause():void;
    abstract stop():void ; 

    displayStatus(){
        console.log(this.playName)
    }
    // action logic for the code
    logAction(action :string):void{
        console.log(`playName: ${this.playName} ant the  the action ${action }`)
    }
}

 class  AudioPlayer extends MediaPlayer{
     private audioFile : string;
      
     constructor(audioFile:string){
        // this was inatil above 
        super("AudioPlayer")
         this.audioFile= audioFile
     }
     // all complete 
     play():void{this.logAction(`Play : ${this.audioFile} `)};
     pause():void{this.logAction(`pause : ${this.audioFile} `)};
     stop():void{this.logAction(`stop : ${this.audioFile} `)};
     
       
 }
 class VideoFile extends MediaPlayer{
    private  VideoFile :string;
    private Resulation :string;
    constructor(VideoFile:string , Resulation:string){
        super("VideoFile")
        this.VideoFile= VideoFile
        this.Resulation= Resulation
        
    }
    play():void{this.logAction(`Play : ${this.VideoFile} `)};
    pause():void{this.logAction(`pause : ${this.VideoFile} `)};
    stop():void{this.logAction(`stop : ${this.VideoFile} `)};
    

 }

 class StreamPlayer extends MediaPlayer{
    private  StremUrl :string;
    private  BufferSize :number;
    constructor(StremUrl:string , BufferSize:number){
        super("StreamPlayer")
        this.StremUrl= StremUrl
        this.BufferSize= BufferSize
       
        
    }
    play():void{this.logAction(`Play : ${this.StremUrl} `)};
    pause():void{this.logAction(`pause : ${this.StremUrl} `)};
    stop():void{this.logAction(`stop : ${this.StremUrl} `)};
    

 }

 class PlayerController{
      private play  :MediaPlayer;
      constructor(play :MediaPlayer){
        this.play = play
      }

      startPlayback(): void{
        this.play.displayStatus();
        this.play.play();
      }
      pausePlayback():void{
        this.play.pause()
      }
      stopPlayback():void{
        this.play.stop
      }
 }
// ussecase
const audioCtrl = new PlayerController(new AudioPlayer("song.mp3"));
audioCtrl.startPlayback();
audioCtrl.pausePlayback();

console.log();

const videoCtrl = new PlayerController(new VideoFile("movie.mp4", "1080p"));
videoCtrl.startPlayback();
videoCtrl.stopPlayback();

console.log();

const streamCtrl = new PlayerController(
    new StreamPlayer("https://stream.example.com/live", 2048));
streamCtrl.startPlayback();
streamCtrl.stopPlayback();