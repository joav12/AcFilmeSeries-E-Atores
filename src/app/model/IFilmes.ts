export interface IFilme{
    nome: string;
    lancamento: string;
    duracao: string;
    classificacao: number;
    cartaz: string;
    generos: string[];
    pagina?: string; //** ou ? indica que o campo não é obrigatório
    descricao: string;
    favorito: boolean;
}