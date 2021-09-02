import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {LocalService} from '../local.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  id = ""
  todoItem

  constructor(private activatedRoute: ActivatedRoute, 
    public localService:LocalService, 
    public alertController: AlertController, 
    public router:Router) { }

  // When the page is loaded.. Get the value of id from the parameter
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.todoItem = this.localService.readAnItem(this.id) 

  }
  async deleteItem(){

    const alert = await this.alertController.create({
      header: 'Confirmation!',
      message: 'Are you sure you want to delete this item?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
       
          handler: (blah) => {
            
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.localService.deleteItem(this.id)
            this.router.navigate(['/home']);
          }
        }
      ]
    });

    await alert.present();
  }

}
