/**
 * Generated by Apache Flex Cross-Compiler from org/apache/flex/core/HTMLElementWrapper.as
 * org.apache.flex.core.HTMLElementWrapper
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.flex.core.HTMLElementWrapper');
/* FlexJS Static Dependency List: org.apache.flex.core.HTMLElementWrapper,goog.events*/

goog.require('goog.events');
goog.require('org.apache.flex.core.IBead');
goog.require('org.apache.flex.core.IBeadModel');
goog.require('org.apache.flex.core.ValuesManager');
goog.require('org.apache.flex.events.BrowserEvent');
goog.require('org.apache.flex.events.ElementEvents');
goog.require('org.apache.flex.events.Event');
goog.require('org.apache.flex.events.EventDispatcher');
goog.require('org.apache.flex.events.utils.EventUtils');
goog.require('org.apache.flex.core.IStrand');
goog.require('org.apache.flex.utils.Language');



/**
 * @constructor
 * @extends {org.apache.flex.events.EventDispatcher}
 * @implements {org.apache.flex.core.IStrand}
 */
org.apache.flex.core.HTMLElementWrapper = function() {
  org.apache.flex.core.HTMLElementWrapper.base(this, 'constructor');
};
goog.inherits(org.apache.flex.core.HTMLElementWrapper, org.apache.flex.events.EventDispatcher);


/**
 * @asparam listener The listener object to call {goog.events.Listener}.
 * @asparam eventObject The event object to pass to the listener.
 * @asreturn Result of listener.
 * @export
 * @param {Object} listener
 * @param {org.apache.flex.events.BrowserEvent} eventObject
 * @return {boolean}
 */
org.apache.flex.core.HTMLElementWrapper.fireListenerOverride = function(listener, eventObject) {
  var /** @type {org.apache.flex.events.BrowserEvent} */ e = new org.apache.flex.events.BrowserEvent();
  e.wrappedEvent = eventObject;
  return org.apache.flex.core.HTMLElementWrapper.googFireListener(listener, e);
};


/**
 * Static initializer
 * @export
 * @return {boolean}
 */
org.apache.flex.core.HTMLElementWrapper.installOverride = function() {
  org.apache.flex.core.HTMLElementWrapper.googFireListener = goog.events.fireListener;
  goog.events.fireListener = org.apache.flex.core.HTMLElementWrapper.fireListenerOverride;
  return true;
};


/**
 * @export
 * @type {Function}
 */
org.apache.flex.core.HTMLElementWrapper.googFireListener;


/**
 * @export
 * @type {boolean}
 */
org.apache.flex.core.HTMLElementWrapper.installedOverride;


/**
 * @private
 * @type {org.apache.flex.core.WrappedHTMLElement}
 */
org.apache.flex.core.HTMLElementWrapper.prototype._element;


/**
 * @protected
 * @type {Object}
 */
org.apache.flex.core.HTMLElementWrapper.prototype._model;


/**
 * @protected
 * @type {Array}
 */
org.apache.flex.core.HTMLElementWrapper.prototype._beads;


/**
 * @asparam bead The new bead.
 * @export
 * @param {org.apache.flex.core.IBead} bead
 */
org.apache.flex.core.HTMLElementWrapper.prototype.addBead = function(bead) {
  if (!this._beads) {
    this._beads = org.apache.flex.utils.Language.Vector();
  }
  this._beads.push(bead);
  if (org.apache.flex.utils.Language.is(bead, org.apache.flex.core.IBeadModel)) {
    this._model = org.apache.flex.utils.Language.as(bead, org.apache.flex.core.IBeadModel);
  }
  bead.strand = this;
};


/**
 * @asparam classOrInterface The requested bead type.
 * @asreturn The bead.
 * @export
 * @param {Object} classOrInterface
 * @return {org.apache.flex.core.IBead}
 */
org.apache.flex.core.HTMLElementWrapper.prototype.getBeadByType = function(classOrInterface) {
  var /** @type {org.apache.flex.core.IBead} */ bead, /** @type {number} */ i = 0, /** @type {number} */ n = 0;
  if (!this._beads)
    return null;
  n = this._beads.length;
  for (i = 0; i < n; i++) {
    bead = this._beads[i];
    if (org.apache.flex.utils.Language.is(bead, classOrInterface)) {
      return bead;
    }
  }
  return null;
};


