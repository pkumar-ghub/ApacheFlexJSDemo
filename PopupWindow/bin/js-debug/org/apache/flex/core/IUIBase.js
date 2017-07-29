/**
 * Generated by Apache Flex Cross-Compiler from org/apache/flex/core/IUIBase.as
 * org.apache.flex.core.IUIBase
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.flex.core.IUIBase');

goog.require('org.apache.flex.events.IEventDispatcher');
goog.require('org.apache.flex.core.IChild');
goog.require('org.apache.flex.core.IStrand');



/**
 * @interface
 * @extends {org.apache.flex.core.IStrand}
 * @extends {org.apache.flex.events.IEventDispatcher}
 * @extends {org.apache.flex.core.IChild}
 */
org.apache.flex.core.IUIBase = function() {
};
org.apache.flex.core.IUIBase.prototype.addedToParent = function() {
};
/**  * @type {number}
 */org.apache.flex.core.IUIBase.prototype.alpha;


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.flex.core.IUIBase.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'IUIBase', qName: 'org.apache.flex.core.IUIBase', kind: 'interface' }], interfaces: [org.apache.flex.core.IStrand, org.apache.flex.events.IEventDispatcher, org.apache.flex.core.IChild] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.flex.core.IUIBase', org.apache.flex.core.IUIBase);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.flex.core.IUIBase.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'alpha': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.flex.core.IUIBase'},
        'x': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.flex.core.IUIBase'},
        'y': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.flex.core.IUIBase'},
        'width': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.flex.core.IUIBase'},
        'height': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.flex.core.IUIBase'},
        'visible': { type: 'Boolean', access: 'readwrite', declaredBy: 'org.apache.flex.core.IUIBase'},
        'topMostEventDispatcher': { type: 'org.apache.flex.events.IEventDispatcher', access: 'readonly', declaredBy: 'org.apache.flex.core.IUIBase'}
      };
    },
    methods: function () {
      return {
        'addedToParent': { type: 'void', declaredBy: 'org.apache.flex.core.IUIBase'}
      };
    }
  };
};