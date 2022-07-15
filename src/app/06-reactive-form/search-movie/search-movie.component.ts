import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { isRequiredValidator } from 'src/app/validators/is-required-validator';
import { rangeDateValidator } from 'src/app/validators/date-validator';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss']
})
export class SearchMovieComponent implements OnInit {

  public typesList: string[] = ['film', 'série', 'episode'];
  public fichesList: string[] = ['complète', 'courte'];
  public currentYear: number = new Date().getFullYear();
  public isSubmitted: boolean = false;
  public isValid: boolean = true;

  movieForm: FormGroup = this.formBuilder.group({
    credentials : this.formBuilder.group({
      identifiant : ['', Validators.required],
      title : ['', Validators.required]
    },{
      validators :
      isRequiredValidator('identifiant', 'title')
    }
    ),
    type : [''],
    year : ['', rangeDateValidator(1900, this.currentYear)],
    fiche : ['']
  });

  searchQuery = [];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.defaultValues();
  }

  defaultValues(): void {
    this.movieForm.get('type')?.setValue('série');
    this.movieForm.get('fiche')?.patchValue('courte');
  }

  onSubmit(){
    if (this.isValid) {
      this.isSubmitted = true
      console.log(JSON.stringify(this.movieForm.value))
    } else {
      alert('tous les champs ne sont pas remplis')
    }
  }

}
