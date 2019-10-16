class ProfileCtrl {
  constructor(User) {
    'ngInject';

    if (User.current) {
      this.isUser = {
        email: User.current.email,
        bio: User.current.bio,
        image: User.current.image,
        username: User.current.username,
        nombre: User.current.nombre
      }
    } else {
      this.isUser = false;
    }
  }
}


export default ProfileCtrl;
