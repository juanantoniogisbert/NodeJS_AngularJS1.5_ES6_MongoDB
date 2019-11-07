function MusicConfig($stateProvider) {
    'ngInject';
  
    $stateProvider
    .state('app.music', {
        url: '/music',
        controller: 'MusicCtrl',
        controllerAs: '$ctrl',
        templateUrl: 'music/listMusic.html',
        title: 'listmusic',
        resolve:{
            music: function(Music){
                return Music.getAllMusic().then(
                    (music) => music
                )
            }
        }
    })
    .state('app.detailsMusic', {
        url: '/music/:id',
        controller: 'MusicDetCtrl',
        controllerAs: '$ctrl',
        templateUrl: 'music/detailsMusic.html',
        title: 'MusicDetails',
        resolve: {
            musics: function(Music, $stateParams) {
                return Music.getMusic($stateParams.id).then(
                    (musics) => musics
                )
            }
        }
    });
};
  
export default MusicConfig;