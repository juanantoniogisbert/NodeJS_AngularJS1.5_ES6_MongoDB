function GameConfig($stateProvider) {
    'ngInject';
  
    $stateProvider
    .state('app.game', {
        url: '/game',
        controller: 'GameCtrl',
        controllerAs: '$ctrl',
        templateUrl: 'game/listGame.html',
        title: 'GameDetails',
        resolve: {
            games: function(Game) {
                return Game.getGame().then(
                    (games) => games
                )
            }
        }
    })
    .state('app.detailsGame', {
        url: '/game/:id',
        controller: 'GameDetCtrl',
        controllerAs: '$ctrl',
        templateUrl: 'game/detailsGame.html',
        title: 'GameDetails',
        resolve: {
            game: function(Game, $stateParams) {
                return Game.getGameID($stateParams.id).then(
                    (game) => game
                )
            }
        }
    });
};
  
export default GameConfig;