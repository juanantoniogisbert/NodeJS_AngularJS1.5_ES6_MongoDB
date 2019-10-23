function HomeConfig($stateProvider) {
  'ngInject';

  $stateProvider
  // .state('app.home', {
  //   url: '/',
  //   controller: 'HomeCtrl',
  //   controllerAs: '$ctrl',
  //   templateUrl: 'home/home.html',
  //   title: 'Home', 
  //   resolve:{
  //     deporte: function(Deporte){
  //       // console.log(Deporte.getDeportes());
  //       return Deporte.getDeportes().then(
  //         (deporte) => deporte
  //       )
  //     }
  //   }
  // })
  .state('app.home', {
    url: '/',
    controller: 'HomeCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'home/home.html',
    title: 'Home',
    resolve: {
      deporte: function(Deporte) {
        // console.log(Deporte);
        return Deporte.getDeportes().then(
          (deporte) => deporte
        )
      }
    }
  });

};

export default HomeConfig;
