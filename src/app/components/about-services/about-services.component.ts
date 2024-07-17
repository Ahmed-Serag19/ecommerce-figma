import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Service {
  imageUrl: string;
  serviceTitle: string;
  serviceBody: string;
}

@Component({
  selector: 'app-about-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-services.component.html',
  styleUrls: ['./about-services.component.css'],
})
export class AboutServicesComponent {
  services: Service[] = [
    {
      imageUrl: 'assets/icons/delivery-icon.png',
      serviceTitle: 'FREE AND FAST DELIVERY',
      serviceBody: 'Free delivery for all orders over $140',
    },
    {
      imageUrl: 'assets/icons/customer-service-icon.png',
      serviceTitle: '24/7 CUSTOMER SERVICE',
      serviceBody: 'Friendly 24/7 customer support',
    },
    {
      imageUrl: 'assets/icons/refund-icon.png',
      serviceTitle: 'MONEY BACK GUARANTEE',
      serviceBody: 'We return money within 30 days',
    },
  ];
}
