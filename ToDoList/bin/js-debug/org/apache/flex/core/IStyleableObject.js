/**
 * Generated by Apache Flex Cross-Compiler from org/apache/flex/core/IStyleableObject.as
 * org.apache.flex.core.IStyleableObject
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.flex.core.IStyleableObject');

goog.require('org.apache.flex.events.IEventDispatcher');



/**
 * @interface
 * @extends {org.apache.flex.events.IEventDispatcher}
 */
org.apache.flex.core.IStyleableObject = function() {
};
/**  * @type {string}
 */org.apache.flex.core.IStyleableObject.prototype.className;


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.flex.core.IStyleableObject.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'IStyleableObject', qName: 'org.apache.flex.core.IStyleableObject', kind: 'interface' }], interfaces: [org.apache.flex.events.IEventDispatcher] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.flex.core.IStyleableObject', org.apache.flex.core.IStyleableObject);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.flex.core.IStyleableObject.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'className': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.flex.core.IStyleableObject'},
        'id': { type: 'String', access: 'readonly', declaredBy: 'org.apache.flex.core.IStyleableObject'},
        'style': { type: 'Object', access: 'readonly', declaredBy: 'org.apache.flex.core.IStyleableObject'}
      };
    },
    methods: function () {return {};}
  };
};