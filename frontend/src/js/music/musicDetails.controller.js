class MusicDetCtrl {
    constructor(music) {
        'ngInject';
  
        this.MusicDetails = music.music;
        console.log(this.MusicDetails);
    }
}
    
    export default MusicDetCtrl;