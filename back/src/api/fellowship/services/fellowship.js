'use strict';

/**
 * fellowship service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::fellowship.fellowship');
