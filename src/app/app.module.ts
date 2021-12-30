import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import {FormsModule} from '@angular/forms';
import { ViewComponent } from './view/view.component';
import { DeleteComponent } from './delete/delete.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CreateComponent,
    ListComponent,
    ViewComponent,
    DeleteComponent,
    EditComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        BrowserAnimationsModule,
        MatButtonModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
