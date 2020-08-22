import {Routes} from '@angular/router';
import { CareersComponent } from './careers.component';

export const careerRoutes: Routes = [
  {
    path: '',
    component: CareersComponent,
    data: {
      title: 'TITLE',
      description: 'DESCRIPTION'
    }
  }
] as Routes;
