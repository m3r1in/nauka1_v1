import {Component, OnInit} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";

@Component({
  selector: 'page-user',
  templateUrl: 'user.html'
})
export class UserPage implements OnInit{
  name: string;

  constructor(
    private navParams: NavParams,
    private navCtrl: NavController
    ){}

  ngOnInit() {
    this.name = this.navParams.get('userName');
    this.name = this.navParams.get('productName');
  }
  onGoBack(){
    //this.navCtrl.pop();
    this.navCtrl.pop();
  }
 // OnGoRoot(){
  //  this.navCtrl.popToRoot();
  //}
}
