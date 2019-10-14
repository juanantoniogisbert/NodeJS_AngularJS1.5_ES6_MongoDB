function configContact($stateProvider){
    'ngInject';

    $stateProvider
    .state('app.contact', {
        url: '/contact',
        controller: 'contactCtrl',
        controllerAs: '$ctrl',
        templateUrl: 'contact/contact.html',
        title: 'Contact'
    });
};

export default configContact;