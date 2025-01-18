import { errorMessages } from '@validation-forms/validation-messages';

export const validateBirthDate = (birthDate: string) => {
  const today = Date.now();
  const minDate = Date.parse('1900-01-01');
  const birthDateTimestamp = Date.parse(birthDate);

  if (birthDateTimestamp > today) {
    return errorMessages.birthDate.futureDate;
  }

  if (birthDateTimestamp < minDate) {
    return errorMessages.birthDate.minDate;
  }
};
