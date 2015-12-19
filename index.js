;(function () {
  'use strict';

  var TestUtils = require('react-addons-test-utils');
  var $ = require('teaspoon');

  function PxTestUtils {
  }

  /**
   * Render react element and return React renderer and $el (teaspoon).
   * @param  {object} reactEl React Element
   * @return {object, object} renderer, $el
   */
  PxTestUtils.render = function(reactEl) {
    const renderer = TestUtils.createRenderer();
    renderer.render(reactEl);

    const $el = $(renderer.getRenderOutput()).render();
    return [ renderer, $el ];
  }

  module.exports = PxTestUtils;
}());
