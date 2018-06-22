import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DetailsComponent} from './components/details/details.component';

import { AppComponent } from './app.component';
import { BookingAppComponent } from './components/booking-app/booking-app.component';
import { ViewComponent } from './components/view/view.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from '../app.module.routes';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { BookComponent } from './components/book/book.component';
import { PhotoComponent } from './components/photo/photo.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingAppComponent,
    ViewComponent,
    AboutComponent,
    ContactComponent,
    DetailsComponent,
    BookComponent,
    PhotoComponent,
   // EventComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
