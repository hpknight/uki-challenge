import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AGM_API_KEY } from './shared/constants/global.constants';
import { IpmapComponent } from './components/ipmap/ipmap.component';

@NgModule({
  declarations: [
    AppComponent,
    IpmapComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: AGM_API_KEY
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [IpmapComponent]
})
export class AppModule { }
