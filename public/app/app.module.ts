

import { NgModule } from "@angular/core";
import { UpgradeModule } from "@angular/upgrade/static";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";

import { UnreviewedTalkComponent} from "./home/unreviewedTalk.component";
import { TalkDurationPipe } from './shared/pipes/talkDuration.pipe';
import { ProfileComponent } from './profile/profile.component';
import { TOASTR_TOKEN } from './toastr/toastr.service';
import { NavComponent } from './nav/nav.component';

const getLocation = (i: any) => i.get('$location');
const getCurrentIdentity = (i:any) => i.get('currentIdentity');
const getToastr = () => toastr;

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    UpgradeModule
  ],
  declarations: [
    AppComponent,
    UnreviewedTalkComponent,
    TalkDurationPipe,
    ProfileComponent,
    NavComponent,
  ],
  providers: [
    { 
      provide: '$location',
      useFactory: getLocation,
      deps: ['$injector'],
    },
    { provide: 'currentIdentity',
      useFactory: getCurrentIdentity,
      deps: ['$injector']},
    { provide: TOASTR_TOKEN, useFactory: getToastr },
  ],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    UnreviewedTalkComponent,
    ProfileComponent,
  ]
})
export class AppModule {}