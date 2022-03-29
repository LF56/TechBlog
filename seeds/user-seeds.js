const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userInfo = [
    {
        username: 'leahf21',
        email: 'leahf21@email.com',
        password: 'password000'
    },
    {
        username: 'racheljohn25',
        email: 'rjohnson@email.com',
        password: 'password000'
    },
    {
        username: 'walkerj75',
        email: 'walkerj75@email.com',
        password: 'password000'
    },
    {
        username: 'bobbyj32',
        email: 'jeanbob@email.com',
        password: 'password000'
    },
    {
        username: 'loladavid4',
        email: 'lodavid@email.com',
        password: 'password000'
    },
    {
        username: 'kahold45',
        email: 'katehold@email.com',
        password: 'password000'
    },
    {
        username: 'holkai33',
        email: 'hollyk3@email.com',
        password: 'password000'
    },
    {
        username: 'derrik295',
        email: 'derrikmc2@email.com',
        password: 'password000'
    },
    {
        username: 'car9213',
        email: 'carlossmith@email.com',
        password: 'password000'
    },
    {
        username: 'luis45',
        email: 'luisday4@email.com',
        password: 'password000'
    },
];
const seedUsers = () => User.bulkCreate(userInfo, {individualHooks: true});

module.exports = seedUsers;