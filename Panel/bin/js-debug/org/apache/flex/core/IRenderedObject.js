/**
 * Generated by Apache Flex Cross-Compiler from org/apache/flex/core/IRenderedObject.as
 * org.apache.flex.core.IRenderedObject
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.flex.core.IRenderedObject');




/**
 * @interface
 */
org.apache.flex.core.IRenderedObject = function() {
};
/**  * @type {org.apache.flex.core.WrappedHTMLElement}
 */org.apache.flex.core.IRenderedObject.prototype.element;


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.flex.core.IRenderedObject.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'IRenderedObject', qName: 'org.apache.flex.core.IRenderedObject', kind: 'interface' }] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.flex.core.IRenderedObject', org.apache.flex.core.IRenderedObject);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.flex.core.IRenderedObject.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'element': { type: 'org.apache.flex.core.WrappedHTMLElement', access: 'readonly', declaredBy: 'org.apache.flex.core.IRenderedObject'}
      };
    },
    methods: function () {return {};}
  };
};