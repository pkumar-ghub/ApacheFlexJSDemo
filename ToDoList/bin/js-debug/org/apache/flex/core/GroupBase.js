/**
 * Generated by Apache Flex Cross-Compiler from org/apache/flex/core/GroupBase.as
 * org.apache.flex.core.GroupBase
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.flex.core.GroupBase');

goog.require('org.apache.flex.core.IBeadLayout');
goog.require('org.apache.flex.core.ILayoutHost');
goog.require('org.apache.flex.core.IStatesImpl');
goog.require('org.apache.flex.core.UIBase');
goog.require('org.apache.flex.core.ValuesManager');
goog.require('org.apache.flex.events.Event');
goog.require('org.apache.flex.events.ValueChangeEvent');
goog.require('org.apache.flex.core.IContainer');
goog.require('org.apache.flex.core.IContentViewHost');
goog.require('org.apache.flex.core.ILayoutParent');
goog.require('org.apache.flex.core.ILayoutView');
goog.require('org.apache.flex.core.IStatesObject');
goog.require('org.apache.flex.utils.Language');



/**
 *  Constructor.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.8
 * @constructor
 * @extends {org.apache.flex.core.UIBase}
 * @implements {org.apache.flex.core.IStatesObject}
 * @implements {org.apache.flex.core.IContainer}
 * @implements {org.apache.flex.core.ILayoutParent}
 * @implements {org.apache.flex.core.ILayoutView}
 * @implements {org.apache.flex.core.IContentViewHost}
 */
org.apache.flex.core.GroupBase = function() {
  org.apache.flex.core.GroupBase.base(this, 'constructor');
};
goog.inherits(org.apache.flex.core.GroupBase, org.apache.flex.core.UIBase);


/**
 * @flexjsignorecoercion org.apache.flex.core.WrappedHTMLElement
 * @protected
 * @override
 */
org.apache.flex.core.GroupBase.prototype.createElement = function() {
  this.element = document.createElement('div');
  this.element.flexjs_wrapper = this;
  this.positioner = this.element;
  return this.element;
};


/**
 * @export
 * @override
 */
org.apache.flex.core.GroupBase.prototype.addedToParent = function() {
  org.apache.flex.core.GroupBase.superClass_.addedToParent.apply(this);
  var /** @type {org.apache.flex.core.IBeadLayout} */ layout = org.apache.flex.utils.Language.as(this.getBeadByType(org.apache.flex.core.IBeadLayout), org.apache.flex.core.IBeadLayout);
  if (!layout) {
    var /** @type {Object} */ c = org.apache.flex.utils.Language.as(org.apache.flex.core.ValuesManager["valuesImpl"].getValue(this, "iBeadLayout"), Object);
    if (c) {
      layout = org.apache.flex.utils.Language.as(new c(), org.apache.flex.core.IBeadLayout);
      this.addBead(layout);
    }
  }
};


/**
 *  @asprivate
 * @export
 */
org.apache.flex.core.GroupBase.prototype.childrenAdded = function() {
  this.dispatchEvent(new org.apache.flex.events.Event("childrenAdded"));
};


/**
 * Dispatches a "layoutNeeded" event
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.8
 * @export
 */
org.apache.flex.core.GroupBase.prototype.layoutNeeded = function() {
  this.dispatchEvent(new org.apache.flex.events.Event("layoutNeeded"));
};


/**
 * Returns the ILayoutHost which is its view. From ILayoutParent.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.8
 * @export
 * @return {org.apache.flex.core.ILayoutHost}
 */
org.apache.flex.core.GroupBase.prototype.getLayoutHost = function() {
  return org.apache.flex.utils.Language.as(this.view, org.apache.flex.core.ILayoutHost);
};


/**
 * @private
 * @type {Array}
 */
org.apache.flex.core.GroupBase.prototype._states;


/**
 *  <code>true</code> if the array of states
 *  contains a state with this name.
 * 
 *  @asparam state The state namem.
 *  @asreturn True if state in state array
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.8
 * @export
 * @param {string} state
 * @return {boolean}
 */
org.apache.flex.core.GroupBase.prototype.hasState = function(state) {
  var foreachiter0_target = this._states;
  for (var foreachiter0 in foreachiter0_target) 
  {
  var s = foreachiter0_target[foreachiter0];
  {
    if (s.name == state)
      return true;
  }}
  
  return false;
};


