import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { accountFeatureUserRoutes } from './lib.routes';
import { AccountFeatureUserComponent } from './account-feature-user.component';
import { UserService, UserServiceImpl } from '@wsdev/account/data-access';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(accountFeatureUserRoutes)],
  declarations: [AccountFeatureUserComponent],
  providers: [
    {
      provide: UserService,
      useClass: UserServiceImpl,
      deps: [HttpClient]
    }
  ]
})
export class AccountFeatureUserModule {}
