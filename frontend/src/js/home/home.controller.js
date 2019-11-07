class HomeCtrl {
  constructor(AppConstants, $scope, deporte, games, music) {
    'ngInject';

    // console.log(deporte);
    this.appName = AppConstants.appName;
    this._$scope = $scope;

    this.deportesInfo = deporte;
    this.GamesInfo = games.games;
    this.MusicInfo = music;
    
  }
}

export default HomeCtrl;
