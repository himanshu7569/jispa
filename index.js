const express = require('express')

/**
 * 
 * Created by : Himanshu Sharma
 * 
 * Defaults : 
 * 
 * Date : 30 Sep 2021 
 * 
 */

class Jispa {

    // To store all the models
    #models = null
    #router = null

    // Constructor
    constructor(models) {
        if (models instanceof Array) {
            this.#models = models
        } else {
            throw ReferenceError("Model must be an Array Object!")
        }

        // Starter
        this.#router = express.Router()
    }

    // Will return a router model
    async init() {
        return await this.#getRouter()
    }

    // Registor all routes
    async #getRouter() {
        for (let i = 0; i < this.#models.length; i++) {
            this.#router.use(`/${this.#models[i].getName()}/`, this.#models[i].getRouter())
        }
        return this.#router
    }

    // Registor new JispaModle
    async addNewModel(model) {
        // TODO
    }
}