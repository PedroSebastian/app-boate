export class Event {

  private _id?: string;
  private _date: Date;
  private _description: string;
  private _facebook: string;
  private _flyer: string;
  private _hour: string;
  private _title: string;

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get facebook(): string {
    return this._facebook;
  }

  set facebook(value: string) {
    this._facebook = value;
  }

  get flyer(): string {
    return this._flyer;
  }

  set flyer(value: string) {
    this._flyer = value;
  }

  get hour(): string {
    return this._hour;
  }

  set hour(value: string) {
    this._hour = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

}
