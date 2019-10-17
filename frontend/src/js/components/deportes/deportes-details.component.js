// class deportCompoCtrl {
//     constructor($scope, Deporte) {
//         'ngInject';

//         this.deporte = Deporte;
//         this.$scope = $scope;
//         this.runQuery();
//     }

//     runQuery(){
//         this.deporte.getDeportes().then(
//             (deporte) => {
//                 // console.log(deporte);
//                 this.$scope.deportesInfo = deporte;
//             }
//         )
//     }
// }

    let ListDepor = {
        bindings: {
            deportes: '='
        },
        templateUrl: 'components/deportes/deportes-compo.html'
    }

export default ListDepor;