import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MainServiceService } from 'src/app/services/main-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
  formSubmited: boolean = false;

  constructor(
    private mainService: MainServiceService,
    private toasterService: ToastrService
  ) {}
  contactForm: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[ء-يa-zA-Z ]+$/),
      Validators.minLength(3),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[ء-يa-zA-Z\d ]+$/),
    ]),
  });

  formSubmit(contactInfo: any) {
    this.formSubmited = true;
    if (this.contactForm.valid) {
      this.mainService.sendContactData(contactInfo.value).subscribe({
        next: (res: any) => {
          this.toasterService.success('تم الإرسال بنجاح');
        },
        error: (error: any) => {
          this.toasterService.error('حدثت مشكلة جارى العمل على حلها');
        },
      });
    } else {
      this.toasterService.error(
        'من فضلك قم بإدخال جميع البيانات صحيحة.',
        'خطأ',
        {
          tapToDismiss: false,
          positionClass: 'toast-top-left',
        }
      );
    }
  }
}
