'use strict'

const debug = require('debug')('jwmm:api:routes')
const express = require('express')
const moment = require('moment')
const db = require('jwmm-db')
const { Op } = require('sequelize')

const config = require('./config')

const api = express.Router()

let services, Assign, Member

api.use('*', async (req, res, next) => {
    if(!services) {
        debug('Connecting to database')
        try {
            services = await db(config.db)
        } catch (e) {
            return next(e)
        }
        Assign = services.Assign
        Member = services.Member
    }
    next()
})

api.get('/assigns', async(req, res, next) => {
    debug('A request has come to /assign')

    //TODO: add not authorized handler
    let assigns = []
    try {
        assigns = await Assign.findAll({ order: [['id','DESC']], limit:10 })
    } catch(e) { return next(e)}
    
    res.send(assigns)
})

api.get('/assigns/pending', async(req, res, next) => {
    debug('Request to /pending')

    const cond = {
        where: {
            date: { [Op.gte]: moment(Date.now()).format('YYYY-MM-DD') }
        }
    }
    
    let assigns = []
    try {
        assigns = await Assign.findAll(cond)
    } catch(e) { next(e) }
    res.send(assigns)
})

api.get('/assign/:uuid', async(req, res, next) => {
    const { uuid } = req.params

    const condition = { where: { uuid } }
    let assign = []
    try {
        assign = await Assign.findAll(condition)
    } catch(e) { next(e) }

    res.send(assign)
})

api.get('/assign/random', async(req, res, next) => {
    let assignGenerated
    try {
        const fixture = require('../jwmm-db/tests/fixtures/assign').single
        assignGenerated = await Assign.createAssign(fixture)
    } catch(e) { next(e) }
    if(assignGenerated)

    res.status(200).send(assignGenerated)
})


api.get('/members', async(req, res, next) => {
    let members = []
    try {
        members = members.findAll()
    } catch(e) { next(e) }

    res.send(members)
})

api.get('/member/:uuid', async(req, res, next) => {
    const { uuid } = req.params
    let member = []
    const cond = {
        where: {
            uuid
        }
    }
    try {
        member = await Member.findAll(cond)
    } catch(e) { next(e) }

    res.send(member)
})

module.exports = api