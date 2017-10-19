
import { Component } from '@angular/core';
//import { NavController} from 'ionic-angular';



@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {
  constructor (private navCtrl: NavController){}
  onLoadProduct(name: string){
    this.navCtrl.push(BayoutPage, {productName: name});
  }


}



