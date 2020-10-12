import { MustMatch } from '../../../helpers/must-match.validator';
import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { FileUpload } from 'primeng/fileupload';
import { FormBuilder, Validators} from '@angular/forms';
import { BaseComponent } from '../../../lib/base-component';
import 'rxjs/add/operator/takeUntil';
declare var $: any;
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent extends BaseComponent implements OnInit {
  public nguoidungs: any;
  public uploadedFiles: any[] = [];
  public formdata: any;
  submitted = false;
  @ViewChild(FileUpload, { static: false }) file_image: FileUpload;
  constructor(private fb: FormBuilder, injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.formdata = this.fb.group({
      'hoten': ['', Validators.required],
      'ngaysinh': ['', Validators.required],
      'diachi': [''],
      'gioitinh': ['', Validators.required],
      'email': ['', [Validators.required,Validators.email]],
      'taikhoan': ['', Validators.required],
      'matkhau': ['', [this.pwdCheckValidator]],
      'nhaplaimatkhau': ['', Validators.required],
    }, {
      validator: MustMatch('matkhau', 'nhaplaimatkhau')
    });
    this._api.get('/api/users/get-all').takeUntil(this.unsubscribe).subscribe(res => {
      this.nguoidungs = res;
      });
  }

  pwdCheckValidator(control){
    var filteredStrings = {search:control.value, select:'@#!$%&*'}
    var result = (filteredStrings.select.match(new RegExp('[' + filteredStrings.search + ']', 'g')) || []).join('');
    if(control.value.length < 6 || !result){
        return {matkhau: true};
    }
  }

  get f() { return this.formdata.controls; }

  onSubmit(value) {
    this.submitted = true;
    this.getEncodeFromImage(this.file_image).subscribe((data: any): void => {
      let data_image = data == '' ? null : data;
      this._api.post('/api/users/create-user',{image_url:data_image, hoten:value.hoten}).takeUntil(this.unsubscribe).subscribe(res => {
        debugger;
        });
    });
  } 

  Reset() {  
      this.formdata.get('ngaysinh').setValue(this.today);
      this.formdata.get('gioitinh').setValue(this.genders[0]); 
  }

  createModal() {
    setTimeout(() => {
      $('#createUserModal').modal('toggle');
       setTimeout(() => {
        this.formdata.get('ngaysinh').setValue(this.today);
        this.formdata.get('gioitinh').setValue(this.genders[0]); 
      });
    });
  }
  closeModal() {
    $('#createUserModal').closest('.modal').modal('hide');
  }
}
