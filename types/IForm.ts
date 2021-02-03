export interface FormELement {
  type : string,
  required? : boolean,
  name? : string,
  slug : string,
  placeholder? : string,
  styles? : Object,
  value? : string | number | null | undefined
  // addData? : Object
}