export class ServerPageable<T> {
  content : T[];
  totalPages : number;
  totalElements : number;
  last : boolean;
  size : number;
  numberOfElements : number;
  first : boolean;
  empty : boolean;
}
