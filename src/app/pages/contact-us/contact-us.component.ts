import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  contactForm: FormGroup = new FormGroup({
    'email': new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]),
    'message': new FormControl('', [Validators.required, Validators.minLength(10)])
  })
  isFilled = true

  onSubmit() {
    console.log('Submit');
    
    if(this.contactForm.valid) {
      console.log('Valid');
      console.log(this.contactForm.value);
    } else {
      this.isFilled = false
    }
  }

  getErrorMessages(type: string): string {
    if (this.contactForm.get(type)?.hasError('required')) {
      console.log('email required');
      return 'Le champ est obligatoire'
    } else if (this.contactForm.get(type)?.hasError('pattern')) {
      return 'Ce n\'est pas un email'
    } else if (this.contactForm.get(type)?.hasError('required')) {
      return 'Vous devez saisir un message'
    } else if (this.contactForm.get(type)?.hasError('minLength')) {
      // Todo force display
      return 'Votre message doit contenir au moins 10 caractères'
    }
    return ''
  }
}
