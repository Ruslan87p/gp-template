import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    data: {
      state: '',
      title: '',
      description: ''
    }
  },
  {
    path: 'careers',
    loadChildren: () => import('./careers/careers.module').then(m => m.CareersModule),
    data: {
      state: '/careers',
      title: '',
      description: ''
    }
  }
  // {
  //   path: 'works',
  //   loadChildren: () => import('./works/works.module').then(m => m.WorksModule),
  //   data: {
  //     state: '/works',
  //     title: '',
  //     description: ''
  //   }
  // },
  // {
  //   path: '404',
  //   loadChildren: () => import('./page404/page404.module').then(m => m.Page404Module),
  //   data: {
  //     state: '/page404',
  //     title: '',
  //     description: ''
  //   }
  // },
  // {
  //   path: '**',
  //   redirectTo: '404'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
