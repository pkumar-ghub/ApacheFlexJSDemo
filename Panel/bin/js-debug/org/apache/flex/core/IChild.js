/**
 * Generated by Apache Flex Cross-Compiler from org/apache/flex/core/IChild.as
 * org.apache.flex.core.IChild
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.flex.core.IChild');

goog.require('org.apache.flex.core.IRenderedObject');



/**
 * @interface
 * @extends {org.apache.flex.core.IRenderedObject}
 */
org.apache.flex.core.IChild = function() {
};
/**  * @type {org.apache.flex.core.IParent}
 */org.apache.flex.core.IChild.prototype.parent;


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.flex.core.IChild.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'IChild', qName: 'org.apache.flex.core.IChild', kind: 'interface' }], interfaces: [org.apache.flex.core.IRenderedObject] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.flex.core.IChild', org.apache.flex.core.IChild);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.flex.core.IChild.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'parent': { type: 'org.apache.flex.core.IParent', access: 'readonly', declaredBy: 'org.apache.flex.core.IChild', metadata: function () { return [  ]; }},
        'positioner': { type: 'org.apache.flex.core.WrappedHTMLElement', access: 'readonly', declaredBy: 'org.apache.flex.core.IChild'}
      };
    },
    methods: function () {return {};}
  };
};