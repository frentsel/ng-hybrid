import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';
import { RouterModule, UrlHandlingStrategy } from '@angular/router';

import { UpgradeModule, downgradeComponent } from '@angular/upgrade/static';
import { AppComponent } from './app.component';
import { Ng2DemoComponent } from 'ng2/app/ng2-demo.component';
import { phoneServiceProvider } from 'ng2/app/phone.service';

import {
  PiCheckboxModule,
  PiCheckboxComponent,

  PiMultipleSelectModule,
  PiMultipleSelectComponent,

  PiScrollWatcherModule
} from '@sophos/ngx-pi-components';
import { PopoverModule } from 'ngx-bootstrap';

declare var angular: any;

export class CustomHandlingStrategy implements UrlHandlingStrategy {
  shouldProcessUrl(url) {
    return url.toString().startsWith('/ng2-route') || url.toString() == '/'
  }
  extract(url) { return url; }
  merge(url, whole) { return url; }
}

angular.module('phonecatApp')
  .directive(
    'ng2Demo',
    downgradeComponent({component: Ng2DemoComponent})
  );

angular.module('phonecatApp').directive(
    'hui',
    downgradeComponent({
      component: PiCheckboxComponent
    })
  );

angular.module('phonecatApp').directive(
    'multipleSelect',
    downgradeComponent({
      component: PiMultipleSelectComponent
    })
  );

@NgModule({
  declarations: [
    AppComponent,
    Ng2DemoComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule,

    PiCheckboxModule,
    PiMultipleSelectModule,
    PiScrollWatcherModule.forRoot(),
    PopoverModule.forRoot(),

    
    RouterModule.forRoot([
      {
        path: 'ng2-route',
        loadChildren: './dummy/dummy.module#DummyModule'
      },
      // {
      //   path: '',
      //   pathMatch: 'full',
      //   redirectTo: 'ng2-route'
      // },
    ],
    {
      useHash: true,
      // enableTracing: true
    }
    )
  ],
  entryComponents: [
    PiMultipleSelectComponent,
    PiCheckboxComponent,
    Ng2DemoComponent // Don't forget this!!!
  ],
  providers: [
    phoneServiceProvider,
    { provide: UrlHandlingStrategy, useClass: CustomHandlingStrategy }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
/*
  constructor(private upgrade: UpgradeModule) { }
  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, ['phonecatApp'], { strictDi: true });
  }
*/
}

