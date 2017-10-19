import {Component, OnInit} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";

@Component({
  selector: 'page-buyout',
  templateUrl: 'buyout.html'
})
export class BuyoutPage implements OnInit{
  name: string;

  constructor(
    private navParams: NavParams,
    private navCtrl: NavController
  ){}

  ngOnInit() {
    this.name = this.navParams.get('productName')
  }
  onGoBack(){
    //this.navCtrl.pop();
    this.navCtrl.pop();
  }
  // OnGoRoot(){
  //  this.navCtrl.popToRoot();
  //}
}
