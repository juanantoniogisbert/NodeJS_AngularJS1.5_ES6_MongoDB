function DetailsConfig($stateProvider) {
    'ngInject';
  
    $stateProvider
    .state('app.details', {
        url: '/details/:slug',
        controller: 'DetailsCtrl',
        controllerAs: '$ctrl',
        templateUrl: 'details/detailsHome.html',
        title: 'GameDetails',
        resolve: {
            deporte: function(Deporte, $stateParams) {
                return Deporte.getCACA($stateParams.slug).then(
                    (deporte) =>  deporte
                )
            }
        }
    })
    // .state('app.details', {
    //     url: '/game/:slug',
    //     controller: 'DetailsCtrl',
    //     controllerAs: '$ctrl',
    //     templateUrl: 'details/detailsHome.html',
    //     title: 'GameDetails',
    //     resolve: {
    //         deporte: function(Deporte, $stateParams) {
    //             return Deporte.getCACA($stateParams.slug).then(
    //                 (deporte) =>  deporte
    //             )
    //         }
    //     }
    // });
};
  
export default DetailsConfig;