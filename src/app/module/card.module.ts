import { NgModule } from "@angular/core";
import { CardComponent } from "../component/card/card.component";

@NgModule({
    declarations:[CardComponent],
    exports:[CardComponent] 
})
export class CardModule{

}
/**
 *     declarations:[CardComponent],
    exports:[CardComponent] 

    this means that this compoenet should be availabel to all who uses this CardModule
 */