import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CreateProfileService } from 'src/app/core/http/services/create-profile/create-profile.service';

@Component({
  selector: 'app-add-edit-profile',
  templateUrl: './add-edit-profile.component.html',
  styleUrls: ['./add-edit-profile.component.scss']
})
export class AddEditProfileComponent implements OnInit {

  selected: any = [];
  users: any = [];
  programForm: any = FormGroup;

  // image-uploader
  preview: any = "";
  imageUploaded: boolean = false;
  isReset: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private createProfileSrv: CreateProfileService
  ) { }

  ngOnInit(): void {
    this.formInit();

    this.users = [
      {
        id: 1,
        image: "https://blog.hootsuite.com/wp-content/uploads/2020/05/how-to-use-facebook-groups.jpg",
        name: "UWI Students Union"
      },
      {
        id: 2,
        image: "https://2c6disor5j62kph211fg7v42-wpengine.netdna-ssl.com/wp-content/uploads/2020/12/Bartyed-group-tutoring-800x600-1.jpg",
        name: "UWI Carnival Commitee"
      },
      {
        id: 3,
        image: "https://i.pinimg.com/originals/1c/44/e4/1c44e4f394c9594f9bf6452020a64b65.jpg",
        name: "Gaming Thunders"
      },
      {
        id: 4,
        image: "https://pubmatic.com/wp-content/uploads/2018/12/BLOG-ASSETS-In-App-Monetization-Partner-750x417.jpg",
        name: "Development Hard"
      },
      {
        id: 5,
        image: "https://blog.hootsuite.com/wp-content/uploads/2020/05/how-to-use-facebook-groups.jpg",
        name: "UWI Students Union"
      },
      {
        id: 6,
        image: "https://2c6disor5j62kph211fg7v42-wpengine.netdna-ssl.com/wp-content/uploads/2020/12/Bartyed-group-tutoring-800x600-1.jpg",
        name: "UWI Carnival Commitee"
      },
      {
        id: 7,
        image: "https://i.pinimg.com/originals/1c/44/e4/1c44e4f394c9594f9bf6452020a64b65.jpg",
        name: "Gaming Thunders"
      },
    ]

    this.selected = this.createProfileSrv.getInfo('interest');
  }

  formInit() {
    this.programForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  getOnItemClick(event) {
    if(event == true) {
      this.router.navigateByUrl('profile/view-profile');
    }
  }

  goProfessionalAbout() {
    let data = {
      ...this.programForm.value,
      image: this.preview
    };

    this.createProfileSrv.setInfo('basic', data);
    this.router.navigateByUrl('/profile/professional-about-profile');
  }

  onImagePreview(event) {
    this.preview = event.preview;
    this.imageUploaded = event.imageUploaded;

    // getting url of saved image from firebase storage bucket
    console.log(this.preview);
  }

}
