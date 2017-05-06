/**
 * Generated by Apache Flex Cross-Compiler from org\apache\flex\core\IList.as
 * org.apache.flex.core.IList
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.flex.core.IList');

goog.require('org.apache.flex.core.IItemRendererProvider');
goog.require('org.apache.flex.utils.Language');



/**
 * @interface
 * @extends {org.apache.flex.core.IItemRendererProvider}
 */
org.apache.flex.core.IList = function() {
};
/**  * @type {org.apache.flex.core.IItemRendererParent}
 */org.apache.flex.core.IList.prototype.dataGroup;


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.flex.core.IList.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'IList', qName: 'org.apache.flex.core.IList', kind: 'interface' }], interfaces: [org.apache.flex.core.IItemRendererProvider] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.flex.core.IList', org.apache.flex.core.IList);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.flex.core.IList.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'dataGroup': { type: 'org.apache.flex.core.IItemRendererParent', access: 'readonly', declaredBy: 'org.apache.flex.core.IList'}
      };
    },
    methods: function () {return {};}
  };
};