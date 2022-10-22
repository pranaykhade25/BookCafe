import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  fileToUpload:File |null=null;
  file: File|null=null;
  loading: boolean = false;
  name:string="";
  email:string="";
  contact:string="";
  // handleFileInput(files:FileList){
  //   this.fileToUpload=files.item(0);
  // }
  profileInfo:String[]=[];  
  onChange(event:any) {
    this.file = event.target.files[0];
  }
  
  onUpload() {
    this.loading = !this.loading;
    console.log(this.file);
    // this.fileUploadService.upload(this.file).subscribe(
    //     (event: any) => {
    //         if (typeof (event) === 'object') {

    //             // Short link via api response
    //             this.shortLink = event.link;

    //             this.loading = false; // Flag variable 
    //         }
    //     }
    // )};
  };
  onFormSubmit(userForm:NgForm){
    console.log('Name:'+userForm.controls['name'].value)
    console.log('Email:'+userForm.controls['email'].value)
    console.log('Contact:'+userForm.controls['contact'].value) 
    this.name=userForm.controls['name'].value;
    this.email=userForm.controls['email'].value;
    this.contact=userForm.controls['contact'].value;
  }
}
