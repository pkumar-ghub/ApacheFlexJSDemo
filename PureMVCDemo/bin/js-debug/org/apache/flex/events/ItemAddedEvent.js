/**
 * Generated by Apache Flex Cross-Compiler from org\apache\flex\events\ItemAddedEvent.as
 * org.apache.flex.events.ItemAddedEvent
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.flex.events.ItemAddedEvent');

goog.require('org.apache.flex.events.CustomEvent');
goog.require('org.apache.flex.utils.Language');



/**
 * Constructor.
 *
 * @asparam type The name of the event.
 * @asparam bubbles Whether the event bubbles.
 * @asparam cancelable Whether the event can be canceled.
 *
 * @langversion 3.0
 * @playerversion Flash 10.2
 * @playerversion AIR 2.6
 * @productversion FlexJS 0.0
 * @constructor
 * @extends {org.apache.flex.events.CustomEvent}
 * @param {string} type
 * @param {boolean=} bubbles
 * @param {boolean=} cancelable
 */
org.apache.flex.events.ItemAddedEvent = function(type, bubbles, cancelable) {
  org.apache.flex.events.ItemAddedEvent.base(this, 'constructor');
  bubbles = typeof bubbles !== 'undefined' ? bubbles : false;
  cancelable = typeof cancelable !== 'undefined' ? cancelable : false;
  
  org.apache.flex.events.ItemAddedEvent.base(this, 'constructor', type);
  this.item = null;
};
goog.inherits(org.apache.flex.events.ItemAddedEvent, org.apache.flex.events.CustomEvent);


/**
 * @export
 * @type {Object}
 */
org.apache.flex.events.ItemAddedEvent.prototype.item;


/**
 * @asprivate
 * @export
 * @override
 */
org.apache.flex.events.ItemAddedEvent.prototype.cloneEvent = function() {
  var /** @type {org.apache.flex.events.ItemAddedEvent} */ newEvent = new org.apache.flex.events.ItemAddedEvent(this.type);
  newEvent.item = this.item;
  return newEvent;
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.flex.events.ItemAddedEvent.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'ItemAddedEvent', qName: 'org.apache.flex.events.ItemAddedEvent', kind: 'class' }] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.flex.events.ItemAddedEvent', org.apache.flex.events.ItemAddedEvent);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.flex.events.ItemAddedEvent.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'item': { type: 'Object'}
      };
    },
    accessors: function () {return {};},
    methods: function () {
      return {
        'ItemAddedEvent': { type: '', declaredBy: 'org.apache.flex.events.ItemAddedEvent', parameters: function () { return [  { index: 1, type: 'String', optional: false },{ index: 2, type: 'Boolean', optional: true },{ index: 3, type: 'Boolean', optional: true } ]; }},
        'cloneEvent': { type: 'org.apache.flex.events.IFlexJSEvent', declaredBy: 'org.apache.flex.events.ItemAddedEvent'}
      };
    }
  };
};