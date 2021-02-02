import React from 'react';
import {connect} from "react-redux";

import {bindActionCreators} from "redux";
//nossas actions
import * as CarrinhoAction from "../../store/actions/actions";


const Feed= ({roupas, adicionarCarrinho}) => {
return(

<section className="App" style={{ padding: '10px', backgroundColor: 'teal', color: '#ffffff', width: 300}}>
    
<h1> Feed de Roupas</h1>
<ul>
{roupas.map((item) =>(
        <li key={item.id}>
            {item.cor} | {item.tamanho} | {item.preco} 
            <button onClick={()=>adicionarCarrinho(item)}>Comprar</button>
        </li>
))}
</ul>
</section>

);
};


const mapStateToProps = state =>({
    roupas: state.roupas.feed,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(CarrinhoAction, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Feed);