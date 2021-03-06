/**
 * Generated by Apache Flex Cross-Compiler from org\apache\flex\events\MouseEvent.as
 * org.apache.flex.events.MouseEvent
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.flex.events.MouseEvent');
/* FlexJS Static Dependency List: org.apache.flex.events.MouseEvent*/

goog.require('org.apache.flex.events.Event');
goog.require('org.apache.flex.events.IFlexJSEvent');
goog.require('org.apache.flex.events.utils.EventUtils');
goog.require('org.apache.flex.geom.Point');
goog.require('org.apache.flex.utils.PointUtils');
goog.require('org.apache.flex.utils.Language');



/**
 *  Constructor.
 *
 *  @asparam type The name of the event.
 *  @asparam bubbles Whether the event bubbles.
 *  @asparam cancelable Whether the event can be canceled.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 * @constructor
 * @extends {org.apache.flex.events.Event}
 * @implements {org.apache.flex.events.IFlexJSEvent}
 * @param {string} type
 * @param {boolean=} bubbles
 * @param {boolean=} cancelable
 * @param {number=} localX
 * @param {number=} localY
 * @param {Object=} relatedObject
 * @param {boolean=} ctrlKey
 * @param {boolean=} altKey
 * @param {boolean=} shiftKey
 * @param {boolean=} buttonDown
 * @param {number=} delta
 * @param {boolean=} commandKey
 * @param {boolean=} controlKey
 * @param {number=} clickCount
 * @param {org.apache.flex.events.IEventDispatcher=} targetBeforeBubbling
 */
org.apache.flex.events.MouseEvent = function(type, bubbles, cancelable, localX, localY, relatedObject, ctrlKey, altKey, shiftKey, buttonDown, delta, commandKey, controlKey, clickCount, targetBeforeBubbling) {
  bubbles = typeof bubbles !== 'undefined' ? bubbles : false;
  cancelable = typeof cancelable !== 'undefined' ? cancelable : false;
  localX = typeof localX !== 'undefined' ? localX : NaN;
  localY = typeof localY !== 'undefined' ? localY : NaN;
  relatedObject = typeof relatedObject !== 'undefined' ? relatedObject : null;
  ctrlKey = typeof ctrlKey !== 'undefined' ? ctrlKey : false;
  altKey = typeof altKey !== 'undefined' ? altKey : false;
  shiftKey = typeof shiftKey !== 'undefined' ? shiftKey : false;
  buttonDown = typeof buttonDown !== 'undefined' ? buttonDown : false;
  delta = typeof delta !== 'undefined' ? delta : 0;
  commandKey = typeof commandKey !== 'undefined' ? commandKey : false;
  controlKey = typeof controlKey !== 'undefined' ? controlKey : false;
  clickCount = typeof clickCount !== 'undefined' ? clickCount : 0;
  targetBeforeBubbling = typeof targetBeforeBubbling !== 'undefined' ? targetBeforeBubbling : null;
  org.apache.flex.events.MouseEvent.base(this, 'constructor', type, bubbles, cancelable);
  this.localX = localX;
  this.localY = localY;
  this.relatedObject = relatedObject;
  this.ctrlKey = ctrlKey;
  this.altKey = altKey;
  this.shiftKey = shiftKey;
  this.buttonDown = buttonDown;
  this.delta = delta;
  this.commandKey = commandKey;
  this.controlKey = controlKey;
  this.clickCount = clickCount;
};
goog.inherits(org.apache.flex.events.MouseEvent, org.apache.flex.events.Event);


/**
 * @private
 * @param {string} s
 * @return {string}
 */
org.apache.flex.events.MouseEvent.platformConstant = function(s) {
  return s.toLowerCase();
};


/**
 * @export
 * @const
 * @type {string}
 */
org.apache.flex.events.MouseEvent.MOUSE_DOWN;


/**
 * @export
 * @const
 * @type {string}
 */
org.apache.flex.events.MouseEvent.MOUSE_MOVE;


/**
 * @export
 * @const
 * @type {string}
 */
org.apache.flex.events.MouseEvent.MOUSE_UP;


/**
 * @export
 * @const
 * @type {string}
 */
org.apache.flex.events.MouseEvent.MOUSE_OUT;


/**
 * @export
 * @const
 * @type {string}
 */
org.apache.flex.events.MouseEvent.MOUSE_OVER;


/**
 * @export
 * @const
 * @type {string}
 */
org.apache.flex.events.MouseEvent.ROLL_OVER;


/**
 * @export
 * @const
 * @type {string}
 */
org.apache.flex.events.MouseEvent.ROLL_OUT;


/**
 * @export
 * @const
 * @type {string}
 */
org.apache.flex.events.MouseEvent.CLICK = "click";


/**
 * @export
 * @const
 * @type {string}
 */
org.apache.flex.events.MouseEvent.DOUBLE_CLICK = "dblclick";


/**
 * @export
 * @const
 * @type {string}
 */
org.apache.flex.events.MouseEvent.WHEEL = "wheel";


/**
 * @private
 * @type {number}
 */
org.apache.flex.events.MouseEvent.prototype._localX;


/**
 * @private
 * @type {number}
 */
org.apache.flex.events.MouseEvent.prototype._localY;


/**
 * @export
 * @type {Object}
 */
org.apache.flex.events.MouseEvent.prototype.relatedObject;


/**
 * @export
 * @type {boolean}
 */
org.apache.flex.events.MouseEvent.prototype.ctrlKey;


/**
 * @export
 * @type {boolean}
 */
org.apache.flex.events.MouseEvent.prototype.altKey;


/**
 * @export
 * @type {boolean}
 */
org.apache.flex.events.MouseEvent.prototype.shiftKey;


/**
 * @export
 * @type {boolean}
 */
org.apache.flex.events.MouseEvent.prototype.buttonDown;


/**
 * @export
 * @type {number}
 */
org.apache.flex.events.MouseEvent.prototype.delta = 0;


/**
 * @export
 * @type {boolean}
 */
org.apache.flex.events.MouseEvent.prototype.commandKey;


/**
 * @export
 * @type {boolean}
 */
org.apache.flex.events.MouseEvent.prototype.controlKey;


/**
 * @export
 * @type {number}
 */
org.apache.flex.events.MouseEvent.prototype.clickCount = 0;


/**
 * @private
 * @type {org.apache.flex.geom.Point}
 */
org.apache.flex.events.MouseEvent.prototype._stagePoint;


/**
 * @asprivate
 * @private
 * @return {boolean}
 */
org.apache.flex.events.MouseEvent.installRollOverMixin = function() {
  window.addEventListener(org.apache.flex.events.MouseEvent.MOUSE_OVER, org.apache.flex.events.MouseEvent.mouseOverHandler, false);
  return true;
};


/**
 * @asparam e The event.
 * RollOver/RollOut is entirely implemented in mouseOver because
 * when a parent and child share an edge, you only get a mouseout
 * for the child and not the parent and you need to send rollout
 * to both.  A similar issue exists for rollover.
 * @private
 * @param {org.apache.flex.events.MouseEvent} e
 */
org.apache.flex.events.MouseEvent.mouseOverHandler = function(e) {
  var /** @type {number} */ j = 0;
  var /** @type {number} */ m = 0;
  var /** @type {Array} */ outs;
  var /** @type {MouseEvent} */ me;
  var /** @type {Object} */ parent;
  var /** @type {Object} */ target = e.target.flexjs_wrapper;
  if (target == null)
    return;
  var /** @type {Array} */ targets = org.apache.flex.events.MouseEvent.targets;
  var /** @type {number} */ index = targets.indexOf(target);
  if (index != -1) {
    outs = targets.slice(index + 1);
    m = outs.length;
    for (j = 0; j < m; j++) {
      me = org.apache.flex.events.MouseEvent.makeMouseEvent(org.apache.flex.events.MouseEvent.ROLL_OUT, e);
      outs[j].element.dispatchEvent(me);
    }
    org.apache.flex.events.MouseEvent.targets = targets.slice(0, index + 1);
  } else {
    var /** @type {Array} */ newTargets = [target];
    if (!('parent' in target))
      parent = null;
    else
      parent = target.parent;
    while (parent) {
      index = targets.indexOf(parent);
      if (index == -1) {
        newTargets.unshift(parent);
        if (!('parent' in parent))
          break;
        parent = parent.parent;
      } else {
        outs = targets.slice(index + 1);
        m = outs.length;
        for (j = 0; j < m; j++) {
          me = org.apache.flex.events.MouseEvent.makeMouseEvent(org.apache.flex.events.MouseEvent.ROLL_OUT, e);
          outs[j].element.dispatchEvent(me);
        }
        targets = targets.slice(0, index + 1);
        break;
      }
    }
    var /** @type {number} */ n = newTargets.length;
    for (var /** @type {number} */ i = 0; i < n; i++) {
      me = org.apache.flex.events.MouseEvent.makeMouseEvent(org.apache.flex.events.MouseEvent.ROLL_OVER, e);
      newTargets[i].element.dispatchEvent(me);
    }
    org.apache.flex.events.MouseEvent.targets = targets.concat(newTargets);
  }
};


/**
 * @private
 * @type {boolean}
 */
org.apache.flex.events.MouseEvent.rollOverMixin;


/**
 * @private
 * @type {Array}
 */
org.apache.flex.events.MouseEvent.targets = [];


/**
 * @asparam {string} type The event type.
 * @asparam {Event} e The mouse event.
 * @asreturn {MouseEvent} The new event.
 * @private
 * @param {string} type
 * @return {MouseEvent}
 */
org.apache.flex.events.MouseEvent.makeMouseEvent = function(type, e) {
  var /** @type {MouseEvent} */ out = org.apache.flex.events.utils.EventUtils.createMouseEvent(type, false, false, {view:e.view, detail:e.detail, screenX:e.screenX, screenY:e.screenY, clientX:e.clientX, clientY:e.clientY, ctrlKey:e.ctrlKey, altKey:e.altKey, shiftKey:e.shiftKey, metaKey:e.metaKey, button:e.button, relatedTarget:e.relatedTarget});
  return out;
};


/**
 * Create a copy/clone of the Event object.
 *
 * @langversion 3.0
 * @playerversion Flash 10.2
 * @playerversion AIR 2.6
 * @productversion FlexJS 0.0
 * @export
 * @override
 */
org.apache.flex.events.MouseEvent.prototype.cloneEvent = function() {
  return new org.apache.flex.events.MouseEvent(this.type, this.bubbles, this.cancelable, this.localX, this.localY, this.relatedObject, this.ctrlKey, this.altKey, this.shiftKey, this.buttonDown, this.delta);
};


org.apache.flex.events.MouseEvent.prototype.get__localX = function() {
  return this._localX;
};


org.apache.flex.events.MouseEvent.prototype.set__localX = function(value) {
  this._localX = value;
  this._stagePoint = null;
};


org.apache.flex.events.MouseEvent.prototype.get__localY = function() {
  return this._localY;
};


org.apache.flex.events.MouseEvent.prototype.set__localY = function(value) {
  this._localY = value;
  this._stagePoint = null;
};


org.apache.flex.events.MouseEvent.prototype.get__targetBeforeBubbling = function() {
  return this.target;
};


org.apache.flex.events.MouseEvent.prototype.get__clientX = function() {
  return this.screenX;
};


org.apache.flex.events.MouseEvent.prototype.set__clientX = function(value) {
  this.localX = value;
};


org.apache.flex.events.MouseEvent.prototype.get__clientY = function() {
  return this.screenY;
};


org.apache.flex.events.MouseEvent.prototype.set__clientY = function(value) {
  this.localY = value;
};


org.apache.flex.events.MouseEvent.prototype.get__screenX = function() {
  if (!this.target)
    return this.localX;
  if (!this._stagePoint) {
    var /** @type {org.apache.flex.geom.Point} */ localPoint = new org.apache.flex.geom.Point(this.localX, this.localY);
    this._stagePoint = org.apache.flex.utils.PointUtils.localToGlobal(localPoint, this.target);
  }
  return this._stagePoint.x;
};


org.apache.flex.events.MouseEvent.prototype.get__screenY = function() {
  if (!this.target)
    return this.localY;
  if (!this._stagePoint) {
    var /** @type {org.apache.flex.geom.Point} */ localPoint = new org.apache.flex.geom.Point(this.localX, this.localY);
    this._stagePoint = org.apache.flex.utils.PointUtils.localToGlobal(localPoint, this.target);
  }
  return this._stagePoint.y;
};


Object.defineProperties(org.apache.flex.events.MouseEvent.prototype, /** @lends {org.apache.flex.events.MouseEvent.prototype} */ {
/** @export */
localX: {
get: org.apache.flex.events.MouseEvent.prototype.get__localX,
set: org.apache.flex.events.MouseEvent.prototype.set__localX},
/** @export */
localY: {
get: org.apache.flex.events.MouseEvent.prototype.get__localY,
set: org.apache.flex.events.MouseEvent.prototype.set__localY},
/** @export */
targetBeforeBubbling: {
get: org.apache.flex.events.MouseEvent.prototype.get__targetBeforeBubbling},
/** @export */
clientX: {
get: org.apache.flex.events.MouseEvent.prototype.get__clientX,
set: org.apache.flex.events.MouseEvent.prototype.set__clientX},
/** @export */
clientY: {
get: org.apache.flex.events.MouseEvent.prototype.get__clientY,
set: org.apache.flex.events.MouseEvent.prototype.set__clientY},
/** @export */
screenX: {
get: org.apache.flex.events.MouseEvent.prototype.get__screenX},
/** @export */
screenY: {
get: org.apache.flex.events.MouseEvent.prototype.get__screenY}}
);

org.apache.flex.events.MouseEvent.MOUSE_DOWN = org.apache.flex.events.MouseEvent.platformConstant("mouseDown");
org.apache.flex.events.MouseEvent.MOUSE_MOVE = org.apache.flex.events.MouseEvent.platformConstant("mouseMove");
org.apache.flex.events.MouseEvent.MOUSE_UP = org.apache.flex.events.MouseEvent.platformConstant("mouseUp");
org.apache.flex.events.MouseEvent.MOUSE_OUT = org.apache.flex.events.MouseEvent.platformConstant("mouseOut");
org.apache.flex.events.MouseEvent.MOUSE_OVER = org.apache.flex.events.MouseEvent.platformConstant("mouseOver");
org.apache.flex.events.MouseEvent.ROLL_OVER = org.apache.flex.events.MouseEvent.platformConstant("rollOver");
org.apache.flex.events.MouseEvent.ROLL_OUT = org.apache.flex.events.MouseEvent.platformConstant("rollOut");
org.apache.flex.events.MouseEvent.rollOverMixin = org.apache.flex.events.MouseEvent.installRollOverMixin();




/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.flex.events.MouseEvent.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'MouseEvent', qName: 'org.apache.flex.events.MouseEvent', kind: 'class' }], interfaces: [org.apache.flex.events.IFlexJSEvent] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.flex.events.MouseEvent', org.apache.flex.events.MouseEvent);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.flex.events.MouseEvent.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'relatedObject': { type: 'Object'},
        'ctrlKey': { type: 'Boolean'},
        'altKey': { type: 'Boolean'},
        'shiftKey': { type: 'Boolean'},
        'buttonDown': { type: 'Boolean'},
        'delta': { type: 'int'},
        'commandKey': { type: 'Boolean'},
        'controlKey': { type: 'Boolean'},
        'clickCount': { type: 'int'}
      };
    },
    accessors: function () {
      return {
        'localX': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.flex.events.MouseEvent'},
        'localY': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.flex.events.MouseEvent'},
        'targetBeforeBubbling': { type: 'Object', access: 'readonly', declaredBy: 'org.apache.flex.events.MouseEvent'},
        'clientX': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.flex.events.MouseEvent'},
        'clientY': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.flex.events.MouseEvent'},
        'screenX': { type: 'Number', access: 'readonly', declaredBy: 'org.apache.flex.events.MouseEvent'},
        'screenY': { type: 'Number', access: 'readonly', declaredBy: 'org.apache.flex.events.MouseEvent'}
      };
    },
    methods: function () {
      return {
        'MouseEvent': { type: '', declaredBy: 'org.apache.flex.events.MouseEvent', parameters: function () { return [  { index: 1, type: 'String', optional: false },{ index: 2, type: 'Boolean', optional: true },{ index: 3, type: 'Boolean', optional: true },{ index: 4, type: 'Number', optional: true },{ index: 5, type: 'Number', optional: true },{ index: 6, type: 'Object', optional: true },{ index: 7, type: 'Boolean', optional: true },{ index: 8, type: 'Boolean', optional: true },{ index: 9, type: 'Boolean', optional: true },{ index: 10, type: 'Boolean', optional: true },{ index: 11, type: 'int', optional: true },{ index: 12, type: 'Boolean', optional: true },{ index: 13, type: 'Boolean', optional: true },{ index: 14, type: 'int', optional: true },{ index: 15, type: 'org.apache.flex.events.IEventDispatcher', optional: true } ]; }},
        'cloneEvent': { type: 'org.apache.flex.events.IFlexJSEvent', declaredBy: 'org.apache.flex.events.MouseEvent'}
      };
    }
  };
};