import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";


export function isRequiredValidator(identifiant: string, title: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {

  const valueId = control.get('identifiant');
  const valueTitle = control.get('title');

  const valid = (valueId?.value != '' || valueTitle?.value != '')
 /* console.log(valueId?.value);
  console.log(valueTitle?.value);*/

  const errors: Validators = {
    isRequired : {
      rules : "Le titre ou l'identifiant est requis"
    }
  }

  return !valid ? errors : null;
}
}
