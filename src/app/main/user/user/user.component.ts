import { BaseComponent } from './../../../common/base-component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FileUpload } from 'primeng/fileupload';
import { FormBuilder, Validators } from '@angular/forms';
declare var $: any;
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent extends BaseComponent implements OnInit {
  public nguoidungs: any;
  public datetime: Date;
  public selectedGT: any;
  public mota: any;
  public uploadedFiles: any[] = [];
  public formdata:any;
  public form
  @ViewChild(FileUpload, { static: false }) file_image: FileUpload;
  constructor(private fb: FormBuilder) {
    super();
  }

  ngOnInit(): void {
    this.formdata = this.fb.group({
      hoten: this.fb.control(''),
      ngaysinh: this.fb.control(''),
      diachi: this.fb.control(''),
      gioitinh: this.fb.control(''),
      email: this.fb.control('') 
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
  onSubmit() {}

  createModal() {
    setTimeout(() => {
      $('#createUserModal').modal('toggle');
    });
  }
  closeModal() {
    $('#createUserModal').closest('.modal').modal('hide');
  }
}
