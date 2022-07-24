'use strict';

module.exports = {
  name: require('./package').name,

  included(app, parentAddon) {
    let target = (parentAddon || app);

    // necessary for nested usage
    if (target.app) {
      target = target.app;
    }

    target.options = target.options || {};
    target.options.babel = target.options.babel || { includePolyfill: true };

    target.import('vendor/ember-sticky-element.css');
    return this._super.included.apply(this, arguments);
  }
};
