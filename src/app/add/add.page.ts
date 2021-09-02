import { Component, OnInit } from '@angular/core';
import { LocalService } from '../local.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  name="";
  location="";
  imageUrl="";
  
  constructor(public localService: LocalService,
    public router:Router) { }

  ngOnInit() {
  }

  addNewItem(){
    // Create a new object from value from the ngModel
    let newItem = {
      id:this.localService.getCurrentId(),
      name:this.name,
      location:this.location,
      imageUrl:this.imageUrl
    }
    this.localService.addItem(newItem);
    this.router.navigate(['/home']);
  }

}
