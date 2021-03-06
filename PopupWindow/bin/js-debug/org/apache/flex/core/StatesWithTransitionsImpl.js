/**
 * Generated by Apache Flex Cross-Compiler from org/apache/flex/core/StatesWithTransitionsImpl.as
 * org.apache.flex.core.StatesWithTransitionsImpl
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.flex.core.StatesWithTransitionsImpl');

goog.require('org.apache.flex.core.IChild');
goog.require('org.apache.flex.core.IContainer');
goog.require('org.apache.flex.core.IParent');
goog.require('org.apache.flex.effects.Effect');
goog.require('org.apache.flex.events.Event');
goog.require('org.apache.flex.events.EventDispatcher');
goog.require('org.apache.flex.events.IEventDispatcher');
goog.require('org.apache.flex.events.ValueChangeEvent');
goog.require('org.apache.flex.states.AddItems');
goog.require('org.apache.flex.states.SetEventHandler');
goog.require('org.apache.flex.states.SetProperty');
goog.require('org.apache.flex.utils.MXMLDataInterpreter');
goog.require('org.apache.flex.core.IBead');
goog.require('org.apache.flex.core.IStatesImpl');
goog.require('org.apache.flex.utils.Language');



/**
 *  Constructor.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 * @constructor
 * @extends {org.apache.flex.events.EventDispatcher}
 * @implements {org.apache.flex.core.IStatesImpl}
 * @implements {org.apache.flex.core.IBead}
 */
org.apache.flex.core.StatesWithTransitionsImpl = function() {
  org.apache.flex.core.StatesWithTransitionsImpl.base(this, 'constructor');
};
goog.inherits(org.apache.flex.core.StatesWithTransitionsImpl, org.apache.flex.events.EventDispatcher);


/**
 * @private
 * @type {org.apache.flex.core.IStrand}
 */
org.apache.flex.core.StatesWithTransitionsImpl.prototype._strand;


/**
 * @private
 * @type {boolean}
 */
org.apache.flex.core.StatesWithTransitionsImpl.prototype.sawInitComplete;


/**
 *  @asprivate
 *  @flexjsignorecoercion org.apache.flex.core.IStatesObject
 * @private
 * @param {org.apache.flex.events.Event} event
 */
org.apache.flex.core.StatesWithTransitionsImpl.prototype.initialStateHandler = function(event) {
  this.sawInitComplete = true;
  this.stateChangeHandler(new org.apache.flex.events.ValueChangeEvent("currentStateChange", false, false, null, this._strand.currentState));
};


/**
 *  @asprivate
 *  @flexjsignorecoercion org.apache.flex.core.IStatesObject
 * @private
 * @param {org.apache.flex.events.ValueChangeEvent} event
 */
