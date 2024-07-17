import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Stats {
  icon: string;
  value: string;
  description: string;
}

@Component({
  selector: 'app-about-statistics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-statistics.component.html',
  styleUrl: './about-statistics.component.css',
})
export class AboutStatisticsComponent {
  statistics: Stats[] = [
    {
      icon: 'assets/icons/sellers-icon.png',
      value: '10.5k',
      description: 'Sellers active our site',
    },
    {
      icon: 'assets/icons/sale-icon.png',
      value: '33k',
      description: 'Monthly Product Sale',
    },
    {
      icon: 'assets/icons/customers-icon.png',
      value: '45.5k',
      description: 'Customer active in our site',
    },
    {
      icon: 'assets/icons/gross-icon.png',
      value: '25k',
      description: 'Annual gross sale in our site',
    },
  ];
}
