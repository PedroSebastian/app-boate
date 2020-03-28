export class Banner {

  private _src: string;
  private _thumb: string;

  get src(): string {
    return this._src;
  }

  set src(value: string) {
    this._src = value;
  }

  get thumb(): string {
    return this._thumb;
  }

  set thumb(value: string) {
    this._thumb = value;
  }

}
