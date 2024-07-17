import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface AboutTeam {
  imageUrl: string;
  name: string;
  position: string;
  socials: {
    twitter: string;
    instagram: string;
    linkedin: string;
  };
}
@Component({
  selector: 'app-about-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-team.component.html',
  styleUrl: './about-team.component.css',
})
export class AboutTeamComponent {
  ourTeam: AboutTeam[] = [
    {
      imageUrl: 'assets/images/team-tom-image.png',
      name: 'Tom Cruise',
      position: 'Founder & Chairman',
      socials: {
        twitter: 'https://twitter.com/tomcruise',
        instagram: 'https://instagram.com/tomcruise',
        linkedin: 'https://linkedin.com/in/tomcruise',
      },
    },
    {
      imageUrl: 'assets/images/team-emma-image.png',
      name: 'Emma Watson',
      position: 'Managing Director',
      socials: {
        twitter: 'https://twitter.com/emmawatson',
        instagram: 'https://instagram.com/emmawatson',
        linkedin: 'https://linkedin.com/in/emmawatson',
      },
    },
    {
      imageUrl: 'assets/images/team-will-image.png',
      name: 'Will Smith',
      position: 'Product Designer',
      socials: {
        twitter: 'https://twitter.com/willsmith',
        instagram: 'https://instagram.com/willsmith',
        linkedin: 'https://linkedin.com/in/willsmith',
      },
    },
  ];
}
