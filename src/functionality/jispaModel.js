const mongoose = require('mongoose')
const express = require('express')

/**
 * Created by : Himanshu Sharma
 * 
 * Defaults : 
 *      Pagination : true
 *      Date : 30 Sep 2021 
 * 
 */
class JispaModel {
    // Member Variables ___________________
    #router = null
    #name = null
    #schema = null
    #model = null
    #schemaValues = null
    #schemaOption = null
    #isPagination = true

    // Constructor ___________________
    constructor(name, schema, schemaOption = null) {
        this.#name = name
        this.#schemaValues = schema
        this.#schemaOption = schemaOption

        // Setup
        this.#router = express.Router()
    }

    // __init__ To initilize application
    async start() {
        // Run all functions
        await this.#createSchema()
        await this.#createModel()
    }

    // Create Schema ___________________
    async #createSchema() {
        this.#schema = new mongoose.Schema(this.#schemaValues, this.#schemaOption)
    }

    // Create Model ___________________
    async #createModel() {
        this.#model = mongoose.model(this.#name, this.#schema)
    }

    // Routings ___________________
    async getRouter() {
        // Create
        this.#router.post('/', this.#createDoc)
        // Get all records
        this.#router.get('/', this.#getDocs)
        // Get single record
        this.#router.get('/:id', this.#readDoc)
        // Update a record
        this.#router.put('/:id', this.#updateDoc)
        // Delete a record
        this.#router.delete('/:id', this.#deleteDoc)
        return this.#router
    }

    // CRUD Operations ___________________

    // Create Single Record
    #createDoc() {}

    // Get Multiple Records
    #getDocs() {}

    // Read Single Record
    #readDoc() {}

    // Update Single Record
    #updateDoc() {}

    // Delete Single Record
    #deleteDoc() {}

    // Pagination ___________________
    #pagination

    // Aggregation Framework ___________________
    #aggregation

}