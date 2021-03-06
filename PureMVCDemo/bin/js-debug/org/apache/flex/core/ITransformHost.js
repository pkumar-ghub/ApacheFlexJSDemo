/**
 * Generated by Apache Flex Cross-Compiler from org\apache\flex\core\ITransformHost.as
 * org.apache.flex.core.ITransformHost
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.flex.core.ITransformHost');

goog.require('org.apache.flex.core.IStrand');
goog.require('org.apache.flex.events.IEventDispatcher');
goog.require('org.apache.flex.utils.Language');



/**
 * @interface
 * @extends {org.apache.flex.core.IStrand}
 * @extends {org.apache.flex.events.IEventDispatcher}
 */
org.apache.flex.core.ITransformHost = function() {
};
/**  * @type {org.apache.flex.core.WrappedHTMLElement}
 */org.apache.flex.core.ITransformHost.prototype.transformElement;


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.flex.core.ITransformHost.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'ITransformHost', qName: 'org.apache.flex.core.ITransformHost', kind: 'interface' }], interfaces: [org.apache.flex.core.IStrand, org.apache.flex.events.IEventDispatcher] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.flex.core.ITransformHost', org.apache.flex.core.ITransformHost);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.flex.core.ITransformHost.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'transformElement': { type: 'org.apache.flex.core.WrappedHTMLElement', access: 'readonly', declaredBy: 'org.apache.flex.core.ITransformHost'}
      };
    },
    methods: function () {return {};}
  };
};