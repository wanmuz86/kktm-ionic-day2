import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  id = ""

  constructor(private activatedRoute: ActivatedRoute) { }

  // When the page is loaded.. Get the value of id from the parameter
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id']; 

  }

}
