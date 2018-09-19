import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {path: '', component: RestaurantListComponent},
  {path: 'contact', component: ContactComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    RestaurantListComponent,
    ContactComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    FlashMessagesModule,
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({apiKey: 'AIzaSyBhU44Q_VPvYo3Jo7Cd4qK8yOZVTTcGMXA'})
  ],
  providers: [FlashMessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
