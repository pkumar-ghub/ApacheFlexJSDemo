/**
 * Generated by Apache Flex Cross-Compiler from org/apache/flex/core/IBinding.as
 * org.apache.flex.core.IBinding
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.flex.core.IBinding');



/**
 * @interface
 */
org.apache.flex.core.IBinding = function() {
};
/**  * @type {Object}
 */org.apache.flex.core.IBinding.prototype.destination;


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.flex.core.IBinding.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'IBinding', qName: 'org.apache.flex.core.IBinding', kind: 'interface' }] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.flex.core.IBinding', org.apache.flex.core.IBinding);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.flex.core.IBinding.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'destination': { type: 'Object', access: 'readwrite', declaredBy: 'org.apache.flex.core.IBinding'},
        'sourceID': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.flex.core.IBinding'},
        'sourcePropertyName': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.flex.core.IBinding'},
        'destinationPropertyName': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.flex.core.IBinding'}
      };
    },
    methods: function () {return {};}
  };
};