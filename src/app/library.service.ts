import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { InsertComponent } from './insert/insert.component';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  
  constructor(private http:HttpClient) { }

  fetchurl = "http://localhost:9002/view";
 deleteurl = "http://localhost:9002/delete";
 inserturl = "http://localhost:9002/insert";
 updateurl = "http://localhost:9002/update";
 
  

  getallbooks()
  {
    return this.http.get(this.fetchurl);
  }

  deletedata1(data:any)
  {
    return this.http.post(this.deleteurl,data);
  }

  insertdata1(data:any)
  {
    return this.http.post(this.inserturl,data)
  }

  updatedata1(data:any)
  {
    return this.http.post(this.updateurl,data);
  }

}
