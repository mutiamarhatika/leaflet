import { Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  map!: L.Map;
  baseMaps!: any;

  constructor() {}
  ngOnInit() {
  }

  ionViewDidEnter() {
    this.map = L.map('mapId').setView([38.80754415226377, -77.04755011566567], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(this.map);

  this.baseMaps = {
    'Topo': L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://opentopomap.org/about" target="_blank">OpenTopoMap</a> contributors',
    }),
    'Satellite': L.tileLayer('https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
      maxZoom: 20,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
      attribution: '&copy; <a href="https://maps.google.com/">Google Maps</a>'
    }),

    'OSM': L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }),
  };

  this.baseMaps['OSM'].addTo(this.map);

    L.control.layers(this.baseMaps).addTo(this.map);
  
  // Menambahkan marker
  const marker = new L.Marker([38.80754415226377, -77.04755011566567]);
  
  // Menambahkan marker ke map
  this.map.addLayer(marker);
  
  // Menambahkan Pop up
  marker.bindPopup('This is Pop up');
  
  }
}
