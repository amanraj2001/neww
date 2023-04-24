import { Component } from '@angular/core';
import { product } from '../model/prod';
import { PserviceService } from '../pservice.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent {

dataArr!:Array<product>
  constructor(private demo:PserviceService) {
    this.dataArr=this.demo.list
    console.log(this.dataArr);

  }
}
