const API_BASE = '/api'
const db = require('../resources/users.json');

module.exports = function(app){
    app.get(`${API_BASE}/users`, async (req, res)=>{
        const query = await db.getUsers();
        res.json(query);
    });
    app.get(`${API_BASE}/user/age`, async (req, res)=>{
        const { l, h } = req.query;
        const query = await db.getUserByAgeRange(l, h);
        res.json(query)
    });
    /**
     * Especialmente con aquellas que pasen parametros
     * cuidado con el orden de resolución de rutas
     * por el URL como esta:
     */
    app.get(`${API_BASE}/user/:id`, (req, res)=>{
        const query = db.getUserById(req.params.id);
        res.json(query);
    });
    /**
     * Este tipo de casos deben ir a lo último en las declaraciones de rutas
     */
};