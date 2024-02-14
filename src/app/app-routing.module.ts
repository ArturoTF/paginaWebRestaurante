import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponentComponent } from './main-component/main-component.component';
import { PlatosComponentComponent } from './platos-component/platos-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { CategoriesComponent } from './categories/categories.component';
import { AccoundComponent } from './accound/accound.component';

const routes: Routes = [
  { path: 'MainComponentComponent', component: MainComponentComponent },
  { path: 'PlatosComponentComponent', component: PlatosComponentComponent },
  { path: 'LoginComponentComponent', component: LoginComponentComponent },
  { path: 'RegisterComponentComponent', component: RegisterComponentComponent },
  { path: 'ConfigComponentComponent', component: ConfigurationComponent },
  { path: 'categoriesComponentComponent', component: CategoriesComponent },
  { path: 'accoundComponentComponent', component: AccoundComponent },
  { path: '', redirectTo: 'MainComponentComponent', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
