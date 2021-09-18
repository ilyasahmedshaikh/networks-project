import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  @Output() getExperiences = new EventEmitter<any>();

  experienceProgramForm: any = FormGroup;
  experiences: any = [];

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formInit();
  }

  formInit(): void {
    this.experienceProgramForm = this.fb.group({
      image: '',
      designation: ['', Validators.required],
      companyName: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
    });
  }

  onChangeExperience() {
    if (this.experienceProgramForm.valid) {
      this.experiences.push(this.experienceProgramForm.value);
      this.experienceProgramForm.reset();

      // send data to parent
      this.getExperiences.emit(this.experiences);
    } else {
      alert('Experiences field is empty!');
    }
  }

}