/**
 * @private
 * @type {string}
 */
org.apache.flex.core.GroupBase.prototype._currentState;


/**
 * @private
 * @type {Array}
 */
org.apache.flex.core.GroupBase.prototype._transitions;


org.apache.flex.core.GroupBase.prototype.get__strandChildren = function() {
  return this;
};


org.apache.flex.core.GroupBase.prototype.get__states = function() {
  return this._states;
};


org.apache.flex.core.GroupBase.prototype.set__states = function(value) {
  this._states = value;
  this._currentState = org.apache.flex.utils.Language.string(this._states[0].name);
  try {
    if (this.getBeadByType(org.apache.flex.core.IStatesImpl) == null) {
      var /** @type {Object} */ c = org.apache.flex.core.ValuesManager["valuesImpl"].getValue(this, "iStatesImpl");
      var /** @type {Object} */ b = new c();
      this.addBead(b);
    }
  } catch (e) {
    
  }
};


org.apache.flex.core.GroupBase.prototype.get__currentState = function() {
  return this._currentState;
};


org.apache.flex.core.GroupBase.prototype.set__currentState = function(value) {
  var /** @type {org.apache.flex.events.ValueChangeEvent} */ event = new org.apache.flex.events.ValueChangeEvent("currentStateChange", false, false, this._currentState, value);
  this._currentState = value;
  this.dispatchEvent(event);
};


org.apache.flex.core.GroupBase.prototype.get__transitions = function() {
  return this._transitions;
};


org.apache.flex.core.GroupBase.prototype.set__transitions = function(value) {
  this._transitions = value;
};


Object.defineProperties(org.apache.flex.core.GroupBase.prototype, /** @lends {org.apache.flex.core.GroupBase.prototype} */ {
/** @export */
strandChildren: {
get: org.apache.flex.core.GroupBase.prototype.get__strandChildren},
/** @export */
states: {
get: org.apache.flex.core.GroupBase.prototype.get__states,
set: org.apache.flex.core.GroupBase.prototype.set__states},
/** @export */
currentState: {
get: org.apache.flex.core.GroupBase.prototype.get__currentState,
set: org.apache.flex.core.GroupBase.prototype.set__currentState},
/** @export */
transitions: {
get: org.apache.flex.core.GroupBase.prototype.get__transitions,
set: org.apache.flex.core.GroupBase.prototype.set__transitions}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.flex.core.GroupBase.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'GroupBase', qName: 'org.apache.flex.core.GroupBase', kind: 'class' }], interfaces: [org.apache.flex.core.IStatesObject, org.apache.flex.core.IContainer, org.apache.flex.core.ILayoutParent, org.apache.flex.core.ILayoutView, org.apache.flex.core.IContentViewHost] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.flex.core.GroupBase', org.apache.flex.core.GroupBase);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.flex.core.GroupBase.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'strandChildren': { type: 'org.apache.flex.core.IParent', access: 'readonly', declaredBy: 'org.apache.flex.core.GroupBase'},
        'states': { type: 'Array', access: 'readwrite', declaredBy: 'org.apache.flex.core.GroupBase'},
        'currentState': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.flex.core.GroupBase', metadata: function () { return [ { name: 'Bindable', args: [ { key: '', value: 'currentStateChange' } ] } ]; }},
        'transitions': { type: 'Array', access: 'readwrite', declaredBy: 'org.apache.flex.core.GroupBase'}
      };
    },
    methods: function () {
      return {
        'GroupBase': { type: '', declaredBy: 'org.apache.flex.core.GroupBase'},
        'addedToParent': { type: 'void', declaredBy: 'org.apache.flex.core.GroupBase'},
        'childrenAdded': { type: 'void', declaredBy: 'org.apache.flex.core.GroupBase'},
        'layoutNeeded': { type: 'void', declaredBy: 'org.apache.flex.core.GroupBase'},
        'getLayoutHost': { type: 'org.apache.flex.core.ILayoutHost', declaredBy: 'org.apache.flex.core.GroupBase'},
        'hasState': { type: 'Boolean', declaredBy: 'org.apache.flex.core.GroupBase', parameters: function () { return [  { index: 1, type: 'String', optional: false } ]; }}
      };
    },
    metadata: function () { return [  ]; }
  };
};