export class Radio {

  private _url: string;
  private _enabled: boolean;

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }

  get enabled(): boolean {
    return this._enabled;
  }

  set enabled(value: boolean) {
    this._enabled = value;
  }

}
