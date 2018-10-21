import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild('map') mapRef: ElementRef;
  private map: google.maps.Map;
  private mapOptions: google.maps.MapOptions;

  constructor() {}

  private initMap(): void {    
    const latLng: google.maps.LatLng = new google.maps.LatLng(-19.919157, -43.938547);
    this.mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeControl: false,
      fullscreenControl: false,
      streetViewControl: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      gestureHandling: 'cooperative'
    };
    this.map = new google.maps.Map(this.mapRef.nativeElement, this.mapOptions);

    new google.maps.Marker({
      position: new google.maps.LatLng(-19.919157, -43.938547),
      map: this.map,
    });

  };

  ngOnInit() {
    this.initMap();
  }

}
