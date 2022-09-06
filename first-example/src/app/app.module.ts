import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import  { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { Comp2Component } from './comp2/comp2.component';
import { CustomerComponent } from './customer/customer.component';
import { SupplierComponent } from './supplier/supplier.component';
import { AssociateComponent } from './associate/associate.component';
import { LoginModule } from './login/login.module';
import { Twowaybinding2Component } from './twowaybinding2/twowaybinding2.component';
import { DirectivesdemoComponent } from './directivesdemo/directivesdemo.component';
import { WordcountPipe } from './wordcount.pipe';
import { FilesizePipe } from './filesize.pipe';
import { BookComponent } from './books/book/book.component';
import { BooksModule } from './books/books.module';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    Comp2Component,
    CustomerComponent,
    SupplierComponent,
    AssociateComponent,
    Twowaybinding2Component,
    DirectivesdemoComponent,
    WordcountPipe,
    FilesizePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LoginModule,
    BooksModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
