import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './02-binding/user-profile/user-profile.component';
import { MenuInscriptionComponent } from './04-router/menu-inscription/menu-inscription.component';

const ROUTES: Routes = [
  { path: '', component: UserProfileComponent },
  { path: 'signup', component: MenuInscriptionComponent },
  { path: 'userprofile', component: UserProfileComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})

export class AppRoutingModule { };
export { ROUTES };
