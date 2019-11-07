class MusicPreview {
    constructor($state) {
      'ngInject';
  
    //   this._Deporte = Deporte;
      this._$state = $state;
    }

    getMusic(){
        // console.log(this.preview['_id']);
        this._$state.go('app.detailsMusic', {id: this.preview[':_id']})
    }
}

    let PrevMusic = {
        bindings: {
            preview: '='
        },
        controller: MusicPreview,
        templateUrl: 'components/musics/musicPre.html'
    }

export default PrevMusic;