import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ClientInfoComponent } from './client-info/client-info.component';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'client-info', component:ClientInfoComponent},
  {path: 'about', component:AboutComponent},
  {path: '', redirectTo: '/client-info', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ClientInfoComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
