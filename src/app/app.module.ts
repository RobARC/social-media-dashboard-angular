import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../components/header/header.component';
import { CardComponent } from '../components/card/card.component';
import { CardSmallComponent } from '../components/card-small/card-small.component';
import { CardListComponent } from '../components/card-list/card-list.component';
import { SwitchComponent } from '../components/switch/switch.component';
import { CardSmallListComponent } from '../components/card-small-list/card-small-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    CardSmallComponent,
    CardListComponent,
    SwitchComponent,
    CardSmallListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
