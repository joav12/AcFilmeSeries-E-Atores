export interface ISerie{
    nome: string;
    lancamento: string;
    duracaoPorEp: string;
    eps: string;
    classificacao: number;
    cartaz: string;
    generos: string[];
    pagina?: string; //** ou ? indica que o campo não é obrigatório
    descricao: string;
    favorito: boolean;
}