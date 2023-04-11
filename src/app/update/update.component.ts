import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{

  constructor(private s1 :LibraryService){ }

  ngOnInit(): void{

  }
  updatedata(updateform:{value:any;})
  {
    return this.s1.updatedata1(updateform.value).subscribe();
  }

}
