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
          (deporte) => deporte.deportes
        )
      }
    }
  })
  // .state('app.details', {
  //   url: 'home/:slug',
  //   controller: 'HomeCtrl',
  //   controllerAs: '$ctrl',
  //   templateUrl: 'home/details-home.html',
  //   title: 'Home Details',
  //   resolve: {
  //     deporte: function(Deporte, $state, $stateParams,toaster) {
  //       return Deporte.getDetails($stateParams.slug).then(
  //         (deporte) => {
  //           return deporte.deportes;
  //         },
  //         (err) => {
  //           toaster.pop('error', 'Error', err);
  //           console.log(err);
  //           $state.go('app.home')
  //         }
  //       )
  //     }
  //   }
  // });
};

export default HomeConfig;
