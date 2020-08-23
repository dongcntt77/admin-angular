import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
@NgModule({
  declarations: [UserComponent, UserComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'user',
        component: UserComponent,
      },
  ]),  
  ]
})
export class UserModule { }
