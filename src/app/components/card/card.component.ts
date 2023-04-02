import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() item: any = {};
  defaultImage =
    'https://cdn.discordapp.com/attachments/426088981948530700/1090589526105272321/image.png';
}
