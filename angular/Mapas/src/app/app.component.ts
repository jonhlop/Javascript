import { Component, ViewChild, ElementRef } from '@angular/core';

declare var google;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('divMap') divMap: ElementRef;
  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.loadMap(position);
      });
    } else {
      alert('Cambia de navegador');
    }
  }
  loadMap(position) {
    const mapProps = {
      center: new google.maps.LatLng(
        position.coords.latitude,
        position.coords.longitude
      ),
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.satellite,
    };

    const mapa = new google.maps.Map(this.divMap.nativeElement, mapProps);

    //marcadores
    const marker = new google.maps.Marker({
      position: mapProps.center,
      tittle: 'Estoy aqui',
      animation: google.maps.Animation.BOUNCE,
    });
    marker.setMap(mapa);

    
  }
}
