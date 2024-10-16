import { registerRootComponent } from 'expo';
import React, { useEffect } from 'react';
import Routes from './src/navigation/routes'; // Ou ajuste conforme o caminho correto das suas rotas
import { createTable } from './src/database/database';  // Função para criar a tabela

export default function App() {
  useEffect(() => {
    // Chame a função de criação da tabela ao iniciar o app
    createTable();
  }, []);
  return <Routes />;
}

registerRootComponent(App);
