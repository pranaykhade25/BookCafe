import { NgModule } from "@angular/core";
import { RouterModule , Routes } from "@angular/router";
import { CheckoutComponent } from "./components/checkout/checkout.component";
import { CartComponent } from "./components/cart/cart.component";
import { ProductsComponent } from "./components/products/products.component";
import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from "./components/home/home.component";
import { BestComponent } from "./components/best/best.component";
import { ContactUsComponent } from "./components/contact-us/contact-us.component";

import { EditProfileComponent } from "./components/edit-profile/edit-profile.component";
import { RegisterComponent } from './components/register/register.component';
import { ContactComponent } from "./components/contact/contact.component";
import { VideoComponent } from "./components/video/video.component";



const routes: Routes = [
    {path:'', redirectTo:'home' , pathMatch:'full'},
    {path:'product',component:ProductsComponent},
    {path:'cart',component:CartComponent},
    {path:'checkout',component:CheckoutComponent},
    {path: 'login',component:LoginComponent},
    {path: 'home',component:HomeComponent},
    {path: 'best',component:BestComponent},
    {path: 'contact',component:ContactUsComponent},
    {path:'video',component:VideoComponent},
    {path: 'books' ,component:EditProfileComponent},
    {path: 'register',component:RegisterComponent},
    {path:'contacts',component:ContactComponent}
    

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }

