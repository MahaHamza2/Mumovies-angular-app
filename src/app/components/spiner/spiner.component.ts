import { Component } from '@angular/core';
import { LoaderService } from 'src/app/loader.service';

@Component({
  selector: 'app-spiner',
  templateUrl: './spiner.component.html',
  styleUrls: ['./spiner.component.css'],
})
export class SpinerComponent {
  constructor(public loader: LoaderService) {}
}
