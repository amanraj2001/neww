import { Injectable } from '@angular/core';
import { product } from './model/prod';

@Injectable({
  providedIn: 'root'
})
export class PserviceService {
list!:Array<product>
  constructor() { }
  fetchdata(data:Array<product>){
    this.list=data
    console.log(this.list);

  }
}

