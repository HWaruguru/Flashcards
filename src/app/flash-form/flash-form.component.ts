import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../flashcard-service/auth.service';

@Component({
  selector: 'app-flash-form',
  templateUrl: './flash-form.component.html',
  styleUrls: ['./flash-form.component.css']
})
export class FlashFormComponent implements OnInit {

  isSubmitting: boolean = false;
  authForm: FormGroup;
  error: string = ""

  constructor(private fb: FormBuilder, private authService: AuthService, private route: Router) {
    this.authForm = this.fb.group({
      'title': ['', Validators.required],
      'notes': ['', Validators.required],
      'subject': ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  async addFlash(title: string, notes: string, subject: string, dateCreated: Date,dateUpdated: Date ) {
    let res: any = await this.authService.addFlash(title, notes, subject, dateCreated, dateUpdated)
    if (res.posted) {
      this.route.navigate(['/home'])
    }
    else {
      this.error = res
      this.isSubmitting = false;
      this.route.navigate(['/add-flash'])
    }
  }


  submitForm() {
    this.isSubmitting = true;

    let flashcard = this.authForm.value;
    this.addFlash(  flashcard.title, flashcard.notes,  flashcard.subject, new Date(), new Date())
  }

}
