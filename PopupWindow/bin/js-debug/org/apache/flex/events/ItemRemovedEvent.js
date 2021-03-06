/**
 * Generated by Apache Flex Cross-Compiler from org/apache/flex/events/ItemRemovedEvent.as
 * org.apache.flex.events.ItemRemovedEvent
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.flex.events.ItemRemovedEvent');

goog.require('org.apache.flex.events.CustomEvent');



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
org.apache.flex.events.ItemRemovedEvent = function(type, bubbles, cancelable) {
  org.apache.flex.events.ItemRemovedEvent.base(this, 'constructor');
  bubbles = typeof bubbles !== 'undefined' ? bubbles : false;
  cancelable = typeof cancelable !== 'undefined' ? cancelable : false;
  
  org.apache.flex.events.ItemRemovedEvent.base(this, 'constructor', type);
  this.item = null;
};
goog.inherits(org.apache.flex.events.ItemRemovedEvent, org.apache.flex.events.CustomEvent);


/**
 * @export
 * @type {Object}
 */
org.apache.flex.events.ItemRemovedEvent.prototype.item;


/**
 * @asprivate
 * @export
 * @override
 */
org.apache.flex.events.ItemRemovedEvent.prototype.cloneEvent = function() {
  var /** @type {org.apache.flex.events.ItemRemovedEvent} */ newEvent = new org.apache.flex.events.ItemRemovedEvent(this.type);
  newEvent.item = this.item;
  return newEvent;
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.flex.events.ItemRemovedEvent.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'ItemRemovedEvent', qName: 'org.apache.flex.events.ItemRemovedEvent', kind: 'class' }] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.flex.events.ItemRemovedEvent', org.apache.flex.events.ItemRemovedEvent);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.flex.events.ItemRemovedEvent.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'item': { type: 'Object'}
      };
    },
    accessors: function () {return {};},
    methods: function () {
      return {
        'ItemRemovedEvent': { type: '', declaredBy: 'org.apache.flex.events.ItemRemovedEvent', parameters: function () { return [  { index: 1, type: 'String', optional: false },{ index: 2, type: 'Boolean', optional: true },{ index: 3, type: 'Boolean', optional: true } ]; }},
        'cloneEvent': { type: 'org.apache.flex.events.IFlexJSEvent', declaredBy: 'org.apache.flex.events.ItemRemovedEvent'}
      };
    }
  };
};