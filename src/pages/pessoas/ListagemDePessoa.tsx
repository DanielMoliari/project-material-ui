import { useSearchParams } from "react-router-dom"
import { FerramentasDaListagem } from "../../shared/components"
import { LayoutBaseDePagina } from "../../shared/layouts"
import { useEffect, useMemo } from "react";
import { PessoasService } from "../../shared/services/api/pessoas/PessoasService";

export const ListagemDePessoa: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const busca = useMemo(() => {
        return searchParams.get('busca') || '';
    },[searchParams])

    useEffect(() => {

        PessoasService.getAll()
        .then((result) => {
            if (result instanceof Error) {
                alert(result.message);
                return;
            }
            console.log(result);
        })
    }, [])

    return (
        <LayoutBaseDePagina titulo="Listagem de cidades" barraDeFerramentas={
            <FerramentasDaListagem 
            mostrarInputBusca 
            textoDaBusca={busca} 
            textoBotaoNovo="Nova"
            aoMudarTextoDeBusca={texto => setSearchParams({ busca: texto}, { replace: true})}
            />
        }>
e
        </LayoutBaseDePagina>
    )
}