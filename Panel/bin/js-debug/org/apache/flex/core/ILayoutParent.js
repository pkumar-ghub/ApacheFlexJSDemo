/**
 * Generated by Apache Flex Cross-Compiler from org/apache/flex/core/ILayoutParent.as
 * org.apache.flex.core.ILayoutParent
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.flex.core.ILayoutParent');




/**
 * @interface
 */
org.apache.flex.core.ILayoutParent = function() {
};
org.apache.flex.core.ILayoutParent.prototype.getLayoutHost = function() {
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.flex.core.ILayoutParent.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'ILayoutParent', qName: 'org.apache.flex.core.ILayoutParent', kind: 'interface' }] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.flex.core.ILayoutParent', org.apache.flex.core.ILayoutParent);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.flex.core.ILayoutParent.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    accessors: function () {return {};},
    methods: function () {
      return {
        'getLayoutHost': { type: 'org.apache.flex.core.ILayoutHost', declaredBy: 'org.apache.flex.core.ILayoutParent'}
      };
    }
  };
};