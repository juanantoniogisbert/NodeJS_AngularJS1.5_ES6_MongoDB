class DeporteListCtrl {
  constructor(Deporte, $scope) {
    'ngInject';
    
    this._Deportes = Deporte;
    console.log("Deportes");
    this.setListTo(this.listConfig);
    this.runQuery();

    $scope.$on('setListTo', (ev, newList) => {
      this.setListTo(newList);
    });

    $scope.$on('setPageTo', (ev, pageNumber) => {
      this.setPageTo(pageNumber);
    });
  }

  setListTo(newList) {
    // Set the current list to an empty array
    this.list = [];
    // Set listConfig to the new list's config
    this.listConfig = newList;
    this.runQuery();
  }

  setPageTo(pageNumber) {
    this.listConfig.currentPage = pageNumber;
    this.runQuery();
  }

  runQuery(){
    this.deporte.getDeportes().then(
      (deporte) => {
        // console.log(deporte);
        this.$scope.deportesInfo = deporte;
      }
    )
  }
}

let DeporteList = {
  bindings: {
    limit: '=',
    listConfig: '='
  },
  controller: DeporteListCtrl,
  templateUrl: 'components/deporte-helpers/deporte-list.html'
};

export default DeporteList;
