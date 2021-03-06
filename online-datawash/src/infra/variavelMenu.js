import {apiMenu} from './api-config'

export default function variavelMenu(token, valor) {
    if (token) {

        const response = apiMenu.get()
        //item armazena o valor da response retornada da api
        const item = response.data

        //FOR = lista todos os valores contido em item
        for (let [key, value] of item.entries(item)) {

            //aqui atribuimos os valores listados do FOR na variavel valor
            this.setState({ valor: value })
            const newFunc = []

            //fazemos a comparação dos valores, se true, 
            //ele envia uma string para outra variavel
            {
                //se o valor contido na variavel for = 1 ele execura, 
                //senão nao faz nada
                this.state.valor === "1" &&
                    (newFunc = this.state.funcionalidades.concat('consulta')) &&
                    (this.setState({ funcionalidades: newFunc }))
            }
            {
                this.state.valor === "9" &&
                    (newFunc = this.state.funcionalidades.concat('enriquecimento')) &&
                    (this.setState({ funcionalidades: newFunc }))
            }
            {
                (this.state.valor === ("9" && "10")) &&
                    (newFunc = this.state.funcionalidades.concat('enriquecer')) &&
                    (this.setState({ funcionalidades: newFunc }))
            }
            {
                this.state.valor === "11" &&
                    (newFunc = this.state.funcionalidades.concat('atribuicaoCpf')) &&
                    (this.setState({ funcionalidades: newFunc }))
            }
            {
                this.state.valor === "38" &&
                    (newFunc = this.state.funcionalidades.concat('validacaoHot')) &&
                    (this.setState({ funcionalidades: newFunc }))
            }
            {
                this.state.valor === "16" &&
                    (newFunc = this.state.funcionalidades.concat('mailingList')) &&
                    (this.setState({ funcionalidades: newFunc }))
            }
            {
                this.state.valor === "33" &&
                    (newFunc = this.state.funcionalidades.concat('gerencial')) &&
                    (this.setState({ funcionalidades: newFunc }))
            }
            {
                this.state.valor === "33" &&
                    (newFunc = this.state.funcionalidades.concat('gerenciamentoContas')) &&
                    (this.setState({ funcionalidades: newFunc }))
            }
            {
                this.state.valor === "34" &&
                    (newFunc = this.state.funcionalidades.concat('personalizacao')) &&
                    (this.setState({ funcionalidades: newFunc }))
            }
            {
                this.state.valor === "35" &&
                    (newFunc = this.state.funcionalidades.concat('extratoServicos')) &&
                    (this.setState({ funcionalidades: newFunc }))
            }
            {
                this.state.valor === "48" &&
                    (newFunc = this.state.funcionalidades.concat('previaFechamento')) &&
                    (this.setState({ funcionalidades: newFunc }))
            }
            {
                this.state.valor === "7" &&
                    (newFunc = this.state.funcionalidades.concat('monitoramento')) &&
                    (this.setState({ funcionalidades: newFunc }))
            }
            {
                this.state.valor === "7" &&
                    (newFunc = this.state.funcionalidades.concat('monitoramento', 'monitConsulta')) &&
                    (this.setState({ funcionalidades: newFunc }))
            }
            {
                this.state.valor === "14" &&
                    (newFunc = this.state.funcionalidades.concat('monitEnriquecimento')) &&
                    (this.setState({ funcionalidades: newFunc }))
            }

            {
                this.state.valor === "31" &&
                    (newFunc = this.state.funcionalidades.concat('monitWebService')) &&
                    (this.setState({ funcionalidades: newFunc }))
            }
            {
                this.state.valor === "43" &&
                    (newFunc = this.state.funcionalidades.concat('higienizacao')) &&
                    (this.setState({ funcionalidades: newFunc }))
            }
            {
                this.state.valor === "8" &&
                    (newFunc = this.state.funcionalidades.concat('relatorio', 'relatConsulta')) &&
                    (this.setState({ funcionalidades: newFunc }))
            }
            // {
            //   this.state.valor === "8" &&
            //     (newFunc = this.state.funcionalidades.concat('relatConsulta')) &&
            //     (this.setState({ funcionalidades: newFunc }))
            // }
            {
                this.state.valor === "15" &&
                    (newFunc = this.state.funcionalidades.concat('relatEnriquecimento')) &&
                    (this.setState({ funcionalidades: newFunc }))
            }
            {
                this.state.valor === "19" &&
                    (newFunc = this.state.funcionalidades.concat('relatMailingList')) &&
                    (this.setState({ funcionalidades: newFunc }))
            }
            {
                this.state.valor === "32" &&
                    (newFunc = this.state.funcionalidades.concat('relatWebService')) &&
                    (this.setState({ funcionalidades: newFunc }))
            }
            {
                this.state.valor === "46" &&
                    (newFunc = this.state.funcionalidades.concat('relatHigienizacao')) &&
                    (this.setState({ funcionalidades: newFunc }))
            }
        };
    }
}