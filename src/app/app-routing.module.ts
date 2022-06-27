import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './02-binding/user-profile/user-profile.component';
import { SignupComponent } from './04-router/signup/signup.component';

const ROUTES: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'userprofile', component: UserProfileComponent},
  { path: './', component: UserProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})

export class AppRoutingModule { };
export { ROUTES };
