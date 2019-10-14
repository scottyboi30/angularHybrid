

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
import { DetailPanelComponent } from './shared/detailPanel.component';
import { ResultsComponent } from './admin/results.component';
import { SessionDetailWithVotesComponent } from './sessions/sessionDetailWithVotes.component';
import { UrlHandlingStrategy, UrlTree, RouterModule } from '@angular/router';

const getLocation = (i: any) => i.get('$location');
const getCurrentIdentity = (i:any) => i.get('currentIdentity');
const getToastr = () => toastr;

class Ng1Ng2UrlHandlingStrategy implements UrlHandlingStrategy {
  shouldProcessUrl(url: UrlTree): boolean {
    return url.toString().startsWith('/admin/results');
  }
  extract(url: UrlTree): UrlTree { return url; }
  merge(newUrlPart: UrlTree, rawUrl: UrlTree): UrlTree { return newUrlPart; }
}

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    UpgradeModule,
    RouterModule.forRoot([
      { path: 'admin/results', component: ResultsComponent }
    ], {useHash: true})
  ],
  declarations: [
    AppComponent,
    UnreviewedTalkComponent,
    TalkDurationPipe,
    ProfileComponent,
    NavComponent,
    DetailPanelComponent,
    ResultsComponent,
    SessionDetailWithVotesComponent,
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
    { provide: UrlHandlingStrategy, useClass: Ng1Ng2UrlHandlingStrategy },
    { provide: '$scope', useExisting: '$rootScope'},
  ],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    UnreviewedTalkComponent,
    ProfileComponent,
    DetailPanelComponent,
    ResultsComponent,
  ]
})
export class AppModule {}