import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './image.component.html',
  styleUrl: './image.component.css'
})
export class ImageComponent {
  logoUrl = '../../../favicon.ico';
  logoAlt = 'Angular logo';
  username = 'NicoJung';
}
