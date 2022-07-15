import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";


export function rangeDateValidator(minDate: number, maxDate: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {

  const valueDate = control.value;

  const valid = (minDate <= valueDate && valueDate <= maxDate )
 /* console.log(valueDate, valid);*/

  const errors: Validators = {
    validation : {
      rules : `L'année doit être comprise entre ${minDate} et ${maxDate}`
    }

  }

  return !valid ? errors : null;
}
}
