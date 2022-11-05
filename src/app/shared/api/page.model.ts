export class Page<T> {
  constructor(
    public content : T[],
    public size : number,
    public totalElements : number
  ) {};
}
