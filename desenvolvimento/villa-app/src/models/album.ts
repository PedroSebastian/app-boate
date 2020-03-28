import { Event } from "./event";

export class Album {

  private _album_desc: string;
  private _album_name: string;
  private _event_date: Date;
  private _photos: string[];
  private _thumbs: string[];
  private _album_id: string;
  private _local: string;

  get album_desc(): string {
    return this._album_desc;
  }

  set album_desc(value: string) {
    this._album_desc = value;
  }

  get album_name(): string {
    return this._album_name;
  }

  set album_name(value: string) {
    this._album_name = value;
  }

  get event_date(): Date {
    return this._event_date;
  }

  set event_date(value: Date) {
    this._event_date = value;
  }

  get photos(): string[] {
    return this._photos;
  }

  set photos(value: string[]) {
    this._photos = value;
  }

  get thumbs(): string[] {
    return this._thumbs;
  }

  set thumbs(value: string[]) {
    this._thumbs = value;
  }

  get album_id(): string {
    return this._album_id;
  }

  set album_id(value: string) {
    this._album_id = value;
  }

  get local(): string {
    return this._local;
  }

  set local(value: string) {
    this._local = value;
  }

}