/**
 * @asparam bead The bead to remove.
 * @asreturn The bead.
 * @export
 * @param {org.apache.flex.core.IBead} bead
 * @return {org.apache.flex.core.IBead}
 */
org.apache.flex.core.HTMLElementWrapper.prototype.removeBead = function(bead) {
  var /** @type {number} */ i = 0, /** @type {number} */ n = 0, /** @type {Object} */ value;
  n = this._beads.length;
  for (i = 0; i < n; i++) {
    value = this._beads[i];
    if (bead === value) {
      this._beads.splice(i, 1);
      return bead;
    }
  }
  return null;
};


/**
 * @export
 * @override
 */
org.apache.flex.core.HTMLElementWrapper.prototype.addEventListener = function(type, handler, opt_capture, opt_handlerScope) {
  opt_capture = typeof opt_capture !== 'undefined' ? opt_capture : false;
  opt_handlerScope = typeof opt_handlerScope !== 'undefined' ? opt_handlerScope : null;
  var /** @type {Object} */ source = this.getActualDispatcher_(type);
  goog.events.listen(source, type, handler);
};


/**
 * @export
 * @override
 */
org.apache.flex.core.HTMLElementWrapper.prototype.removeEventListener = function(type, handler, opt_capture, opt_handlerScope) {
  opt_capture = typeof opt_capture !== 'undefined' ? opt_capture : false;
  opt_handlerScope = typeof opt_handlerScope !== 'undefined' ? opt_handlerScope : null;
  var /** @type {Object} */ source = this.getActualDispatcher_(type);
  goog.events.unlisten(source, type, handler);
};


/**
 * @private
 * @param {string} type
 * @return {Object}
 */
org.apache.flex.core.HTMLElementWrapper.prototype.getActualDispatcher_ = function(type) {
  var /** @type {Object} */ source = this;
  if (org.apache.flex.events.ElementEvents.elementEvents[type]) {
    source = this.element;
  }
  return source;
};


/**
 * @export
 * @override
 */
org.apache.flex.core.HTMLElementWrapper.prototype.hasEventListener = function(type) {
  var /** @type {Object} */ source = this.getActualDispatcher_(type);
  return goog.events.hasListener(source, type);
};


/**
 * @export
 * @override
 */
org.apache.flex.core.HTMLElementWrapper.prototype.dispatchEvent = function(e) {
  var /** @type {string} */ eventType = "";
  if (typeof(e) === 'string') {
    eventType = org.apache.flex.utils.Language.as(e, String);
    if (e === org.apache.flex.events.Event.CHANGE) {
      e = org.apache.flex.events.utils.EventUtils.createEvent(eventType);
    }
  } else {
    eventType = org.apache.flex.utils.Language.string(e.type);
    if (org.apache.flex.events.ElementEvents.elementEvents[eventType]) {
      e = org.apache.flex.events.utils.EventUtils.createEvent(eventType);
    }
  }
  var /** @type {Object} */ source = this.getActualDispatcher_(eventType);
  if (source == this) {
    return org.apache.flex.core.HTMLElementWrapper.superClass_.dispatchEvent.apply(this, [ e] );
  }
  return source.dispatchEvent(e);
};


org.apache.flex.core.HTMLElementWrapper.prototype.get__element = function() {
  return this._element;
};


org.apache.flex.core.HTMLElementWrapper.prototype.set__element = function(value) {
  this._element = value;
};


org.apache.flex.core.HTMLElementWrapper.prototype.get__model = function() {
  if (this._model == null) {
    var /** @type {Object} */ m = org.apache.flex.core.ValuesManager["valuesImpl"].getValue(this, 'iBeadModel');
    var /** @type {org.apache.flex.core.IBeadModel} */ b = new m();
    this.addBead(b);
  }
  return this._model;
};


