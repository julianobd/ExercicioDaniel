import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserFormComponent } from './user-form/user-form.component';
import { FormGuard } from './../../core/guards/form.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
  },
  {
    path: 'create',
    component: UserFormComponent,
    canDeactivate: [FormGuard]
  },
  {
    path: 'update/:id',
    component: UserFormComponent,
    canDeactivate: [FormGuard]
  },
  {
    path: 'profile/:id',
    component: UserProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
