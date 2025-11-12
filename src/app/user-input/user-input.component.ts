import { Component, inject, signal } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  private readonly investmentService = inject(InvestmentService);

  // input fields always return string values
  investmentCalculatorFormData = signal({
    inititalInvestment: '0',
    annualInvestment: '0',
    expectedReturn: '5',
    duration: '10',
  });

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: Number(this.investmentCalculatorFormData().inititalInvestment),
      annualInvestment: Number(this.investmentCalculatorFormData().annualInvestment),
      expectedReturn: Number(this.investmentCalculatorFormData().expectedReturn),
      duration: Number(this.investmentCalculatorFormData().duration),
    });

    // Reset form after submission
    this.investmentCalculatorFormData.set({
      inititalInvestment: '0',
      annualInvestment: '0',
      expectedReturn: '5',
      duration: '10',
    });
  }
}
