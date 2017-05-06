/**
 * Generated by Apache Flex Cross-Compiler from org\apache\flex\html\beads\layouts\LayoutChangeNotifier.as
 * org.apache.flex.html.beads.layouts.LayoutChangeNotifier
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.flex.html.beads.layouts.LayoutChangeNotifier');

goog.require('org.apache.flex.core.IBeadView');
goog.require('org.apache.flex.events.Event');
goog.require('org.apache.flex.events.IEventDispatcher');
goog.require('org.apache.flex.core.IBead');
goog.require('org.apache.flex.utils.Language');



/**
 *  constructor.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 * @constructor
 * @implements {org.apache.flex.core.IBead}
 */
org.apache.flex.html.beads.layouts.LayoutChangeNotifier = function() {
};


/**
 * @private
 * @type {org.apache.flex.core.IStrand}
 */
org.apache.flex.html.beads.layouts.LayoutChangeNotifier.prototype._strand;


/**
 * @private
 * @type {*}
 */
org.apache.flex.html.beads.layouts.LayoutChangeNotifier.prototype._value = undefined;


org.apache.flex.html.beads.layouts.LayoutChangeNotifier.prototype.set__strand = function(value) {
  this._strand = value;
};


org.apache.flex.html.beads.layouts.LayoutChangeNotifier.prototype.set__initialValue = function(value) {
  this._value = value;
};


org.apache.flex.html.beads.layouts.LayoutChangeNotifier.prototype.set__watchedProperty = function(value) {
  if (this._value !== value) {
    this._value = value;
    if (org.apache.flex.utils.Language.is(this._strand, org.apache.flex.core.IBeadView))
      org.apache.flex.utils.Language.as(this._strand, org.apache.flex.core.IBeadView, true).host.dispatchEvent(new org.apache.flex.events.Event("layoutNeeded"));
    else
      org.apache.flex.utils.Language.as(this._strand, org.apache.flex.events.IEventDispatcher, true).dispatchEvent(new org.apache.flex.events.Event("layoutNeeded"));
  }
};


Object.defineProperties(org.apache.flex.html.beads.layouts.LayoutChangeNotifier.prototype, /** @lends {org.apache.flex.html.beads.layouts.LayoutChangeNotifier.prototype} */ {
/** @export */
strand: {
set: org.apache.flex.html.beads.layouts.LayoutChangeNotifier.prototype.set__strand},
/** @export */
initialValue: {
set: org.apache.flex.html.beads.layouts.LayoutChangeNotifier.prototype.set__initialValue},
/** @export */
watchedProperty: {
set: org.apache.flex.html.beads.layouts.LayoutChangeNotifier.prototype.set__watchedProperty}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.flex.html.beads.layouts.LayoutChangeNotifier.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'LayoutChangeNotifier', qName: 'org.apache.flex.html.beads.layouts.LayoutChangeNotifier', kind: 'class' }], interfaces: [org.apache.flex.core.IBead] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.flex.html.beads.layouts.LayoutChangeNotifier', org.apache.flex.html.beads.layouts.LayoutChangeNotifier);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.flex.html.beads.layouts.LayoutChangeNotifier.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'strand': { type: 'org.apache.flex.core.IStrand', access: 'writeonly', declaredBy: 'org.apache.flex.html.beads.layouts.LayoutChangeNotifier'},
        'initialValue': { type: 'Object', access: 'writeonly', declaredBy: 'org.apache.flex.html.beads.layouts.LayoutChangeNotifier'},
        'watchedProperty': { type: 'Object', access: 'writeonly', declaredBy: 'org.apache.flex.html.beads.layouts.LayoutChangeNotifier'}
      };
    },
    methods: function () {
      return {
        'LayoutChangeNotifier': { type: '', declaredBy: 'org.apache.flex.html.beads.layouts.LayoutChangeNotifier'}
      };
    }
  };
};