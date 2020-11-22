import React from 'react';
import ReactStars from 'react-stars';

import { Header, Map, Review, ListReview, Fotos } from './styled';

const RestaurantDetail: React.FC = () => {
  return (
    <>
      <Header open>
        <h1>Nome do Restaurante</h1>
        <ReactStars
          value={3.5}
          color1="#dddddd"
          color2="#002b56e0"
          edit={false}
          half
        />
        <div className="restStatus">
          <span>Categoria - Preço</span>
          <span className="status">Open</span>
        </div>
      </Header>
      <Map map>
        <div className="map" />
        <Fotos
          img="https://img.elo7.com.br/product/original/22565B3/adesivo-parede-prato-comida-frango-salada-restaurante-lindo-adesivo-parede.jpg"
          className="fotos"
        />
        <span className="endereco">Endereço</span>
      </Map>
      <Review>
        <span>Reviews</span>

        <ListReview img="https://img.elo7.com.br/product/original/22565B3/adesivo-parede-prato-comida-frango-salada-restaurante-lindo-adesivo-parede.jpg">
          <div className="user">
            <div className="imagem" />
            <span>
              Nome do usuario que comentou
              <small>Data do comentario</small>
            </span>
          </div>
          <div className="coment">
            <ReactStars
              value={2.5}
              color1="#dddddd"
              color2="#002b56e0"
              edit={false}
              half
            />
            <span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis magnam commodi quidem expedita cum quis similique
              perspiciatis fuga cumque quos ipsam maxime iste, quas placeat
              cupiditate repudiandae molestiae esse asperiores!
            </span>
          </div>
        </ListReview>
      </Review>
    </>
  );
};

export default RestaurantDetail;
