import { CanDeactivateFn } from '@angular/router';
import { ContactComponent } from '../pages/contact/contact.component';

export const contactGuard: CanDeactivateFn<ContactComponent> = (component, currentRoute, currentState, nextState) => {
  if (!component.isAllowedToLeave) {
    alert("You're not allowed to leave this page until you register your email");
    return false;
  }

  return true;
};