org.apache.flex.core.HTMLElementWrapper.prototype.set__model = function(value) {
  if (this._model != value) {
    if (org.apache.flex.utils.Language.is(value, org.apache.flex.core.IBead))
      this.addBead(org.apache.flex.utils.Language.as(value, org.apache.flex.core.IBead));
    else
      this._model = value;
    this.dispatchEvent(new org.apache.flex.events.Event("modelChanged"));
  }
};


Object.defineProperties(org.apache.flex.core.HTMLElementWrapper.prototype, /** @lends {org.apache.flex.core.HTMLElementWrapper.prototype} */ {
/** @export */
element: {
get: org.apache.flex.core.HTMLElementWrapper.prototype.get__element,
set: org.apache.flex.core.HTMLElementWrapper.prototype.set__element},
/** @export */
model: {
get: org.apache.flex.core.HTMLElementWrapper.prototype.get__model,
set: org.apache.flex.core.HTMLElementWrapper.prototype.set__model}}
);

org.apache.flex.core.HTMLElementWrapper.installedOverride = org.apache.flex.core.HTMLElementWrapper.installOverride();




/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.flex.core.HTMLElementWrapper.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'HTMLElementWrapper', qName: 'org.apache.flex.core.HTMLElementWrapper', kind: 'class' }], interfaces: [org.apache.flex.core.IStrand] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.flex.core.HTMLElementWrapper', org.apache.flex.core.HTMLElementWrapper);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.flex.core.HTMLElementWrapper.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        '|googFireListener': { type: 'Function'},
        '|installedOverride': { type: 'Boolean'}
      };
    },
    accessors: function () {
      return {
        'element': { type: 'org.apache.flex.core.WrappedHTMLElement', access: 'readwrite', declaredBy: 'org.apache.flex.core.HTMLElementWrapper'},
        'model': { type: 'Object', access: 'readwrite', declaredBy: 'org.apache.flex.core.HTMLElementWrapper', metadata: function () { return [ { name: 'Bindable', args: [ { key: '', value: 'modelChanged' } ] } ]; }}
      };
    },
    methods: function () {
      return {
        '|fireListenerOverride': { type: 'Boolean', declaredBy: 'org.apache.flex.core.HTMLElementWrapper', parameters: function () { return [  { index: 1, type: 'Object', optional: false },{ index: 2, type: 'org.apache.flex.events.BrowserEvent', optional: false } ]; }},
        '|installOverride': { type: 'Boolean', declaredBy: 'org.apache.flex.core.HTMLElementWrapper'},
        'addBead': { type: 'void', declaredBy: 'org.apache.flex.core.HTMLElementWrapper', parameters: function () { return [  { index: 1, type: 'org.apache.flex.core.IBead', optional: false } ]; }},
        'getBeadByType': { type: 'org.apache.flex.core.IBead', declaredBy: 'org.apache.flex.core.HTMLElementWrapper', parameters: function () { return [  { index: 1, type: 'Class', optional: false } ]; }},
        'removeBead': { type: 'org.apache.flex.core.IBead', declaredBy: 'org.apache.flex.core.HTMLElementWrapper', parameters: function () { return [  { index: 1, type: 'org.apache.flex.core.IBead', optional: false } ]; }},
        'addEventListener': { type: 'void', declaredBy: 'org.apache.flex.core.HTMLElementWrapper', parameters: function () { return [  { index: 1, type: 'String', optional: false },{ index: 2, type: 'Function', optional: false },{ index: 3, type: 'Boolean', optional: true },{ index: 4, type: 'Object', optional: true } ]; }},
        'removeEventListener': { type: 'void', declaredBy: 'org.apache.flex.core.HTMLElementWrapper', parameters: function () { return [  { index: 1, type: 'String', optional: false },{ index: 2, type: 'Function', optional: false },{ index: 3, type: 'Boolean', optional: true },{ index: 4, type: 'Object', optional: true } ]; }},
        'hasEventListener': { type: 'Boolean', declaredBy: 'org.apache.flex.core.HTMLElementWrapper', parameters: function () { return [  { index: 1, type: 'String', optional: false } ]; }},
        'dispatchEvent': { type: 'Boolean', declaredBy: 'org.apache.flex.core.HTMLElementWrapper', parameters: function () { return [  { index: 1, type: 'Object', optional: false } ]; }}
      };
    }
  };
};