class FavoriteBtnCtrl {
  constructor(User, Deporte, $state) {
    'ngInject';

    this._User = User;
    this._Deporte = Deporte;
    this._$state = $state;

    // console.log(Deporte);

  }

  submit() {
    this.isSubmitting = true;
    
    if (!this._User.current) {
      this._$state.go('app.login');
      return;
    }
    // console.log(this.depor);
    
    if (this.depor.favorited) {
      
      this._Deporte.unfavorite(this.depor.slug).then(
        () => {
          this.isSubmitting = false;
          this.depor.favorited = false;
          this.depor.countFav--;
        }
      )

    } else {
      this._Deporte.favorite(this.depor.slug).then(
        () => {
          this.isSubmitting = false;
          this.depor.favorited = true;
          this.depor.countFav++;
        }
      )
    }
  }
}

let FavoriteBtn= {
  bindings: {
    depor: '='
  },
  transclude: true,
  controller: FavoriteBtnCtrl,
  templateUrl: 'components/buttons/favorite-btn.html'
};

export default FavoriteBtn;
