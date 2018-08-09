const { merge } = require('lodash')

const controllers = {
  createOne(model, body) {
    return model.create(body)
  },

  updateOne(docToUpdate) {
    return docToUpdate.save()
  },

  deleteOne(docToDelete) {
    return docToDelete.remove()
  },

  getOne(docToGet) {
    return Promise.resolve(docToGet)
  },

  getAll(model) {
    return model.find({})
  },

  findByParam(model, id) {
    return model.findById(id)
  }
}

const createOne = (model, validation) => (req, res, next) => {
  const { error } = validation(req.body)
  if (error) return res.status(400).send(error)
  return controllers.createOne(model, req.body)
    .then(doc => res.status(201).json(doc))
    .catch(error => next(error))
}

const updateOne = (model, validation) => async (req, res, next) => {
  const docToUpdate = req.docFromId
  const update = req.body
  const doc = merge(docToUpdate, update)
  const { error } = validation(doc)
  if (error) return res.status(400).send(error)
  return controllers.updateOne(doc)
    .then(doc => res.status(201).json(doc))
    .catch(error => next(error))
}

const deleteOne = (model) => (req, res, next) => {
  return controllers.deleteOne(req.docFromId)
    .then(doc => res.status(201).json(doc))
    .catch(error => next(error))
}

const getOne = (model) => (req, res, next) => {
  return controllers.getOne(req.docFromId)
    .then(doc => res.status(200).json(doc))
    .catch(error => next(error))
}


const getAll = (model) => (req, res, next) => {
  return controllers.getAll(model)
    .then(docs => res.json(docs))
    .catch(error => next(error))
}

const findByParam = (model) => (req, res, next, id) => {
  return controllers.findByParam(model, id)
    .then(doc => {
      if (!doc) {
        next(new Error('Not Found Error'))
      } else {
        req.docFromId = doc
        next()
      }
    })
    .catch(error => {
      next(error)
    })
}


const generateControllers = (model, validation = () => {}) => {
  const defaults = {
    findByParam: findByParam(model),
    getAll: getAll(model),
    getOne: getOne(model),
    deleteOne: deleteOne(model),
    updateOne: updateOne(model, validation),
    createOne: createOne(model, validation)
  }
  
  return { ...defaults }
}

exports.controllers = controllers
exports.generateControllers = generateControllers
exports.findByParam = findByParam
exports.createOne = createOne
exports.updateOne = updateOne
exports.deleteOne = deleteOne
exports.getAll = getAll
exports.getOne = getOne