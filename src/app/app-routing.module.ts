import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { FormComponent } from './form/form.component';
import { HelloComponent } from './hello.component';

const routes: Routes = [
  {
    path: 'home',
    component: AppComponent,
  },
  {
    path: 'hello',
    component: HelloComponent
  },
  {
    path: 'form',
    component: FormComponent
  }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            enableTracing: false, // toogle for debug route
            useHash: true,
            scrollPositionRestoration: 'enabled',
            preloadingStrategy: PreloadAllModules,
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}