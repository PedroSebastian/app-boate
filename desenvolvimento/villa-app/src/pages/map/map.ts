import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  info: Info = new Info('Villa Club', 'Rua Tiradentes', '3002', 'Centro', 'Uruguaiana', 'RS');

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
  }

  closeModal(): void {
    this.viewCtrl.dismiss();
  }

}

export class Info {

  nome: string;
  logradouro: string;
  numero: string;
  bairro: string;
  cidade: string;
  estado: string
  mapa: string;

  endereco: string;

  constructor(nome: string, logradouro: string, numero: string, bairro: string, cidade: string, estado: string) {
    this.nome = nome;
    this.logradouro = logradouro;
    this.numero = numero;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;
    this.mapa = this.getMapa();
  }

  private getEndereco(): string {
    this.endereco = this.logradouro + ', ' + this.numero + ' - ' + this.bairro + ', ' + this.cidade + ' - ' + this.estado;
    return this.endereco;
  }

  private getMapa() {
    return 'https://maps.googleapis.com/maps/api/staticmap?zoom=15&size=400x500&markers=color:red|' + this.getEndereco() + '&key=AIzaSyAXF0m6mM_Gp6NYnN1Xr4VN5kYcjmy3x0o';
  }

}
