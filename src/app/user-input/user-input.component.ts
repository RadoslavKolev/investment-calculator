import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<{
    initialInvestment: number,
    annualInvestment: number,
    expectedReturn: number,
    duration: number
  }>();

  // input fields always return string values
  investmentCalculatorFormData = {
    inititalInvestment: '0',
    annualInvestment: '0',
    expectedReturn: '5',
    duration: '10'
  };

  onSubmit() {
    // Instead of Number() we could also use the unary plus operator "+" in front of a string
    // Example: +this.investmentCalculatorFormData.inititalInvestment
    this.calculate.emit({
      initialInvestment: Number(this.investmentCalculatorFormData.inititalInvestment),
      annualInvestment: Number(this.investmentCalculatorFormData.annualInvestment),
      expectedReturn: Number(this.investmentCalculatorFormData.expectedReturn),
      duration: Number(this.investmentCalculatorFormData.duration)
    });
  }
}
