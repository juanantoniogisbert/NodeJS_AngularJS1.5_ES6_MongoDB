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
          this._$state.go('app.home');
        },
        (err) => {
          this.isSubmitting = false;
          this.errors = err.data.errors;
        }
      )
    }
      
    this.submitSocial = function() {
      this._User.attemptAuth(this.authType, null).then(
        (res) => {
          this._toaster.showToastr('success','Successfully Logged In');
          if(res.data.user.type == "admin"){
            this._$state.go('app.adminpanel');
          }else {
            location.reload();
            this._$state.go('app.home');
          }
        },
        (err) => {
          this._toaster.showToastr('error','Error trying to login');
          this._$state.go('app.home');
        }
      )
    }
  }
}
    
    export default AuthCtrl;
    