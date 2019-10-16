class deportCompoCtrl {
    constructor($scope, Deporte) {
      'ngInject';
        // console.log(Deporte);    
        this.deporte = Deporte;
        this.$scope = $scope;
        this.runQuery();
    }

    runQuery(){
        this.deporte.getDeportes().then(
            (deporte) => {
                console.log(deporte);
                this.$scope.deportesInfo = deporte;
            }
        )
    }
}

    let deporCompo = {
        controller: deportCompoCtrl,
        templateUrl: 'components/deportes/deportes-compo.html'
    }

export default deporCompo;