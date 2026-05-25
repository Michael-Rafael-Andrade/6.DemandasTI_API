// retorna informações sobre o serviço e sua disponibilidade
exports.index = async function ( req, res ){
    const resposta = {
        nome: "API de Demandas de TI",
        status: "online",
        timestamp: new Date().toLocaleString(),
        versao: '1.0',
        ambiente: "desenvolvimento"
    }
    return res.json(resposta);
};