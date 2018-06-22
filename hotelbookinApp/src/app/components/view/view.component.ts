import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
 firstname: '';
 surname: '';
 age: '';
 date: '';
 


  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.queryParams.subscribe(paramas =>{

      this.firstname = paramas['name'];
      this.surname = paramas['surname'];
      this.age = paramas['age'];
      this.date = paramas['date'];

      console.log(this.firstname);
      console.log(this.surname);
      console.log(this.age);
      console.log(this.date);
      
     });

  
}

}