import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Location } from '@d13/shared/data-access';

@Component({
  selector: 'd13-location-card',
  templateUrl: './location-card.component.html',
  styleUrls: ['./location-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationCardComponent {
  @Input() location!: Location;
  @Output() selected = new EventEmitter<Location>();
}
