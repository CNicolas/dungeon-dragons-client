import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material";
import { FlexModule } from "@angular/flex-layout";
import { CommonModule } from "@angular/common";
import { PipesModule } from "../../shared/pipes/pipes.module";
import { PlayerAttacksComponent } from "./player-attacks.component";

const components = [PlayerAttacksComponent]

@NgModule({
    declarations: [...components],
    imports: [
        CommonModule,
        FlexModule,
        MatButtonModule,
        PipesModule
    ]
})
export class PlayerCharacteristicsModule {
}