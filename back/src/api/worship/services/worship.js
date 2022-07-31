'use strict';

/**
 * worship service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::worship.worship');
