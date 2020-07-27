import React from 'react';
import dadosIniciais from './data/dados_iniciais.json'
import Menu from './components/Menu'
import BannerMain from './components/BannerMain'
import Carousel from './components/Carousel'
import Footer from './components/Footer'


function App() {
  return (
    <div>
      <Menu />
      
      <BannerMain 
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription="Teste"
      />

      {dadosIniciais.categorias.map((categoria) => {
        return <Carousel 
          ignoreFirstVideo
          category={categoria}
        />
      })}

      <Footer />

    </div>
  );
}

export default App;
