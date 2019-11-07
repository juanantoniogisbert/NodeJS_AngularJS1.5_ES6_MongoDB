export default class Music {
    constructor(AppConstants, $http) {
      'ngInject';
  
      this._AppConstants = AppConstants;
      this._$http = $http;
    }
  
    getAllMusic(){
        // console.log(`${this._AppConstants.apiMoleculer}/music`);
      return this._$http({
        url: `${this._AppConstants.apiMoleculer}/music`,
        method: 'GET'
      }).then((res)=> res.data);
    }
  
    getMusic(id) {
      return this._$http({
        url: this._AppConstants.apiMoleculer + '/music/' + id,
        method: 'GET',
      }).then((res) => res.data);
    }
}
  
  
  
  
  
    