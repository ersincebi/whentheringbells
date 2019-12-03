import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListeComponent } from './dersListesi/liste.component';
import { LoginComponent } from './login/login.component';
import { DersEkleComponent } from './dersListesi/ders-ekle/ders-ekle.component';
import { DersSilComponent } from './dersListesi/ders-sil/ders-sil.component';
import { DersInfoComponent } from './dersListesi/ders-info/ders-info.component';
import { DerseEkleComponent } from './dersListesi/derse-ekle/derse-ekle.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'liste',component:ListeComponent},
  {path:'dersEkle', component:DersEkleComponent},
  {path:"dersSil", component:DersSilComponent},
  {path:"dersInfo", component:DersInfoComponent},
  {path:"derseEkle", component:DerseEkleComponent},
  {path:"app", component:AppComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }