/**
 * Generated by Apache Flex Cross-Compiler from org\apache\flex\core\SimpleStatesImpl.as
 * org.apache.flex.core.SimpleStatesImpl
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.flex.core.SimpleStatesImpl');

goog.require('org.apache.flex.core.IContainer');
goog.require('org.apache.flex.core.IStatesObject');
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
org.apache.flex.core.SimpleStatesImpl = function() {
  org.apache.flex.core.SimpleStatesImpl.base(this, 'constructor');
};
goog.inherits(org.apache.flex.core.SimpleStatesImpl, org.apache.flex.events.EventDispatcher);


/**
 * @private
 * @type {org.apache.flex.core.IStrand}
 */
org.apache.flex.core.SimpleStatesImpl.prototype._strand;


/**
 * @private
 * @type {boolean}
 */
org.apache.flex.core.SimpleStatesImpl.prototype.sawInitComplete;


/**
 * @private
 * @param {org.apache.flex.events.Event} event
 */
org.apache.flex.core.SimpleStatesImpl.prototype.initialStateHandler = function(event) {
  this.sawInitComplete = true;
  this.stateChangeHandler(new org.apache.flex.events.ValueChangeEvent("currentStateChange", false, false, null, org.apache.flex.utils.Language.as(this._strand, org.apache.flex.core.IStatesObject, true).currentState));
};


/**
 * @flexjsignorecoercion org.apache.flex.core.IStatesObject 
 * @private
 * @param {org.apache.flex.events.ValueChangeEvent} event
 */
org.apache.flex.core.SimpleStatesImpl.prototype.stateChangeHandler = function(event) {
  if (!this.sawInitComplete)
    return;
  var /** @type {Object} */ doc = this._strand;
  var /** @type {Array} */ arr = doc.states;
  var foreachiter0_target = arr;
  for (var foreachiter0 in foreachiter0_target) 
  {
  var s = foreachiter0_target[foreachiter0];
  {
    if (s.name == event.oldValue) {
      this.revert(s);
      break;
    }
  }}
  
  var foreachiter1_target = arr;
  for (var foreachiter1 in foreachiter1_target) 
  {
  s = foreachiter1_target[foreachiter1];
  {
    if (s.name == event.newValue) {
      this.apply(s);
      break;
    }
  }}
  
  doc.dispatchEvent(new org.apache.flex.events.Event("stateChangeComplete"));
};


/**
 * @flexjsignorecoercion org.apache.flex.core.IParent
 * @private
 * @param {org.apache.flex.states.State} s
 */
org.apache.flex.core.SimpleStatesImpl.prototype.revert = function(s) {
  var /** @type {Array} */ arr = s.overrides;
  var foreachiter2_target = arr;
  for (var foreachiter2 in foreachiter2_target) 
  {
  var o = foreachiter2_target[foreachiter2];
  {
    if (org.apache.flex.utils.Language.is(o, org.apache.flex.states.AddItems)) {
      var /** @type {org.apache.flex.states.AddItems} */ ai = org.apache.flex.utils.Language.as(o, org.apache.flex.states.AddItems, true);
      var foreachiter3_target = ai.items;
      for (var foreachiter3 in foreachiter3_target) 
      {
      var item = foreachiter3_target[foreachiter3];
      {
        var /** @type {Object} */ parent = item.parent;
        if (parent) {
          parent.removeElement(item);
        }
      }}
      
      if (org.apache.flex.utils.Language.is(parent, org.apache.flex.core.IContainer))
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
 * @flexjsignorecoercion org.apache.flex.core.IChild 
 * @flexjsignorecoercion org.apache.flex.core.IParent
 * @flexjsignorecoercion Array
 * @private
 * @param {org.apache.flex.states.State} s
 */
org.apache.flex.core.SimpleStatesImpl.prototype.apply = function(s) {
  var /** @type {Array} */ arr = s.overrides;
  var foreachiter4_target = arr;
  for (var foreachiter4 in foreachiter4_target) 
  {
  var o = foreachiter4_target[foreachiter4];
  {
    if (org.apache.flex.utils.Language.is(o, org.apache.flex.states.AddItems)) {
      var /** @type {org.apache.flex.states.AddItems} */ ai = org.apache.flex.utils.Language.as(o, org.apache.flex.states.AddItems, true);
      if (ai.items == null) {
        ai.items = ai.itemsDescriptor.items;
        if (ai.items == null) {
          ai.items = org.apache.flex.utils.MXMLDataInterpreter.generateMXMLArray(ai.document, null, ai.itemsDescriptor.descriptor);
          ai.itemsDescriptor.items = ai.items;
        }
      }
      var foreachiter5_target = ai.items;
      for (var foreachiter5 in foreachiter5_target) 
      {
      var item = foreachiter5_target[foreachiter5];
      {
        var /** @type {Object} */ parent = ai.document;
        if (ai.destination != null)
          parent = parent[ai.destination];
        if (ai.relativeTo != null) {
          var /** @type {Object} */ child = ai.document[ai.relativeTo];
          if (ai.destination == null)
            parent = child.parent;
          var /** @type {number} */ index = parent.getElementIndex(child);
          if (ai.position == "after")
            index++;
          parent.addElementAt(item, index);
        } else if (ai.position == "first") {
          parent.addElementAt(item, 0);
        } else {
          parent.addElement(item);
        }
      }}
      
      if (org.apache.flex.utils.Language.is(parent, org.apache.flex.core.IContainer))
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


org.apache.flex.core.SimpleStatesImpl.prototype.set__strand = function(value) {
  this._strand = value;
  org.apache.flex.utils.Language.as(this._strand, org.apache.flex.events.IEventDispatcher, true).addEventListener("currentStateChange", org.apache.flex.utils.Language.closure(this.stateChangeHandler, this, 'stateChangeHandler'));
  org.apache.flex.utils.Language.as(this._strand, org.apache.flex.events.IEventDispatcher, true).addEventListener("initComplete", org.apache.flex.utils.Language.closure(this.initialStateHandler, this, 'initialStateHandler'));
};


Object.defineProperties(org.apache.flex.core.SimpleStatesImpl.prototype, /** @lends {org.apache.flex.core.SimpleStatesImpl.prototype} */ {
/** @export */
strand: {
set: org.apache.flex.core.SimpleStatesImpl.prototype.set__strand}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.flex.core.SimpleStatesImpl.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'SimpleStatesImpl', qName: 'org.apache.flex.core.SimpleStatesImpl', kind: 'class' }], interfaces: [org.apache.flex.core.IStatesImpl, org.apache.flex.core.IBead] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.flex.core.SimpleStatesImpl', org.apache.flex.core.SimpleStatesImpl);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.flex.core.SimpleStatesImpl.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'strand': { type: 'org.apache.flex.core.IStrand', access: 'writeonly', declaredBy: 'org.apache.flex.core.SimpleStatesImpl'}
      };
    },
    methods: function () {
      return {
        'SimpleStatesImpl': { type: '', declaredBy: 'org.apache.flex.core.SimpleStatesImpl'}
      };
    }
  };
};