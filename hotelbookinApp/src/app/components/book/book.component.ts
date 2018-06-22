import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  name : '';
  surname : '';
  time : '';
  date : '';




  constructor(private router:Router) { }

  ngOnInit() {
  }
  nav(item:string){
    if(item == 'About'){
      this.router.navigate(['/About'])
    }
  }
  bookings(){
    this.router.navigate(['details'], {queryParams: {name: this.name, surname: this.surname, time: this.time, date: this.date}});
  }
}