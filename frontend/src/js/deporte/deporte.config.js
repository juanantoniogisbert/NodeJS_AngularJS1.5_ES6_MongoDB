function DeporteConfig($stateProvider) {
    'ngInject';
  
    $stateProvider
    .state('app.deporte', {
      url: '/',
      controller: 'DeporteCtrl',
      controllerAs: '$ctrl',
      templateUrl: 'deporte/deporte.html',
      title: 'Deporte'
    });
  
  };
  
  export default DeporteConfig;
  