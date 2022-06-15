export interface IAtor{
    nome: string;
    idade: string;
    foto: string;
    filmesEstreiados: string[];
    pagina?: string; //** ou ? indica que o campo não é obrigatório
    biografia: string;
    favorito: boolean;
}