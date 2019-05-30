import { Component, Input } from '@angular/core';
import { IEvent } from './shared';

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styles: [
    `
      .thumbnail {
        min-height: 210px;
      }
      .pad-left {
        margin-left: 10px;
      }
      .well div {
        color: #bbb;
      }
      .green {
        color: green !important;
      }
      .bold {
        font-weight: bold;
      }
    `
  ]
})
export class EventThumbnailComponent {
  @Input() event: IEvent;

  getStartTimeClass() {
    if (this.event && this.event.time === '8:00 am') return ['bold', 'green'];
    return [];
  }
}
