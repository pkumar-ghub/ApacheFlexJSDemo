/**
 * Generated by Apache Flex Cross-Compiler from org/apache/flex/effects/IEffect.as
 * org.apache.flex.effects.IEffect
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.flex.effects.IEffect');

goog.require('org.apache.flex.events.IEventDispatcher');



/**
 * @interface
 * @extends {org.apache.flex.events.IEventDispatcher}
 */
org.apache.flex.effects.IEffect = function() {
};
/**  * @type {number}
 */org.apache.flex.effects.IEffect.prototype.duration;
org.apache.flex.effects.IEffect.prototype.reverse = function() {
};
org.apache.flex.effects.IEffect.prototype.pause = function() {
};
org.apache.flex.effects.IEffect.prototype.play = function() {
};
org.apache.flex.effects.IEffect.prototype.stop = function() {
};
org.apache.flex.effects.IEffect.prototype.resume = function() {
};
org.apache.flex.effects.IEffect.prototype.captureStartValues = function() {
};
org.apache.flex.effects.IEffect.prototype.captureEndValues = function() {
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.flex.effects.IEffect.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'IEffect', qName: 'org.apache.flex.effects.IEffect', kind: 'interface' }], interfaces: [org.apache.flex.events.IEventDispatcher] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.flex.effects.IEffect', org.apache.flex.effects.IEffect);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.flex.effects.IEffect.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'duration': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.flex.effects.IEffect'}
      };
    },
    methods: function () {
      return {
        'reverse': { type: 'void', declaredBy: 'org.apache.flex.effects.IEffect'},
        'pause': { type: 'void', declaredBy: 'org.apache.flex.effects.IEffect'},
        'play': { type: 'void', declaredBy: 'org.apache.flex.effects.IEffect'},
        'stop': { type: 'void', declaredBy: 'org.apache.flex.effects.IEffect'},
        'resume': { type: 'void', declaredBy: 'org.apache.flex.effects.IEffect'},
        'captureStartValues': { type: 'void', declaredBy: 'org.apache.flex.effects.IEffect'},
        'captureEndValues': { type: 'void', declaredBy: 'org.apache.flex.effects.IEffect'}
      };
    }
  };
};