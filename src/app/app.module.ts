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

@NgModule({
  declarations: [
    AppComponent,
    DeveloperComponent,
    SkillComponent,
    UserCardComponent,
    UserProfileComponent,
    CreateOnomatopiaComponent,
    OnomatopoeiasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
