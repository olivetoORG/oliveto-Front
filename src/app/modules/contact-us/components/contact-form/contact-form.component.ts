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
  selectedFile: File | null = null;
  allowedExtensions = ['.png', '.jpg', '.jpeg', '.heic', '.heif', '.hevc '];

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
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern(/[0-9]+/),
      Validators.minLength(9),
    ]),
    message: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[ء-يa-zA-Z\d ]+$/),
    ]),
    file: new FormControl(''),
  });

  public get name() {
    return this.contactForm.get('name');
  }
  public get email() {
    return this.contactForm.get('email');
  }
  public get phone() {
    return this.contactForm.get('phone');
  }
  public get message() {
    return this.contactForm.get('message');
  }

  // onFileSelected(event: any): void {
  //   const file = event.target.files[0] as File;
  //   if (this.isFileExtensionAllowed(file)) {
  //     this.selectedFile = file;
  //     this.contactForm.patchValue({
  //       file: this.selectedFile,
  //     });
  //   } else {
  //     // Display an error message to the user or prevent further action
  //     this.toasterService.error(
  //       'الرجاء إرفاق الملف بالإمتدادات المسموح بها مثل "jpg , jpeg , png , heic"',
  //       'خطأ',
  //       {
  //         tapToDismiss: false,
  //         positionClass: 'toast-top-left',
  //       }
  //     );
  //     this.clearFileInput();
  //   }
  // }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files && input.files.length > 0 ? input.files[0] : null;

    if (file && this.isFileExtensionAllowed(file)) {
      this.selectedFile = file;
      this.contactForm.patchValue({
        file: this.selectedFile,
      });
    } else {
      this.selectedFile = null;
      this.toasterService.error(
        'الرجاء إرفاق الملف بالإمتدادات المسموح بها مثل "jpg , jpeg , png , heic"',
        'خطأ',
        {
          tapToDismiss: false,
          positionClass: 'toast-top-left',
        }
      );
      this.clearFileInput();
    }
  }

  private isFileExtensionAllowed(file: File): boolean {
    if (!file) {
      return false;
    }

    const fileType = file.name.toLowerCase();
    return this.allowedExtensions.some((ext) => fileType.endsWith(ext));
  }

  private clearFileInput(): void {
    // Clear the file input to reset selection
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
    this.selectedFile = null;
    this.contactForm.patchValue({
      file: '',
    });
  }

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
    // console.log(contactInfo.value);
  }
}
