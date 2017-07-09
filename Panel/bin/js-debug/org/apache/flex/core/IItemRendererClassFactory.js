/**
 * Generated by Apache Flex Cross-Compiler from org/apache/flex/core/IItemRendererClassFactory.as
 * org.apache.flex.core.IItemRendererClassFactory
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.flex.core.IItemRendererClassFactory');

goog.require('org.apache.flex.core.IBead');



/**
 * @interface
 * @extends {org.apache.flex.core.IBead}
 */
org.apache.flex.core.IItemRendererClassFactory = function() {
};
org.apache.flex.core.IItemRendererClassFactory.prototype.createItemRenderer = function(parent) {
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.flex.core.IItemRendererClassFactory.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'IItemRendererClassFactory', qName: 'org.apache.flex.core.IItemRendererClassFactory', kind: 'interface' }], interfaces: [org.apache.flex.core.IBead] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.flex.core.IItemRendererClassFactory', org.apache.flex.core.IItemRendererClassFactory);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.flex.core.IItemRendererClassFactory.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    accessors: function () {return {};},
    methods: function () {
      return {
        'createItemRenderer': { type: 'org.apache.flex.core.IItemRenderer', declaredBy: 'org.apache.flex.core.IItemRendererClassFactory', parameters: function () { return [  { index: 1, type: 'org.apache.flex.core.IItemRendererParent', optional: false } ]; }}
      };
    }
  };
};