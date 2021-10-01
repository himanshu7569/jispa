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
        this.models = models

        // Starter
        this.#router = express.Router()
    }

    // Will return a router model
    async init() {
        return await this.#getRouter()
    }

    async #getRouter() {
        for (let i = 0; i < this.#models.length; i++) {

        }
    }

}