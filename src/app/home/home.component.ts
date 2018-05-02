import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemCount: number;
  btnText: string = "Engage weapon";
  weaponText: string = "Enter weapon name";
  weaponList:string[] = [];

  constructor() { }

  ngOnInit() {
    this.updateCount();
  }

  private updateCount() {
    this.itemCount = this.weaponList.length;
  }

  addWeapon() {
    this.weaponList.push(this.weaponText);
    this.updateCount();
    this.weaponText = "Enter weapon name";
  }

}
