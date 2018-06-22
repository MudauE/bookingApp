import { PhotoComponent } from './app/components/photo/photo.component';
import { BookComponent } from './app/components/book/book.component';
import { AboutComponent } from './app/components/about/about.component';
import { Component } from '@angular/core';
import { ContactComponent } from './app/components/contact/contact.component';
import { DetailsComponent} from './app/components/details/details.component';

import { BookingAppComponent } from './app/components/booking-app/booking-app.component';
import { Routes, RouterModule} from '@angular/router';
  

// array 

export const routes: Routes = [


    { path: '',component:BookingAppComponent },
    {path: 'booking-app', component:BookingAppComponent},
    {path:'about', component: AboutComponent},
    {path:'contact', component: ContactComponent},
    {path:'photo', component: PhotoComponent},
    {path:'book', component: BookComponent},
    { path: 'details', component: DetailsComponent}
    


    

]


