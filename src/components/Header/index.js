import React, { useState } from 'react';
import { FcSearch } from 'react-icons/fc';

import { Container, Img, SearchBar, Input, SearchIcon } from './styles';
import logoPok from '../../assets/logo.png';



export default function Header({ onSearchClick }) {
  const [searchItem, setSearchItem] = useState('');

  return (
    <Container>
      <Img src={logoPok} alt="Pokemon" />

      <SearchBar>
        <Input placeholder='Pesquisar'
          type='text'
          onChange={(e) => setSearchItem(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter')
              return onSearchClick(searchItem);
          }}
        />
        <SearchIcon>

          <FcSearch className="FcSearch"
            color="#6495ed"
            size={40}
            onClick={() => { return onSearchClick(searchItem) }}
          />

        </SearchIcon>
      </SearchBar>

    </Container>

  );

}
