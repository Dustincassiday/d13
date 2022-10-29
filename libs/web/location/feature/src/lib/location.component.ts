import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewChild,
} from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { Location } from '@d13/shared/data-access';
import { LocationFacade, LocationViewmodel } from '@d13/web/location/shared';
import { Observable } from 'rxjs';

@Component({
  selector: 'd13-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationComponent {
  public vm$: Observable<LocationViewmodel>;
  public mapCenter: google.maps.LatLngLiteral = { lat: 37.0902, lng: -95.7129 };
  public markerOptions: google.maps.MarkerOptions = { draggable: false };
  public zoom = 3.6;
  public mapOptions: google.maps.MapOptions = {
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 2,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
  };

  @ViewChild(MapInfoWindow) infoWindow!: MapInfoWindow;

  constructor(private readonly _facade: LocationFacade) {
    this.vm$ = _facade.vm$;
    this._facade.getLocationsByPostalCode('23233');
  }

  public setLocation(location: Location) {
    this.zoom = 14;
    this.mapCenter = location.coordinates;
  }

  public openInfoWindow(marker: MapMarker) {
    this.infoWindow.open(marker);
  }
}
