import { Watch } from "./Model/Watch";
import { Error } from "./Model/Error";

export class Validator {
  static watchPostError(watch: Watch): Error[] {
    let errors: Error[] = [];

    if(!watch) {
      errors.push(
        new Error("watch", "The car object must be valid.")
      );
      return errors;
    }

    if(!watch.price){
      errors.push(
        new Error("watch.price", "The car price is required.")
      );
    }

    if(watch.price < 1){
      errors.push(
        new Error("watch.price", "The car price must be greater than 0.")
      );
    }

    if(!watch.brand){
      errors.push(
        new Error("watch.brand", "The car brand is required.")
      );
    }

    if(!watch.model){
      errors.push(
        new Error("watch.model", "The car model is required.")
      );
    }

    if(!watch.gender){
      errors.push(
        new Error("watch.gender", "The car transmission is required.")
      );
    }

    if(!watch.movement){
      errors.push(
        new Error("watch.movement", "The car fuel is required.")
      );
    }

    if(!watch.caseMaterial){
      errors.push(
        new Error("watch.caseMaterial", "The car design is required.")
      );
    }

    return errors;
  }
}