org.apache.flex.core.StatesWithTransitionsImpl.prototype.stateChangeHandler = function(event) {
  if (!this.sawInitComplete)
    return;
  var /** @type {Object} */ doc = this._strand;
  var /** @type {Array} */ transitions = doc.transitions;
  if (transitions && transitions.length > 0) {
    var foreachiter0_target = transitions;
    for (var foreachiter0 in foreachiter0_target) 
    {
    var t = foreachiter0_target[foreachiter0];
    {
      if (t.fromState == "*" || t.fromState == event.oldValue) {
        if (t.toState == "*" || t.toState == event.newValue) {
          this.transitionEffects = t.effects.slice();
          var foreachiter1_target = this.transitionEffects;
          for (var foreachiter1 in foreachiter1_target) 
          {
          var e = foreachiter1_target[foreachiter1];
          {
            e.captureStartValues();
          }}
          
          break;
        }
      }
    }}
    
  }
  var /** @type {Array} */ arr = doc.states;
  var /** @type {org.apache.flex.states.State} */ oldState;
  var /** @type {org.apache.flex.states.State} */ newState;
  var foreachiter2_target = arr;
  for (var foreachiter2 in foreachiter2_target) 
  {
  var s = foreachiter2_target[foreachiter2];
  {
    if (s.name == event.oldValue) {
      oldState = s;
      break;
    }
  }}
  
  var foreachiter3_target = arr;
  for (var foreachiter3 in foreachiter3_target) 
  {
  s = foreachiter3_target[foreachiter3];
  {
    if (s.name == event.newValue) {
      newState = s;
      break;
    }
  }}
  
  if (oldState)
    this.revert(oldState, newState);
  if (newState)
    this.apply(oldState, newState);
  if (this.transitionEffects && this.transitionEffects.length > 0) {
    var foreachiter4_target = this.transitionEffects;
    for (var foreachiter4 in foreachiter4_target) 
    {
    e = foreachiter4_target[foreachiter4];
    {
      e.captureEndValues();
    }}
    
  }
  var /** @type {boolean} */ playingTransition;
  if (this.transitionEffects && this.transitionEffects.length > 0) {
    playingTransition = true;
    var foreachiter5_target = this.transitionEffects;
    for (var foreachiter5 in foreachiter5_target) 
    {
    e = foreachiter5_target[foreachiter5];
    {
      e.addEventListener(org.apache.flex.effects.Effect.EFFECT_END, org.apache.flex.utils.Language.closure(this.effectEndHandler, this, 'effectEndHandler'));
      e.play();
    }}
    
  }
  if (!playingTransition)
    doc.dispatchEvent(new org.apache.flex.events.Event("stateChangeComplete"));
};


/**
 * @private
 * @type {Array}
 */
org.apache.flex.core.StatesWithTransitionsImpl.prototype.transitionEffects;


/**
 *  @asprivate
 *  @flexjsignorecoercion org.apache.flex.core.IStatesObject
 * @private
 * @param {org.apache.flex.events.Event} event
 */
org.apache.flex.core.StatesWithTransitionsImpl.prototype.effectEndHandler = function(event) {
  if (this.transitionEffects == null)
    return;
  var /** @type {number} */ n = this.transitionEffects.length;
  for (var /** @type {number} */ i = 0; i < n; i++) {
    event.target.removeEventListener(org.apache.flex.effects.Effect.EFFECT_END, org.apache.flex.utils.Language.closure(this.effectEndHandler, this, 'effectEndHandler'));
    if (this.transitionEffects[i] == event.target)
      this.transitionEffects.splice(i, 1);
  }
  if (this.transitionEffects.length == 0) {
    this.transitionEffects = null;
    var /** @type {Object} */ doc = this._strand;
    doc.dispatchEvent(new org.apache.flex.events.Event("stateChangeComplete"));
  }
};


/**
 * @private
 * @param {org.apache.flex.core.IChild} child
 * @param {org.apache.flex.states.State} s
 * @return {boolean}
 */
org.apache.flex.core.StatesWithTransitionsImpl.prototype.isItemInState = function(child, s) {
  if (s == null)
    return false;
  var /** @type {Array} */ arr = s.overrides;
  var foreachiter6_target = arr;
  for (var foreachiter6 in foreachiter6_target) 
  {
  var o = foreachiter6_target[foreachiter6];
  {
    if (org.apache.flex.utils.Language.is(o, org.apache.flex.states.AddItems)) {
      var /** @type {org.apache.flex.states.AddItems} */ ai = org.apache.flex.utils.Language.as(o, org.apache.flex.states.AddItems, true);
      if (ai.items == null) {
        ai.items = org.apache.flex.utils.Language.as(ai.itemsDescriptor.items, Array);
        if (ai.items == null) {
          ai.items = org.apache.flex.utils.MXMLDataInterpreter.generateMXMLArray(ai.document, null, ai.itemsDescriptor.descriptor);
          ai.itemsDescriptor.items = ai.items;
        }
      }
      var foreachiter7_target = ai.items;
      for (var foreachiter7 in foreachiter7_target) 
      {
      var item = foreachiter7_target[foreachiter7];
      {
        if (item == child)
          return true;
      }}
      
    }
  }}
  
  return false;
};


