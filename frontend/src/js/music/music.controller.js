class MusicCtrl {
    constructor(music, $scope) {
      'ngInject';
  
      this._$scope = $scope;
      this.MusicInfo = music;
      console.log(this.MusicInfo);
      
    }
}
  
  export default MusicCtrl;
  