import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeveloperComponent } from './07-input/developer/developer.component';
import { SkillComponent } from './07-input/skill/skill.component';
import { UserCardComponent } from './02-binding/user-card/user-card.component';
import { UserProfileComponent } from './02-binding/user-profile/user-profile.component';
import { CreateOnomatopiaComponent } from './08-output/create-onomatopia/create-onomatopia.component';
import { OnomatopoeiasComponent } from './08-output/onomatopoeias/onomatopoeias.component';
import { MenuComponent } from './04-router/menu/menu.component';
import { MenuInscriptionComponent } from './04-router/menu-inscription/menu-inscription.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app-routing.module';
import { SignUpComponent } from './05-template-driven-forms/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    DeveloperComponent,
    SkillComponent,
    UserCardComponent,
    UserProfileComponent,
    CreateOnomatopiaComponent,
    OnomatopoeiasComponent,
    MenuComponent,
    MenuInscriptionComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
