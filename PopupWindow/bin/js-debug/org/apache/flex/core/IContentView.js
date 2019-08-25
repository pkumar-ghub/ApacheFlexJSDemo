/**
 * Generated by Apache Flex Cross-Compiler from org/apache/flex/core/IContentView.as
 * org.apache.flex.core.IContentView
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.flex.core.IContentView');

goog.require('org.apache.flex.core.IParent');



/**
 * @interface
 * @extends {org.apache.flex.core.IParent}
 */
org.apache.flex.core.IContentView = function() {
};
/**  * @type {number}
 */org.apache.flex.core.IContentView.prototype.x;
org.apache.flex.core.IContentView.prototype.removeAllElements = function() {
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.flex.core.IContentView.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'IContentView', qName: 'org.apache.flex.core.IContentView', kind: 'interface' }], interfaces: [org.apache.flex.core.IParent] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.flex.core.IContentView', org.apache.flex.core.IContentView);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.flex.core.IContentView.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'x': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.flex.core.IContentView'},
        'y': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.flex.core.IContentView'},
        'width': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.flex.core.IContentView'},
        'height': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.flex.core.IContentView'}
      };
    },
    methods: function () {
      return {
        'removeAllElements': { type: 'void', declaredBy: 'org.apache.flex.core.IContentView'}
      };
    }
  };
};