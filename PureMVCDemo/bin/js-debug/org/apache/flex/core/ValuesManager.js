/**
 * Generated by Apache Flex Cross-Compiler from org\apache\flex\core\ValuesManager.as
 * org.apache.flex.core.ValuesManager
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.flex.core.ValuesManager');

goog.require('org.apache.flex.utils.Language');



/**
 *  Constructor.  This class should not be instantiated.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 * @constructor
 */
org.apache.flex.core.ValuesManager = function() {
};


/**
 * @private
 * @type {org.apache.flex.core.IValuesImpl}
 */
org.apache.flex.core.ValuesManager._valuesImpl;


org.apache.flex.core.ValuesManager.get__valuesImpl = function() {
  return org.apache.flex.core.ValuesManager._valuesImpl;
};


org.apache.flex.core.ValuesManager.set__valuesImpl = function(value) {
  org.apache.flex.core.ValuesManager._valuesImpl = value;
};


Object.defineProperties(org.apache.flex.core.ValuesManager, /** @lends {org.apache.flex.core.ValuesManager} */ {
/** @export */
valuesImpl: {
get: org.apache.flex.core.ValuesManager.get__valuesImpl,
set: org.apache.flex.core.ValuesManager.set__valuesImpl}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.flex.core.ValuesManager.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'ValuesManager', qName: 'org.apache.flex.core.ValuesManager', kind: 'class' }] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.flex.core.ValuesManager', org.apache.flex.core.ValuesManager);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.flex.core.ValuesManager.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        '|valuesImpl': { type: 'org.apache.flex.core.IValuesImpl', access: 'readwrite', declaredBy: 'org.apache.flex.core.ValuesManager'}
      };
    },
    methods: function () {
      return {
        'ValuesManager': { type: '', declaredBy: 'org.apache.flex.core.ValuesManager'}
      };
    }
  };
};