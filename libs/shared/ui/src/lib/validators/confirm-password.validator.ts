import {
  AbstractControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { FieldsMatchValidator } from './fields-match.validator';

/**
 *
 * @param controlName
 * @param matchingControlName
 * @returns ValidatorFn
 * @description overrides the fields match validator to set the error on the confirm formControl field
 * rather than the formGroup for display purposes
 *
 */

export function ConfirmPasswordValidator(
  controlName: string,
  matchingControlName: string
): ValidatorFn {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const fieldsMatchFn = FieldsMatchValidator(
      controlName,
      matchingControlName
    );
    const { controls } = <FormGroup>formGroup;
    const matchingControl = controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors['fieldsMatch']) {
      return null;
    }
    matchingControl.setErrors(fieldsMatchFn(formGroup));

    return null;
  };
}
