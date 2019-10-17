class HomeCtrl {
  constructor(User, Tags, AppConstants, $scope, $state, deporte) {
    'ngInject';

    this.appName = AppConstants.appName;
    this._$scope = $scope;

    this.deportesInfo = deporte;
    
  }
}

export default HomeCtrl;