/**
 * @private
 * @param {org.apache.flex.states.State} s
 * @param {org.apache.flex.states.State} newState
 */
org.apache.flex.core.StatesWithTransitionsImpl.prototype.revert = function(s, newState) {
  var /** @type {Array} */ arr = s.overrides;
  var foreachiter8_target = arr;
  for (var foreachiter8 in foreachiter8_target) 
  {
  var o = foreachiter8_target[foreachiter8];
  {
    if (org.apache.flex.utils.Language.is(o, org.apache.flex.states.AddItems)) {
      var /** @type {org.apache.flex.states.AddItems} */ ai = org.apache.flex.utils.Language.as(o, org.apache.flex.states.AddItems, true);
      var /** @type {boolean} */ childrenAdded = false;
      var foreachiter9_target = ai.items;
      for (var foreachiter9 in foreachiter9_target) 
      {
      var item = foreachiter9_target[foreachiter9];
      {
        if (!this.isItemInState(item, newState)) {
          var /** @type {org.apache.flex.core.IParent} */ parent = org.apache.flex.utils.Language.as(item.parent, org.apache.flex.core.IParent);
          parent.removeElement(item);
          childrenAdded = true;
        }
      }}
      
      if (childrenAdded && org.apache.flex.utils.Language.is(parent, org.apache.flex.core.IContainer))
        org.apache.flex.utils.Language.as(parent, org.apache.flex.core.IContainer, true).childrenAdded();
    } else if (org.apache.flex.utils.Language.is(o, org.apache.flex.states.SetProperty)) {
      var /** @type {org.apache.flex.states.SetProperty} */ sp = org.apache.flex.utils.Language.as(o, org.apache.flex.states.SetProperty, true);
      if (sp.target != null)
        sp.document[sp.target][sp.name] = sp.previousValue;
      else
        sp.document[sp.name] = sp.previousValue;
    } else if (org.apache.flex.utils.Language.is(o, org.apache.flex.states.SetEventHandler)) {
      var /** @type {org.apache.flex.states.SetEventHandler} */ seh = org.apache.flex.utils.Language.as(o, org.apache.flex.states.SetEventHandler, true);
      if (seh.target != null) {
        seh.document[seh.target].removeEventListener(seh.name, seh.handlerFunction);
      } else {
        seh.document.removeEventListener(seh.name, seh.handlerFunction);
      }
    }
  }}
  
};


/**
 * @private
 * @param {org.apache.flex.states.State} oldState
 * @param {org.apache.flex.states.State} s
 */
