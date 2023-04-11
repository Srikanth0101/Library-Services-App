import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-deletebook',
  templateUrl: './deletebook.component.html',
  styleUrls: ['./deletebook.component.css']
})
export class DeletebookComponent implements OnInit{

  constructor(private s1:LibraryService) { }

  ngOnInit(): void {
      
  }
  deletedata(deleteform:{value:any;})
  {
    return this.s1.deletedata1(deleteform.value).subscribe();
  }



}
