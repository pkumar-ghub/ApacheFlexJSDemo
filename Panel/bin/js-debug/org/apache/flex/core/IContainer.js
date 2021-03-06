/**
 * Generated by Apache Flex Cross-Compiler from org/apache/flex/core/IContainer.as
 * org.apache.flex.core.IContainer
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.flex.core.IContainer');

goog.require('org.apache.flex.core.IParent');



/**
 * @interface
 * @extends {org.apache.flex.core.IParent}
 */
org.apache.flex.core.IContainer = function() {
};
org.apache.flex.core.IContainer.prototype.childrenAdded = function() {
};
/**  * @type {org.apache.flex.core.IParent}
 */org.apache.flex.core.IContainer.prototype.strandChildren;


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.flex.core.IContainer.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'IContainer', qName: 'org.apache.flex.core.IContainer', kind: 'interface' }], interfaces: [org.apache.flex.core.IParent] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.flex.core.IContainer', org.apache.flex.core.IContainer);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.flex.core.IContainer.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'strandChildren': { type: 'org.apache.flex.core.IParent', access: 'readonly', declaredBy: 'org.apache.flex.core.IContainer'}
      };
    },
    methods: function () {
      return {
        'childrenAdded': { type: 'void', declaredBy: 'org.apache.flex.core.IContainer'}
      };
    }
  };
};