org.apache.flex.core.StatesWithTransitionsImpl.prototype.apply = function(oldState, s) {
  var /** @type {Array} */ arr = s.overrides;
  var foreachiter10_target = arr;
  for (var foreachiter10 in foreachiter10_target) 
  {
  var o = foreachiter10_target[foreachiter10];
  {
    if (org.apache.flex.utils.Language.is(o, org.apache.flex.states.AddItems)) {
      var /** @type {org.apache.flex.states.AddItems} */ ai = org.apache.flex.utils.Language.as(o, org.apache.flex.states.AddItems, true);
      if (ai.items == null) {
        ai.items = org.apache.flex.utils.Language.as(ai.itemsDescriptor.items, Array);
        if (ai.items == null) {
          ai.items = org.apache.flex.utils.MXMLDataInterpreter.generateMXMLArray(ai.document, null, ai.itemsDescriptor.descriptor);
          ai.itemsDescriptor.items = ai.items;
        }
      }
      var /** @type {boolean} */ childrenAdded = false;
      var foreachiter11_target = ai.items;
      for (var foreachiter11 in foreachiter11_target) 
      {
      var item = foreachiter11_target[foreachiter11];
      {
        if (!this.isItemInState(item, oldState)) {
          var /** @type {org.apache.flex.core.IParent} */ parent = org.apache.flex.utils.Language.as(ai.document, org.apache.flex.core.IParent);
          if (ai.destination != null)
            parent = org.apache.flex.utils.Language.as(parent[ai.destination], org.apache.flex.core.IParent);
          if (ai.relativeTo != null) {
            var /** @type {org.apache.flex.core.IChild} */ child = org.apache.flex.utils.Language.as(ai.document[ai.relativeTo], org.apache.flex.core.IChild);
            if (ai.destination == null)
              parent = org.apache.flex.utils.Language.as(child.parent, org.apache.flex.core.IParent);
            var /** @type {number} */ index = parent.getElementIndex(child);
            if (ai.position == "after")
              index++;
            parent.addElementAt(item, index);
            childrenAdded = true;
          } else {
            parent.addElement(item);
            childrenAdded = true;
          }
        }
      }}
      
      if (childrenAdded && org.apache.flex.utils.Language.is(parent, org.apache.flex.core.IContainer))
        org.apache.flex.utils.Language.as(parent, org.apache.flex.core.IContainer, true).childrenAdded();
    } else if (org.apache.flex.utils.Language.is(o, org.apache.flex.states.SetProperty)) {
      var /** @type {org.apache.flex.states.SetProperty} */ sp = org.apache.flex.utils.Language.as(o, org.apache.flex.states.SetProperty, true);
      if (sp.target != null) {
        sp.previousValue = sp.document[sp.target][sp.name];
        sp.document[sp.target][sp.name] = sp.value;
      } else {
        sp.previousValue = sp.document[sp.name];
        sp.document[sp.name] = sp.value;
      }
    } else if (org.apache.flex.utils.Language.is(o, org.apache.flex.states.SetEventHandler)) {
      var /** @type {org.apache.flex.states.SetEventHandler} */ seh = org.apache.flex.utils.Language.as(o, org.apache.flex.states.SetEventHandler, true);
      if (seh.target != null) {
        seh.document[seh.target].addEventListener(seh.name, seh.handlerFunction);
      } else {
        seh.document.addEventListener(seh.name, seh.handlerFunction);
      }
    }
  }}
  
};


org.apache.flex.core.StatesWithTransitionsImpl.prototype.set__strand = function(value) {
  this._strand = value;
  org.apache.flex.utils.Language.as(this._strand, org.apache.flex.events.IEventDispatcher, true).addEventListener("currentStateChange", org.apache.flex.utils.Language.closure(this.stateChangeHandler, this, 'stateChangeHandler'));
  org.apache.flex.utils.Language.as(this._strand, org.apache.flex.events.IEventDispatcher, true).addEventListener("initComplete", org.apache.flex.utils.Language.closure(this.initialStateHandler, this, 'initialStateHandler'));
};


Object.defineProperties(org.apache.flex.core.StatesWithTransitionsImpl.prototype, /** @lends {org.apache.flex.core.StatesWithTransitionsImpl.prototype} */ {
/** @export */
strand: {
set: org.apache.flex.core.StatesWithTransitionsImpl.prototype.set__strand}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.flex.core.StatesWithTransitionsImpl.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'StatesWithTransitionsImpl', qName: 'org.apache.flex.core.StatesWithTransitionsImpl', kind: 'class' }], interfaces: [org.apache.flex.core.IStatesImpl, org.apache.flex.core.IBead] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.flex.core.StatesWithTransitionsImpl', org.apache.flex.core.StatesWithTransitionsImpl);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.flex.core.StatesWithTransitionsImpl.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'strand': { type: 'org.apache.flex.core.IStrand', access: 'writeonly', declaredBy: 'org.apache.flex.core.StatesWithTransitionsImpl'}
      };
    },
    methods: function () {
      return {
        'StatesWithTransitionsImpl': { type: '', declaredBy: 'org.apache.flex.core.StatesWithTransitionsImpl'}
      };
    }
  };
};