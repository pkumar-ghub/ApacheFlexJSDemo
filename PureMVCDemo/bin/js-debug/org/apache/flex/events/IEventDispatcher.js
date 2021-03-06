/**
 * Generated by Apache Flex Cross-Compiler from org\apache\flex\events\IEventDispatcher.as
 * org.apache.flex.events.IEventDispatcher
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.flex.events.IEventDispatcher');



/**
 * @interface
 */
org.apache.flex.events.IEventDispatcher = function() {
};
org.apache.flex.events.IEventDispatcher.prototype.addEventListener = function(type, handler, opt_capture, opt_handlerScope) {
};
org.apache.flex.events.IEventDispatcher.prototype.removeEventListener = function(type, handler, opt_capture, opt_handlerScope) {
};
org.apache.flex.events.IEventDispatcher.prototype.hasEventListener = function(type) {
};
org.apache.flex.events.IEventDispatcher.prototype.dispatchEvent = function(event) {
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.flex.events.IEventDispatcher.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'IEventDispatcher', qName: 'org.apache.flex.events.IEventDispatcher', kind: 'interface' }] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.flex.events.IEventDispatcher', org.apache.flex.events.IEventDispatcher);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.flex.events.IEventDispatcher.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    accessors: function () {return {};},
    methods: function () {
      return {
        'addEventListener': { type: 'void', declaredBy: 'org.apache.flex.events.IEventDispatcher', parameters: function () { return [  { index: 1, type: 'String', optional: false },{ index: 2, type: 'Function', optional: false },{ index: 3, type: 'Boolean', optional: true },{ index: 4, type: 'Object', optional: true } ]; }},
        'removeEventListener': { type: 'void', declaredBy: 'org.apache.flex.events.IEventDispatcher', parameters: function () { return [  { index: 1, type: 'String', optional: false },{ index: 2, type: 'Function', optional: false },{ index: 3, type: 'Boolean', optional: true },{ index: 4, type: 'Object', optional: true } ]; }},
        'hasEventListener': { type: 'Boolean', declaredBy: 'org.apache.flex.events.IEventDispatcher', parameters: function () { return [  { index: 1, type: 'String', optional: false } ]; }},
        'dispatchEvent': { type: 'Boolean', declaredBy: 'org.apache.flex.events.IEventDispatcher', parameters: function () { return [  { index: 1, type: 'Object', optional: false } ]; }}
      };
    }
  };
};