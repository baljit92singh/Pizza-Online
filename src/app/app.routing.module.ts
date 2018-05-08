
import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { PizzaListComponent } from './pizza-list/pizza-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/pizza',
        pathMatch: 'full'
    },
    {
        path: 'pizza',
        component: PizzaListComponent,
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})


export class AppRoutingModule { }