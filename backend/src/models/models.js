const connection = require('./connection')

const getUsers = async () => {
    const [users] = await connection.execute('SELECT * FROM clientes');
    return users;
};

const newClient = async (cliente) => {
    try{
        const { nome, altura, nascimento, cidade_id } = cliente;

        const formattedNascimento = nascimento ? new Date(nascimento).toISOString().slice(0, 10) : null;

        const query = 'INSERT INTO clientes (nome, altura, nascimento, cidade_id) VALUES (?, ?, ?, ?)';
        const [result] = await connection.execute(query, [nome, altura, formattedNascimento, cidade_id]);
        return {
            id: result.insertId,
            ...cliente,
            nascimento: formattedNascimento
        };

    } catch(error) {
        throw error;
    }
   
}

const getProdutos = async () => {
    const [produtos] = await connection.execute('SELECT * FROM produtos');
    return produtos;
};

const novoProd = async (prod) => {
    const { nome, preco, quantidade, categoria_id } = prod;

    const query = 'INSERT INTO produtos (nome, preco, quantidade, categoria_id) VALUES (?, ?, ?, ?)';
    const [result] = await connection.execute(query, [nome, preco, quantidade, categoria_id]);
    return {
        id: result.insertId,
        ...prod
    };
}

const deleteProd = async (id) => {
    const deleteProd = await connection.execute('DELETE FROM produtos WHERE id = ?', [id]);
    return deleteProd;
}

const updateProd = async (id, prod) => {
    const { nome, preco, quantidade, categoria_id } = prod;
    const query = 'UPDATE produtos SET nome = ?, preco = ?, quantidade = ?, categoria_id = ? WHERE id = ?';
    const [result] = await connection.execute(query, [nome, preco, quantidade, categoria_id, id]);
    return result;
}   





module.exports = {
    getUsers,
    newClient,
    getProdutos,
    novoProd,
    deleteProd,
    updateProd
}