import { Component } from '@angular/core';
import { NavController } from "ionic-angular";
import { Geolocation } from '@ionic-native/geolocation';

import { PlacesService } from '../../services/places.service';



@Component({
  selector: 'page-new-place',
  templateUrl: 'new-place.html',
})
export class NewPlacePage {
  location: {lat: number, lng: number} = {lat: 0, lng: 0};

  // En attente au cas ou: public navCtrl: NavController, public navParams: NavParams
  constructor(private geolocation: Geolocation, private placesService: PlacesService, private navCtrl: NavController) {  }

  onAddPlace(value: {title: string}) {
      this.placesService.addPlace({title: value.title, location: this.location});
      this.navCtrl.pop();
  }

  onLocateUser() {
      this.geolocation.getCurrentPosition()
      .then(
        (location) => {
          console.log(this.location)
          this.location.lat = location.coords.latitude;
          this.location.lat = location.coords.longitude;
        }
      )
      .catch(
        (error) => console.log('An error occured', error)
      );
  }



  }




