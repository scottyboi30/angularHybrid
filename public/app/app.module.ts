

import { NgModule } from "@angular/core";
import { UpgradeModule } from "@angular/upgrade/static";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";

import { UnreviewedTalkComponent} from "./home/unreviewedTalk.component";
import { TalkDurationPipe } from './shared/pipes/talkDuration.pipe';
import { ProfileComponent } from './profile/profile.component';

function getLocation(i: any) {
  return i.get('$location')
}

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
  ],
  providers: [
    { 
      provide: '$location',
      useFactory: getLocation,
      deps: ['$injector'],
    }
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