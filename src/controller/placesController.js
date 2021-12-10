const mongoose = require("mongoose");
const PlacesSchema = require("../models/placesSchema");


const getAll = async (req, res) => {
  try {
    const allPlaces = await PlacesSchema.find();
    res.status(200).send(allPlaces);
  } catch (error) {
    res.status(500).send({
      message: error.message
    })
  }

}

const getById = async (req, res) => {
  try {
    const placeRequested = await PlacesSchema.findById(req.params.id);
    console.log(placeRequested)
    res.status(200).send(placeRequested)
  } catch (error) {
    res.status(500).send({
      message: error.message
    })
  }
}

const createPlace = async (req, res) => {
  try {
    const newPlace = new PlacesSchema({
      nome: req.body.nome,
      endereco: req.body.endereco, 
      cidade: req.body.cidade,
      _id: new mongoose.Types.ObjectId()
    })

    const placeSaved = await newPlace.save()
    res.status(201).send(placeSaved);
  } catch (error) {
    res.status(500).send({
      message: error.message
    })
  }
}

const updatePlace = async (req, res) => {
  try {
    let placeRequested = await PlacesSchema.findById(req.params.id);
    let bodyRequest = req.body;
    if (placeRequested) {
      placeRequested.nome = bodyRequest.nome || placeRequested.nome;
      placeRequested.endereco = bodyRequest.endereco || placeRequested.endereco;
      placeRequested.cidade = bodyRequest.cidade || placeRequested.cidade
      placeRequested.telefone = bodyRequest.telefone || placeRequested.telefone

      const placeSaved = await placeRequested.save();
      return res.status(200).send(placeSaved);
    }
      return res.status(400).json({
        mensagem: "Local não encontrado!"
  })} catch (error) {
    return res.status(500).send({
      message: error.message
    })
  }
}

const deletePlace = async (req, res) => {
  try {
    const requestedPlace = await PlacesSchema.findByIdAndDelete(req.params.id);
    if(requestedPlace == null) {
      return res.status(404).send({message: "Id informada não encontrada!"})
    }
    return res.status(200).send({message: "Local deletado com sucesso!"});

  } catch (error) {
    return res.status(500).send({
      message: error.message
    })
  }
}

module.exports = {
  getAll,
  createPlace,
  getById,
  updatePlace,
  deletePlace
}
