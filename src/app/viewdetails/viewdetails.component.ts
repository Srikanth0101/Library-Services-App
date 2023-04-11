import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.css']
})
export class ViewdetailsComponent implements OnInit{
  data: any;

  constructor(private libservice :LibraryService) { }

  


  ngOnInit(): void{

    let response =this.libservice.getallbooks();
    response.subscribe((data1: any)=>this.data=data1);
  }

}
