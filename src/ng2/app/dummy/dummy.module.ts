import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DummyComponent } from './dummy.component';
import { Routes, RouterModule } from '@angular/router';
import { AppleComponent } from './apple/apple.component';
import { BananaComponent } from './banana/banana.component';
import { PeachComponent } from './peach/peach.component';

const routes: Routes = [
  {
    path: 'index',
    component: DummyComponent,
    children: [
      {
        path: 'apple',
        component: AppleComponent
      },
      {
        path: 'banana',
        component: BananaComponent
      },
      {
        path: 'peach',
        component: PeachComponent
      },
      // {
      //   path: '',
      //   redirectTo: 'apple',
      //   pathMatch: 'full'
      // }
    ]
  },
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    DummyComponent,
    AppleComponent,
    BananaComponent,
    PeachComponent
  ],
  declarations: [
    DummyComponent,
    AppleComponent,
    BananaComponent,
    PeachComponent
  ]
})
export class DummyModule { }
