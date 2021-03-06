/**
 * Generated by Apache Flex Cross-Compiler from org/apache/flex/core/IEffectTimer.as
 * org.apache.flex.core.IEffectTimer
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.flex.core.IEffectTimer');

goog.require('org.apache.flex.events.IEventDispatcher');



/**
 * @interface
 * @extends {org.apache.flex.events.IEventDispatcher}
 */
org.apache.flex.core.IEffectTimer = function() {
};
org.apache.flex.core.IEffectTimer.prototype.start = function() {
};
org.apache.flex.core.IEffectTimer.prototype.stop = function() {
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.flex.core.IEffectTimer.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'IEffectTimer', qName: 'org.apache.flex.core.IEffectTimer', kind: 'interface' }], interfaces: [org.apache.flex.events.IEventDispatcher] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.flex.core.IEffectTimer', org.apache.flex.core.IEffectTimer);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.flex.core.IEffectTimer.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    accessors: function () {return {};},
    methods: function () {
      return {
        'start': { type: 'int', declaredBy: 'org.apache.flex.core.IEffectTimer'},
        'stop': { type: 'void', declaredBy: 'org.apache.flex.core.IEffectTimer'}
      };
    }
  };
};