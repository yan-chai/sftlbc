'use strict';

/**
 *  fellowship controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::fellowship.fellowship');
