import { AbstractControl, ValidationErrors } from "@angular/forms";

export function emailValidator(control: AbstractControl): ValidationErrors | null {
  const emailRegex = RegExp('^([a-z0-9._\-])+@([a-z])+.([a-z]){2}$');
  const valid = emailRegex.test(control.value);

  const errors = {
    validation : {
      rules : "L'email n'est pas conforme"
    }
  }

  return !valid ? errors : null;
}
