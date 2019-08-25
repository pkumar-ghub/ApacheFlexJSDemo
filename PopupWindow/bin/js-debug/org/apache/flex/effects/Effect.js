/**
 * Generated by Apache Flex Cross-Compiler from org/apache/flex/effects/Effect.as
 * org.apache.flex.effects.Effect
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.flex.effects.Effect');

goog.require('org.apache.flex.events.EventDispatcher');
goog.require('org.apache.flex.effects.IEffect');



/**
 *  Constructor.
 *
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @constructor
 * @extends {org.apache.flex.events.EventDispatcher}
 * @implements {org.apache.flex.effects.IEffect}
 */
org.apache.flex.effects.Effect = function() {
  org.apache.flex.effects.Effect.base(this, 'constructor');
};
goog.inherits(org.apache.flex.effects.Effect, org.apache.flex.events.EventDispatcher);


/**
 * @export
 * @const
 * @type {string}
 */
org.apache.flex.effects.Effect.EFFECT_END = "effectEnd";


/**
 * @export
 * @const
 * @type {string}
 */
org.apache.flex.effects.Effect.EFFECT_START = "effectStart";


/**
 * @export
 * @const
 * @type {string}
 */
org.apache.flex.effects.Effect.EFFECT_STOP = "effectStop";


/**
 * @private
 * @type {number}
 */
org.apache.flex.effects.Effect.prototype._duration = 500;


/**
 *  Plays the effect in reverse,
 *  starting from the current position of the effect.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 */
org.apache.flex.effects.Effect.prototype.reverse = function() {
};


/**
 *  Pauses the effect until you call the <code>resume()</code> method.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 */
org.apache.flex.effects.Effect.prototype.pause = function() {
};


/**
 *  Stops the tween, ending it without dispatching an event or calling
 *  the Tween's endFunction or <code>onTweenEnd()</code>. 
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 */
org.apache.flex.effects.Effect.prototype.play = function() {
};


/**
 *  Stops the tween, ending it without dispatching an event or calling
 *  the Tween's endFunction or <code>onTweenEnd()</code>. 
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 */
org.apache.flex.effects.Effect.prototype.stop = function() {
};


/**
 *  Resumes the effect after it has been paused 
 *  by a call to the <code>pause()</code> method. 
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 */
org.apache.flex.effects.Effect.prototype.resume = function() {
};


/**
 *  @copy org.apache.flex.effects.IEffect#captureStartValues
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 */
org.apache.flex.effects.Effect.prototype.captureStartValues = function() {
};


/**
 *  @copy org.apache.flex.effects.IEffect#captureEndValues
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @export
 */
org.apache.flex.effects.Effect.prototype.captureEndValues = function() {
};


org.apache.flex.effects.Effect.prototype.get__duration = function() {
  return this._duration;
};


org.apache.flex.effects.Effect.prototype.set__duration = function(value) {
  this._duration = value;
};


Object.defineProperties(org.apache.flex.effects.Effect.prototype, /** @lends {org.apache.flex.effects.Effect.prototype} */ {
/** @export */
duration: {
get: org.apache.flex.effects.Effect.prototype.get__duration,
set: org.apache.flex.effects.Effect.prototype.set__duration}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.flex.effects.Effect.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'Effect', qName: 'org.apache.flex.effects.Effect', kind: 'class' }], interfaces: [org.apache.flex.effects.IEffect] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.flex.effects.Effect', org.apache.flex.effects.Effect);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.flex.effects.Effect.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'duration': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.flex.effects.Effect'}
      };
    },
    methods: function () {
      return {
        'Effect': { type: '', declaredBy: 'org.apache.flex.effects.Effect'},
        'reverse': { type: 'void', declaredBy: 'org.apache.flex.effects.Effect'},
        'pause': { type: 'void', declaredBy: 'org.apache.flex.effects.Effect'},
        'play': { type: 'void', declaredBy: 'org.apache.flex.effects.Effect'},
        'stop': { type: 'void', declaredBy: 'org.apache.flex.effects.Effect'},
        'resume': { type: 'void', declaredBy: 'org.apache.flex.effects.Effect'},
        'captureStartValues': { type: 'void', declaredBy: 'org.apache.flex.effects.Effect'},
        'captureEndValues': { type: 'void', declaredBy: 'org.apache.flex.effects.Effect'}
      };
    }
  };
};