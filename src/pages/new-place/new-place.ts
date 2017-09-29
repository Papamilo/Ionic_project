import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NavController } from "ionic-angular";

import { PlacesService } from '../../services/places.service'

@IonicPage()
@Component({
  selector: 'page-new-place',
  templateUrl: 'new-place.html',
})
export class NewPlacePage {

  // En attente au cas ou: public navCtrl: NavController, public navParams: NavParams
  constructor(private placesService: PlacesService, private navCtrl: NavController) {  }

  onAddPlace(value: {title: string}) {
      this.placesService.addPlace(value);
      this.navCtrl.pop();
  }
}
