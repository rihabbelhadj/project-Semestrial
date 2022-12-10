import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import {BrowserModule} from "@angular/platform-browser";
import { CalendarrComponent } from './calendarr/calendarr.component';
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    BrowserModule,
    MatIconModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    CalendarrComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
