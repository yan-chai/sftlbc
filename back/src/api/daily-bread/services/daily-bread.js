'use strict';

/**
 * daily-bread service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::daily-bread.daily-bread');
