class AuthCtrl {
  constructor(User, $state, $scope, Toastr) {
    'ngInject';

    this._User = User;
    this._$state = $state;
    this._$scope = $scope;
    this._toaster = Toastr;

    this.title = $state.current.title;
    this.authType = $state.current.name.replace('app.', '');

  
    
    this.submitForm = function() {
      this.isSubmitting = true;
      
      this._User.attemptAuth(this.authType, this.formData).then(
        
        (res) => {
          // console.log(res);
          this._$state.go('app.home');
        },
        (err) => {
          this.isSubmitting = false;
          this.errors = err.data.errors;
        }
      )
    }
  }
}
    
    export default AuthCtrl;
    