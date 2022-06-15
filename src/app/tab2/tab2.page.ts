import { Component } from '@angular/core';
import { ISerie } from '../model/ISeries';
import { AlertController, ToastController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public alertController: AlertController, public toastController: ToastController, public router: Router) {}

  exibirSerie(serie: ISerie){
    const navigationExtras: NavigationExtras = {state:{paramSerie:serie}};
    this.router.navigate(['serie-detalhe'],navigationExtras);
  }

  listaSeries: ISerie[] = [
    {
    nome: 'How i met your mother (2005)',
    lancamento: '19/09/2005',
    duracaoPorEp: '40m',
    eps: '208',
    classificacao: 9,
    cartaz: 'https://upload.wikimedia.org/wikipedia/pt/a/a1/How_I_Met_Your_Mother_DVD-8.jpg',
    generos: ['Sitcom(comédia)'],
    pagina: '/himym',
    descricao: 'Um cara fala para seus filhos como ele pegou várias mulheres antes de conhecer a mãe deles por 9 temporadas',
    favorito: false

  },
  {
    nome: 'The boys (2019)',
    lancamento: '26/07/2019',
    duracaoPorEp: '50m',
    eps: '19(ainda lançando)',
    classificacao: 8,
    cartaz: 'https://br.web.img3.acsta.net/pictures/19/07/09/14/34/1532536.jpg?coixp=57&coiyp=52',
    generos: ['Ação', 'Ficção cientifica'],
    pagina: '/theBoys',
    descricao: 'Invencivel live action',
    favorito: false

  },
  {
    nome: 'The owl house (2020)',
    lancamento: '13/04/2020',
    duracaoPorEp: '20m',
    eps: '40(Ainda lançando)',
    classificacao: 8,
    cartaz: 'https://images.justwatch.com/poster/246790123/s718/temporada-2.%7Bformat%7D',
    generos: ['Terror', 'Fantasia', 'Comédia'],
    pagina: '/toh',
    descricao: 'Uma garota que é fã de harry potter, vai parar em um mundo de magia e deseja se tornar uma maga',
    favorito: false
  },
  {
    nome: 'Arcane (2021)',
    lancamento: '06/11/2021',
    duracaoPorEp: '42m',
    eps:'9',
    classificacao: 10,
    cartaz: 'https://i0.wp.com/portaltagarelas.com.br/wp-content/uploads/2021/11/CAPA-MATERIA-Tudo-que-voce-precisa-saber-sobre-Arcane-a-animacao-de-League-of-Legends-da-Netflix.jpg?fit=1920%2C1080&ssl=1',
    generos: ['Ação', 'Steampunk'],
    pagina: '/Arcane',
    descricao: 'Se você gostou de arcane, pelo amor de deus não jogue lol',
    favorito: false
  },
  {
    nome: 'Invencível (2021)',
    lancamento: '31/10/1968',
    duracaoPorEp: '47m',
    eps:'8',
    classificacao: 8,
    cartaz: 'https://m.media-amazon.com/images/M/MV5BNWYwYjAyMzgtNzQyNC00M2JiLWI2ZTQtNzRmZThmOTk4NmRmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
    generos: ['Ação', 'Ficção cientifica'],
    pagina: '/Invencivel',
    descricao: 'The boys animado',
    favorito: false
  }
]

  async exibirAlertaFavorito(serie){
    const alert = await this.alertController.create({
      header: 'Favoritar',
      message: 'Você deseja favoritar essa serie ?',
      buttons: [
        {
          text: 'Sim, Favoritar',
          handler: () => {
            this.ExibirToast('Essa serie foi favoritada','success');
            serie.favorito = true;
          }
        }, {
          text: 'Cancelar',
          role: 'cancel',
          handler: () =>{
            this.ExibirToast('Essa serie foi desfavoritada', 'warning');
            serie.favorito = false;
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
