import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('weaponList', [
      transition('* => *', [
        query(':enter', style({opacity:0}),{optional: true}),
        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform:'translateY(-75%)', offset: 0}),
            style({opacity:.5, transform:'translateY(35px)', offset: .3}),
            style({opacity: 1, transform:'translateY(0)', offset: 1}),
          ]))
        ]), {optional: true}),

        query(':leave', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 1, transform:'translateY(0)', offset: 0}),
            style({opacity:.5, transform:'translateY(35px)', offset: .3}),
            style({opacity: 0, transform:'translateY(-75%)', offset: 1}),
          ]))
        ]), {optional: true}),

      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  itemCount: number;
  btnText: string = "Engage weapon";
  weaponText: string = "Enter weapon name";
  weaponList = ['Laser', 'Machine Gun', 'Smart bomb'];

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

  removeWeapon(i: number) {
    this.weaponList.splice(i,1);
  }

}
