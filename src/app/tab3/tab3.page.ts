import { Component } from '@angular/core';
import { IAtor } from '../model/IAtores'
import { AlertController, ToastController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public alertController: AlertController, public toastController: ToastController, public router: Router) {}

  exibirAtor(ator: IAtor){
    const navigationExtras: NavigationExtras = {state:{paramAtor:ator}};
    this.router.navigate(['ator-detalhe'],navigationExtras);
  }

  listaAtores: IAtor[] = [
    {
      nome: 'Leonardo di Caprio',
      idade: '47(2022)',
      foto: 'http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQNq30ziwVmoedX5W9czCRzlZQGAmFupawFWk6xPmV7Wx0IzD1C8wxH5ZCHFoJFukuA',
      filmesEstreiados: ['A Origem', 'O Lobo de Wall Street', 'Não Olhe Para Cima'],
      pagina: '/LDC', //** ou ? indica que o campo não é obrigatório
      biografia: 'Depois de anos de injustiça, em 2016, Leonardo finalmente ganhou seu oscar',
      favorito: false

  },
  {
      nome: 'Johnny Depp',
      idade: '58(2022)',
      foto: 'https://static1.purepeople.com.br/articles/9/58/99/@/47500-johnny-depp-arriving-for-the-68th-624x600-1.jpg',
      filmesEstreiados: ['Piratas do caribe', 'Sweeney Todd', 'Minamata'],
      pagina: '/JD', //** ou ? indica que o campo não é obrigatório
      biografia: 'Muito famoso por enterpretar um pirata da disney, jhonny infelizmente teve que enfrentar uma bruxa na vida real que, parecia ter saido de algum filme de princesa',
      favorito: false

  },
  {
      nome: 'andrew garfield',
      idade: '38(2022)',
      foto: 'https://www.perfildosfamosos.com/andrew-garfield/foto-perfil-andrew-garfield.jpg?v=5c65c89c5a5a93120a944e7bfb6ecc8d',
      filmesEstreiados: ['O espetacular Homen-aranha', 'Hacksaw Ridge', 'Tick, Tick... Boom!'],
      pagina: '/JD', //** ou ? indica que o campo não é obrigatório
      biografia: 'O melhor homen-aranha',
      favorito: false

  }
]

  async exibirAlertaFavorito(ator){
    const alert = await this.alertController.create({
      header: 'Favoritar',
      message: 'Você deseja favoritar esse ator ?',
      buttons: [
        {
          text: 'Sim, Favoritar',
          handler: () => {
            this.ExibirToast('Esse ator foi favoritado','success');
            ator.favorito = true;
          }
        }, {
          text: 'Cancelar',
          role: 'cancel',
          handler: () =>{
            this.ExibirToast('Esse ator foi desfavoritado', 'warning');
            ator.favorito = false;
          }
        }
      ]
    });

    await alert.present();
  }

  async ExibirToast(mensagem: string, cor: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      color:cor,
      duration: 2000
    });
    toast.present();
  }
  }
