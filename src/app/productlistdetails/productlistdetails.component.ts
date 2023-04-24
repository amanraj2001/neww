import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PserviceService } from '../pservice.service';


@Component({
  selector: 'app-productlistdetails',
  templateUrl: './productlistdetails.component.html',
  styleUrls: ['./productlistdetails.component.css']
})
export class ProductlistdetailsComponent implements OnInit {


    constructor(private route:ActivatedRoute,private demo:PserviceService){

    }
    res!:any
    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
        this.route.params.subscribe(p=>{
          console.log(p['id']);
          // this.res=this.demo.list.find(x=>x.id==p['id'])
          // console.log(this.res);

        })
    }
}
