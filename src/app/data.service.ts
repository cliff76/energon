import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private weapons = new BehaviorSubject<any>(['Guided missile', 'Laser cannon', 'Pile Driver']);
  public weapon = this.weapons.asObservable();
  constructor() { }

  changeWeapon(weapon) {
    this.weapons.next(weapon);
  }

}
