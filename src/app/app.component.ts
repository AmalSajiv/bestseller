import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Best-Seller';

  constructor(){}

  ngOnInit() {
    
  }

  url:string = "../assets/img4.jpg";
  changeImage(event:any){
    this.url = event.target.src
  }

}
