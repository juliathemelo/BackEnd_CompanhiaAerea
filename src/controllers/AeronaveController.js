const Tipo = require('../models/Tipo_aeronave')
const Aeronave = require('../models/Aeronave')


module.exports = {
    async consulta(req,res){
        const aeronave = await Aeronave.findAll()

        return res.json(aeronave)
    },

    async create(req,res){
        const {tipo_aeronave} = req.params
        const {codigo_aeronave,numero_total_assentos} = req.body

        const tipo = await Tipo.findByPk(tipo_aeronave)
        if(!tipo){
            return res.status(400).json({error:'User not found'})
        }
        const aero = await Aeronave.create({codigo_aeronave,numero_total_assentos,tipo_aeronave})
        return res.json(aero)
    },

    async atualizar(req,res){
        const {codigo_aeronave,numero_total_assentos,tipo_aeronave} = req.body

        const aero = await Aeronave.update({codigo_aeronave,numero_total_assentos}, {where: {tipo_aeronave: tipo_aeronave}})

        return res.json(aero)
    }
}