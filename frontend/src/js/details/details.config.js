function DetailsConfig($stateProvider) {
    'ngInject';
  
    $stateProvider
    .state('app.details', {
        url: '/details/:slug',
        controller: 'DetailsCtrl',
        controllerAs: '$ctrl',
        templateUrl: 'details/detailsHome.html',
        title: 'HomeDetails',
        resolve: {
            deporte: function(Deporte, $stateParams) {
                return Deporte.getCACA($stateParams.slug).then(
                    (deporte) =>  deporte
                )
            }
        }
    });
};
  
export default DetailsConfig;