import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { HomeComponent } from './components/home/home.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { LoginComponent } from './components/login/login.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { SliderComponent } from './components/slider/slider.component';
import { ChildComponent } from './components/child/child.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment.prod';
import { AngularFireModule } from '@angular/fire/compat';
import { RegisterComponent } from './components/register/register.component';
import { ItemsComponent } from './items/items.component';
import { ItemComponent } from './items/item/item.component';
import { ItemListComponent } from './items/item-list/item-list.component';
import { ContactComponent } from './components/contact/contact.component';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatRippleModule} from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BestComponent } from './components/best/best.component';
import { VideoComponent } from './components/video/video.component';



@NgModule({
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatTabsModule,
  ],
  declarations: [

  ],
  imports: [BrowserAnimationsModule],
})
export class MaterialModule {};
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    CartComponent,
    FooterComponent,
    CheckoutComponent,
    BestComponent,
    HomeComponent,
    ContactUsComponent,
    LoginComponent,
    EditProfileComponent,
    SliderComponent,
    ChildComponent,
    RegisterComponent,
    ItemsComponent,
    ItemComponent,
    ItemListComponent,
    ContactComponent,
    VideoComponent
   
      
   
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    MatFormFieldModule,
    MatTabsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
