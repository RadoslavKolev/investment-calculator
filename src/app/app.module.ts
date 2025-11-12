import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

// Components
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";

// Modules
import { UserInputModule } from "./user-input/user-input.module";

@NgModule({
  declarations: [AppComponent, HeaderComponent, InvestmentResultsComponent],
  imports: [BrowserModule, UserInputModule],
  bootstrap: [AppComponent],
})
export class AppModule {}