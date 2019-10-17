function HomeConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.home', {
    url: '/',
    controller: 'HomeCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'home/home.html',
    title: 'Home', 
    resolve:{
      deporte: function(Deporte){
        // console.log(Deporte);
        return Deporte.getDeportes().then(
          (deporte) => deporte
        )
      }
    }
  })
  .state('app.detailsdepor', {
    url: '/deportes/:slug',
    controller: 'DetailsDeporCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'home/detailsdepor.html',
    title: 'Details Deportes',
    resolve: {
      project: function(Deporte, $stateParams) {
        // console.log(Deporte);
        return Deporte.getDeporte($stateParams.slug).then(
          (deporte) => deporte
        )
      }
    }
  });

};

export default HomeConfig;
