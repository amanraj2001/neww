import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { product } from '../model/prod';
import { PserviceService } from '../pservice.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {


    productarr:Array<product>=[]

      constructor(private fb:FormBuilder, private demo:PserviceService) {

      }
      form= this.fb.group({
        id:[''],
        name:[''],
        cost:['']
      })

      add(){
        if(typeof this.form.value.id==='number' && typeof this.form.value.name==='string' && typeof this.form.value.cost==='number'){

        this.productarr.push({"id":this.form.value.id,"name":this.form.value.name,'cost':this.form.value.cost})
        }
        console.log(this.productarr);
        this.demo.fetchdata(this.productarr)


      }



}
