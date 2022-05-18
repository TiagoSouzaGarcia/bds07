import './styles.css';

import ResultCard from 'components/ResultCard';
import React, { useState } from 'react';
import axios from 'axios';

type FormData = {
  cep: string;
};

type Address = {
  logradouro: string;
  localidade: string;
};

const GitHubApiSearch = () => {

  const [address, setAddress] = useState<Address>();

  const [formData, setFormData] = useState<FormData>({
    cep: ''
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    axios.get(`https://viacep.com.br/ws/${formData.cep}/json`)
    .then((response)=> {
        setAddress(response.data);
        console.log(response.data);
    }) 
    .catch((error) => {
      setAddress(undefined);
      console.log(error);
    });
  };

  return (
    <div className="cep-search-container">
      <div className="container search-container">
      <h1>Encontre um perfil no Github</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <input
              type="text"
              name="cep"
              value={formData.cep}
              className="search-input"
              placeholder="Usuário Github"
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-secondary search-button">
              Encontrar
            </button>
          </div>
        </form>
        {address && (
          <>
          <p>Informações</p>
            <ResultCard title="Perfil" description={address.logradouro} />
            <ResultCard title="Seguidores" description={address.localidade} />
            <ResultCard title="Localidade" description={address.localidade} />
            <ResultCard title="Nome" description={address.localidade} />
          </>
        )}
      </div>
    </div>
  );
};

export default GitHubApiSearch;
