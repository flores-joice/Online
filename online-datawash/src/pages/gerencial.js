import React, { Component } from 'react'

export class GerenciamentoContas extends Component {
    render() {
        return (
            <div className='w-100 d-flex flex-column justify-content-around align-items-center'>
                <div className="d-flex flex-column justify-content-center align-items-center pt-3 enriquecer-page">
                    <select class="selectpicker" data-show-subtext="true" data-live-search="true">
                        <option data-subtext="Rep California">Sistema</option>
                        <option data-subtext="Rep California">ALX Revenda</option>
                        <option data-subtext="Rep California">Auto Facil</option>
                        <option data-subtext="Rep California">Busco Minha Familia</option>
                        <option data-subtext="Rep California">Tom Foolery</option>
                        <option data-subtext="Rep California">Tom Foolery</option>
                    </select>
                </div>
            </div>
        )
    }
}