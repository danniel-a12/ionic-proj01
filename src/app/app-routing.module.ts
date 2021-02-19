import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


// 1. Importar dependências
import { AngularFireAuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

// 2. Define redirecionamentos
const toLogin = () => redirectUnauthorizedTo(['/login'])
const toLogged = () => redirectLoggedInTo(['/home'])

const routes: Routes = [

  // 1) Define a página inicial como 'home'
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./pages/news/news.module').then(m => m.NewsPageModule)
  },
  {
    path: 'contacts',
    loadChildren: () => import('./pages/contacts/contacts.module').then(m => m.ContactsPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then(m => m.AboutPageModule)
  },

  // 2) Se uma rota não existe, exibe 'Erro 404'

  {
    path: 'view/:id',
    loadChildren: () => import('./pages/view/view.module').then(m => m.ViewPageModule),

    canActivate: [AngularFireAuthGuard], data: { authGuardPipe: toLogin }


  },

  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule),
    canActivate: [AngularFireAuthGuard], data: { authGuardPipe: toLogged }




  },
  {
    path: 'logout',
    loadChildren: () => import('./pages/logout/logout.module').then(m => m.LogoutPageModule),
    canActivate: [AngularFireAuthGuard], data: { authGuardPipe: toLogin }
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfilePageModule),

    canActivate: [AngularFireAuthGuard], data: { authGuardPipe: toLogin }

  },

  {
    path: '**',
    loadChildren: () => import('./pages/e404/e404.module').then(m => m.E404PageModule)
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
