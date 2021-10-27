import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { AuthComponent } from './auth/auth.component';
import { FlashcardComponent } from './flashcard/flashcard.component';

const routes: Routes = [
  {path: 'home', component:  FlashcardComponent},
  {path: 'login', component: AuthComponent},
  {path: 'register', component: AuthComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
