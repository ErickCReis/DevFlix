import React from 'react';
import dadosIniciais from '../../data/dados_iniciais.json'
import PageDefault from '../../components/PageDefault';
import BannerMain from '../../components/BannerMain'
import Carousel from '../../components/Carousel'

function App() {
  return (
    <>
      <PageDefault>

        <BannerMain 
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription="Teste"
      />

      {dadosIniciais.categorias.map((categoria) => {
        return <Carousel 
          category={categoria}
        />
      })}

      </PageDefault>
    </>
  );
}

export default App;
