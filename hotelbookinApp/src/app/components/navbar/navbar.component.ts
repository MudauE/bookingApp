import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class navbarComponent implements OnInit {

 

 @Input() name;
 @Input() page;


 @Input() firstname;
 @Input() surname;
 @Input() time;
 @Input() date;
 
  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  navigator(){

  if(this.name=== 'event') {

    this.router.navigate (['details/event']);

  } else if (this.name === 'view') {

    //this.router.navigate(['detail/view']);
    this.router.navigate(['details/view'], {queryParams: {name: this.name, surname: this.surname, time: this.time, date: this.date}})
  }

  
};
}

