class FavoriteBtnCtrl {
  constructor(User, Deporte, $state) {
    'ngInject';

    this._User = User;
    this._deporte = Deporte;
    this._$state = $state;

    // console.log(Deporte);

  }

  submit() {
    this.isSubmitting = true;

    if (!this._User.current) {
      this._$state.go('app.login');
      return;
    }

    
    if (this.deporte.favorited) {
      console.log("hola");
      
      this._deporte.unfavorite(this.deporte.slug).then(
        () => {
          this.isSubmitting = false;
          this.deporte.favorited = false;
          this.deporte.countFav--;
        }
      )

    } else {
      this._deporte.favorite(this.deporte.slug).then(
        () => {
          this.isSubmitting = false;
          this.deporte.favorited = true;
          this.deporte.countFav++;
        }
      )
    }

  }

}

let FavoriteBtn= {
  bindings: {
    deporte: '='
  },
  transclude: true,
  controller: FavoriteBtnCtrl,
  templateUrl: 'components/buttons/favorite-btn.html'
};

export default FavoriteBtn;
