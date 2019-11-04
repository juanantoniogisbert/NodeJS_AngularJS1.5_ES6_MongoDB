class HomeCtrl {
  constructor(AppConstants, $scope, deporte, games) {
    'ngInject';

    // console.log(deporte);
    this.appName = AppConstants.appName;
    this._$scope = $scope;

    this.deportesInfo = deporte;
    this.GamesInfo = games.games;
    
  }
}

export default HomeCtrl;
