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
    // })
    // .state('app.detailsGame', {
    //     url: '/game/:id',
    //     controller: 'GameDetCtrl',
    //     controllerAs: '$ctrl',
    //     templateUrl: 'game/detailsGame.html',
    //     title: 'GameDetails',
    //     resolve: {
    //         game: function(Game, $stateParams) {
    //             return Game.getGameID($stateParams.id).then(
    //                 (game) => game
    //             )
    //         }
    //     }
    });
};
  
export default MusicConfig;