var pool = require('./bd')

async function getArticulos(){
    var query = "select * from articulos order by id desc";
    var rows = await pool.query(query);
    return rows;
}

module.exports = { getArticulos }