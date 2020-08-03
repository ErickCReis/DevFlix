import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria(){
    const valoresIniciais = {
      nome: '',
      descricao: '',
      cor: '#000'
    }

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function saveValue(chave, valor) {
    //chaves: nome, descricao, cor
    setValues({
      ...values,
      [chave]: valor,
    })
  }

  function handleChanges (data) {
    saveValue(data.target.getAttribute('name'), data.target.value);
  }

  
  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome} </h1>

      <form onSubmit={function handleSubmit(data) {
        data.preventDefault();
        setCategorias([
          ...categorias,
          values
        ]);
        setValues(valoresIniciais);
      }}>

        <FormField 
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome} 
          onChange={handleChanges}
        />


        <FormField 
          label="Descrição"
          type="textarea"
          name="descrição"
          value={values.descricao} 
          onChange={handleChanges}
        />


        <FormField 
          label="Cor"
          type="color"
          name="cor"
          value={values.cor} 
          onChange={handleChanges}
        />

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categorias.nome}${indice}`}>{categoria.nome}</li>
          )
        })}
      </ul>

      <Link to="/">
        Home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;
  