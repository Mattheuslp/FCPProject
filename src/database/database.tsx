import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('fcp.db');

if (db) {
  console.log('Banco de dados aberto com sucesso.');
} else {
  console.error('Erro ao abrir o banco de dados.');
}

// Função para criar a tabela de transações
export const createTable = () => {
  try {
    console.log('Tentando criar a tabela...');
    db.execSync(
      'CREATE TABLE IF NOT EXISTS transactions (id INTEGER PRIMARY KEY AUTOINCREMENT, type TEXT, name TEXT, amount REAL, date TEXT);'
    );
    console.log('Tabela criada com sucesso');
  } catch (error) {
    console.error('Erro ao criar a tabela:', error);
  }
};

// Função para adicionar uma nova transação
export const addTransaction = (type: string, name: string, amount: number, date: string) => {
  try {
    // Interpolando os valores diretamente na query
    db.execSync(
      `INSERT INTO transactions (type, name, amount, date) VALUES ('${type}', '${name}', ${amount}, '${date}');`
    );
    console.log('Transação adicionada com sucesso');
  } catch (error) {
    console.error('Erro ao adicionar transação', error);
  }
};

// Função para obter as transações do banco de dados
export const getTransactions = (
  setTransactions: (transactions: Array<{ id: string; type: string; name: string; amount: number; date: string }>) => void
) => {
  try {
    const result = db.execSync(
      'SELECT * FROM transactions;'
    );
    
    const rows = result?.rows?._array || []; // Converte o resultado para um array
    setTransactions(rows);
  } catch (error) {
    console.error('Erro ao obter transações', error);
  }
};
