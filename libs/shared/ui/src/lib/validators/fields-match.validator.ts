import {
  AbstractControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

export function FieldsMatchValidator(
  controlName: string,
  matchingControlName: string
): ValidatorFn {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const { controls } = <FormGroup>formGroup;
    const control = controls[controlName];
    const matchingControl = controls[matchingControlName];
    const fieldsMatch = `'${control}' and '${matchingControl}' fields do not match.`;

    return control.value !== matchingControl.value ? { fieldsMatch } : null;
  };
}
