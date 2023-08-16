import { Component } from '@angular/core';
import { UserService } from '@wsdev/account/data-access';

@Component({
  selector: 'wsdev-account-feature-user',
  templateUrl: './account-feature-user.component.html',
  styleUrls: ['./account-feature-user.component.scss'],
})
export class AccountFeatureUserComponent {
  users$

  constructor(readonly userService: UserService) {
    this.users$ = this.userService.findOne('id')
  }
}
