class HomeCtrl {
  constructor(AppConstants, $scope, deporte) {
    'ngInject';

    // console.log(deporte);
    this.appName = AppConstants.appName;
    this._$scope = $scope;

    this.deportesInfo = deporte;
  }
}

export default HomeCtrl;
