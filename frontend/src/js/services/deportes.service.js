export default class Deporte {
  constructor(AppConstants, $http) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$http = $http;
  }

  getDeportes(){
    return this._$http({
      url: `${this._AppConstants.api}/deportes`,
      method: 'GET'
    }).then((res)=> res.data.deporte);
  }

  getDeporte(slug) {
    return this._$http({
        url: this._AppConstants.api + '/deportes/' + slug,
        method: 'GET',
    }).then((res) => res.data.projects);
  }

  favorite(slug) {
    return this._$http({
      url: this._AppConstants.api + '/deportes/' + slug + '/favorite',
      method: 'POST'
    })
  }

  unfavorite(slug) {
    return this._$http({
      url: this._AppConstants.api + '/deportes/' + slug + '/favorite',
      method: 'DELETE'
    })
  }

}
  