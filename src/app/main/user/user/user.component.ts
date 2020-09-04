import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  nguoidungs = [
    {taikhoa:'dongnh',hoten:'Nguyễn Hữu Đông',mota:'Quản trị dự án',trangthai:''},
    {taikhoa:'duongtran',hoten:'N	Trần Đỗ Hồng Dương',mota:'Thành viên',trangthai:''}
  
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
