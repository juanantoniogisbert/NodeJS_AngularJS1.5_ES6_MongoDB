class HomeDet {
    constructor(Deporte, $state) {
      'ngInject';
  
      this._Deporte = Deporte;
      this._$state = $state;
    }

    getDetails(){
        console.log(this.favorito['name']);
    }
}

    let BtnDepor = {
        bindings: {
            favorito: '='
        },
        controller: HomeDet,
        templateUrl: 'components/deportes/deportes-fav.html'
    }

export default BtnDepor;