import { Component, Inject } from '@angular/core';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  currentIdentity: any;

  /*$location, toastr, currentIdentity*/
  constructor(@Inject('$location') private $location) {
    // this.profile = angular.copy(currentIdentity.currentUser);
    this.currentIdentity = {currentUser: {firstName: 'Scott', lastName: 'wright'}}
  }

  save() {
    // currentIdentity.updateUser(this.profile);
    // toastr.success('Profile Saved!');
  }

  cancel() {
    this.$location.path('/home');
  }
}
