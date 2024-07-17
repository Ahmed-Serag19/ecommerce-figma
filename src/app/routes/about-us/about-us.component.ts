import { Component } from '@angular/core';
import { AboutStatisticsComponent } from '../../components/about-statistics/about-statistics.component';
import { AboutHeaderComponent } from '../../components/about-header/about-header.component';
import { AboutTeamComponent } from '../../components/about-team/about-team.component';
import { AboutServicesComponent } from '../../components/about-services/about-services.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [
    AboutHeaderComponent,
    AboutStatisticsComponent,
    AboutTeamComponent,
    AboutServicesComponent,
  ],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css',
})
export class AboutUsComponent {}
