import { NgModule } from "@angular/core";
import { Routes, RouterModule, Router } from "@angular/router";
import { CardcollectComponent } from "./cardcollect/cardcollect.component";

const routes : Routes = [
    {path:"collection",component: CardcollectComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents =[CardcollectComponent]