import { useState } from 'react';

export default function useForm(valoresIniciais) {
  const [values, setValues] = useState(valoresIniciais);

  function saveValue(chave, valor) {
    // chaves: titulo, descricao, cor
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChanges(data) {
    saveValue(data.target.getAttribute('name'), data.target.value);
  }

  function clearForm() {
    setValues(valoresIniciais);
  }

  return {
    values,
    handleChanges,
    clearForm,
  };
}
