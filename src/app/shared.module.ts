import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CareersComponent } from './careers/careers.component';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { ParallaxDirective } from './directives/parallax.directive';
import { EarthSceneComponent } from './home/earth-scene/earth-scene.component';
import { VolunteersSectionComponent } from './home/volunteers-section/volunteers-section.component';
import { WhatWeDoComponent } from './home/what-we-do/what-we-do.component';
import { TargetsComponent } from './home/what-we-do/targets/targets.component';
import { TargetIconComponent } from './home/what-we-do/target-icon/target-icon.component';
import { TopicsComponent } from './home/topics/topics.component';
import { StoriesComponent } from './home/stories/stories.component';


@NgModule({
  declarations: [
    HomeComponent,
    CareersComponent,
    NavigationComponent,
    EarthSceneComponent,
    ParallaxDirective,
    VolunteersSectionComponent,
    WhatWeDoComponent,
    TargetsComponent,
    TargetIconComponent,
    TopicsComponent,
    StoriesComponent,
  ],
  exports: [
    HomeComponent,
    CareersComponent,
    NavigationComponent,
    EarthSceneComponent,
    ParallaxDirective,
    VolunteersSectionComponent,
    WhatWeDoComponent,
    TargetsComponent,
    TargetIconComponent,
    TopicsComponent,
    StoriesComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
