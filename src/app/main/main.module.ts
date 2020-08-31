import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { MainComponent } from './main.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
export const mainRoutes: Routes = [
  {
      path: '', component: MainComponent,
      children: [
          {
              path: '', component: DashboardComponent
          },
          {
              path: 'user',  loadChildren: () => import('./user/user.module').then(m => m.UserModule)
          },
          {
              path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
          },
      ]
  }
];
@NgModule({
  declarations: [
    SidebarComponent,
    FooterComponent,
    NavbarComponent,
    MainComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(mainRoutes)
  ]
})
export class MainModule { }
