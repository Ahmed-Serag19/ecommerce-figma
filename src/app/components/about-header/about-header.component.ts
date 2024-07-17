import { Component } from '@angular/core';

@Component({
  selector: 'app-about-header',
  standalone: true,
  imports: [],
  templateUrl: './about-header.component.html',
  styleUrl: './about-header.component.css',
})
export class AboutHeaderComponent {
  imagePath = 'assets/images/about-us.png';
}
