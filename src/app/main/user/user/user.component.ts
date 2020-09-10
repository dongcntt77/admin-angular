import { MustMatch } from '../../../helpers/must-match.validator';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FileUpload } from 'primeng/fileupload';
import { FormBuilder, Validators} from '@angular/forms';
import { BaseComponent } from '../../../common/base-component';
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
  constructor(private fb: FormBuilder) {
    super();
  }

  ngOnInit(): void {
    this.formdata = this.fb.group({
      hoten: ['', Validators.required],
      ngaysinh: [this.today, Validators.required],
      diachi: [''],
      gioitinh: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      taikhoan: ['', Validators.required],
      matkhau: ['', [this.pwdCheckValidator]],
      nhaplaimatkhau: ['', Validators.required],
    }, {
      validator: MustMatch('matkhau', 'nhaplaimatkhau')
    });

    this.nguoidungs = [
      {
        taikhoa: 'dongnh',
        hoten: 'Nguyễn Hữu Đông',
        mota: 'Quản trị dự án',
        trangthai: '',
      },
      {
        taikhoa: 'duongtran',
        hoten: 'Trần Đỗ Hồng Dương',
        mota: 'Thành viên',
        trangthai: '',
      },
    ];
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
    let xx = value;
    debugger;
    this.getEncodeFromImage(this.file_image).subscribe((data: any): void => {
      let data_image = data == '' ? null : data;
      //this.closeModal();
    });
  }

  createModal() {
    setTimeout(() => {
      $('#createUserModal').modal('toggle');
    });
  }
  closeModal() {
    $('#createUserModal').closest('.modal').modal('hide');
  }
}
