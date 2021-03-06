/**
 * Generated by Apache Flex Cross-Compiler from org\apache\flex\core\IContentViewHost.as
 * org.apache.flex.core.IContentViewHost
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.flex.core.IContentViewHost');

goog.require('org.apache.flex.core.IParent');
goog.require('org.apache.flex.utils.Language');



/**
 * @interface
 * @extends {org.apache.flex.core.IParent}
 */
org.apache.flex.core.IContentViewHost = function() {
};
/**  * @type {org.apache.flex.core.IParent}
 */org.apache.flex.core.IContentViewHost.prototype.strandChildren;


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.flex.core.IContentViewHost.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'IContentViewHost', qName: 'org.apache.flex.core.IContentViewHost', kind: 'interface' }], interfaces: [org.apache.flex.core.IParent] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.flex.core.IContentViewHost', org.apache.flex.core.IContentViewHost);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.flex.core.IContentViewHost.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'strandChildren': { type: 'org.apache.flex.core.IParent', access: 'readonly', declaredBy: 'org.apache.flex.core.IContentViewHost'}
      };
    },
    methods: function () {return {};}
  };
};