import { Component, OnInit } from '@angular/core';
import {LocalService} from '../local.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  todoList = []

  constructor(private localService:LocalService) {}

  // When the page is loaded, I will retrive data from the service

  ngOnInit(){
   
    console.log("here ngOnInit")

  }

  ionViewWillEnter(){
    this.todoList = this.localService.readAllItems()
    console.log("here ionViewWillEnter")
    console.log(this.todoList)
  }


}
