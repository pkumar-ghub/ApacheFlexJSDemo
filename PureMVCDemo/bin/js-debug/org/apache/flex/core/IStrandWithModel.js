/**
 * Generated by Apache Flex Cross-Compiler from org\apache\flex\core\IStrandWithModel.as
 * org.apache.flex.core.IStrandWithModel
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.flex.core.IStrandWithModel');

goog.require('org.apache.flex.core.IStrand');
goog.require('org.apache.flex.utils.Language');



/**
 * @interface
 * @extends {org.apache.flex.core.IStrand}
 */
org.apache.flex.core.IStrandWithModel = function() {
};
/**  * @type {Object}
 */org.apache.flex.core.IStrandWithModel.prototype.model;


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.flex.core.IStrandWithModel.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'IStrandWithModel', qName: 'org.apache.flex.core.IStrandWithModel', kind: 'interface' }], interfaces: [org.apache.flex.core.IStrand] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.flex.core.IStrandWithModel', org.apache.flex.core.IStrandWithModel);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.flex.core.IStrandWithModel.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'model': { type: 'Object', access: 'readonly', declaredBy: 'org.apache.flex.core.IStrandWithModel'}
      };
    },
    methods: function () {return {};}
  };
};