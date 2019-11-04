class GamePreview {
    constructor($state) {
      'ngInject';
  
    //   this._Deporte = Deporte;
      this._$state = $state;
    }

    getGame(){
        // console.log(this.preview['id']);
        this._$state.go('app.detailsGame', {id: this.preview['id']})
    }
}

    let PrevGame = {
        bindings: {
            preview: '='
        },
        controller: GamePreview,
        templateUrl: 'components/games/gamePre.html'
    }

export default PrevGame;