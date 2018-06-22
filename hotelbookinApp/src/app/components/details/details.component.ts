import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  firstname:'';
  surname:'';
  time:'';
  date:'';


  pages = [

    //{name: 'event', page: 'event'},
    {name: 'view', page: 'view'}
    
 ];

  constructor(private router: ActivatedRoute) { }

  ngOnInit()
   {
    this.router.queryParams.subscribe(paramas =>{

      this.firstname = paramas['name'];
      this.surname = paramas['surname'];
      this.time = paramas['time'];
      this.date = paramas['date'];

      console.log(this.firstname);
      console.log(this.surname);
      console.log(this.time);
      console.log(this.date);
      
  });
      
      
 
}
}