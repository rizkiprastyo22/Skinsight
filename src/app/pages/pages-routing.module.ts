import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { IngredientsComponent } from "./ingredients/ingredients.component";
import { ProductsComponent } from "./products/products.component";

const routes: Routes = [
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    },
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "ingredients",
        component: IngredientsComponent
    },
    {
        path: "products",
        component: ProductsComponent
    },
    {
        path: "**",
        redirectTo: "home"
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PagesRoutingModule { }


