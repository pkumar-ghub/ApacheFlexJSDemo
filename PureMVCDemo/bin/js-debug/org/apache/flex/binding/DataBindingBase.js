/**
 * Generated by Apache Flex Cross-Compiler from org\apache\flex\binding\DataBindingBase.as
 * org.apache.flex.binding.DataBindingBase
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.flex.binding.DataBindingBase');

goog.require('org.apache.flex.binding.ConstantBinding');
goog.require('org.apache.flex.binding.PropertyWatcher');
goog.require('org.apache.flex.core.IBead');
goog.require('org.apache.flex.core.IBinding');
goog.require('org.apache.flex.core.IStrand');
goog.require('org.apache.flex.events.IEventDispatcher');
goog.require('org.apache.flex.utils.Language');



/**
 *  Constructor.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 * @constructor
 * @implements {org.apache.flex.core.IBead}
 */
org.apache.flex.binding.DataBindingBase = function() {

this.deferredBindings = {};
};


/**
 * @protected
 * @type {org.apache.flex.core.IStrand}
 */
org.apache.flex.binding.DataBindingBase.prototype._strand;


/**
 * @protected
 * @type {Object}
 */
org.apache.flex.binding.DataBindingBase.prototype.deferredBindings;


/**
 * @protected
 * @param {org.apache.flex.events.Event} event
 */
org.apache.flex.binding.DataBindingBase.prototype.initBindingsHandler = function(event) {
};


/**
 * @protected
 * @param {org.apache.flex.core.IBinding} binding
 * @param {Object} bindingObject
 * @param {Object=} destinationObject
 */
org.apache.flex.binding.DataBindingBase.prototype.prepareCreatedBinding = function(binding, bindingObject, destinationObject) {
  destinationObject = typeof destinationObject !== 'undefined' ? destinationObject : null;
  if (!destinationObject) {
    destinationObject = this._strand[bindingObject.destination[0]];
  }
  var /** @type {org.apache.flex.core.IStrand} */ destination = org.apache.flex.utils.Language.as(destinationObject, org.apache.flex.core.IStrand);
  if (destination) {
    destination.addBead(org.apache.flex.utils.Language.as(binding, org.apache.flex.core.IBead));
  } else {
    if (destinationObject) {
      binding.destination = destinationObject;
      this._strand.addBead(org.apache.flex.utils.Language.as(binding, org.apache.flex.core.IBead));
    } else {
      this.deferredBindings[bindingObject.destination[0]] = binding;
      org.apache.flex.utils.Language.as(this._strand, org.apache.flex.events.IEventDispatcher, true).addEventListener("valueChange", org.apache.flex.utils.Language.closure(this.deferredBindingsHandler, this, 'deferredBindingsHandler'));
    }
  }
};


/**
 * @flexjsignorecoercion Function
 * @protected
 * @param {org.apache.flex.binding.GenericBinding} gb
 * @param {number} index
 * @param {Array} watchers
 * @param {org.apache.flex.binding.WatcherBase} parentWatcher
 */
org.apache.flex.binding.DataBindingBase.prototype.setupWatchers = function(gb, index, watchers, parentWatcher) {
  var /** @type {boolean} */ foundWatcher = false;
  var /** @type {number} */ n = watchers.length;
  for (var /** @type {number} */ i = 0; i < n; i++) {
    var /** @type {Object} */ watcher = watchers[i];
    var /** @type {boolean} */ isValidWatcher = false;
    if (typeof((watcher.bindings)) == "number") {
      isValidWatcher = (watcher.bindings == index);
    } else {
      isValidWatcher = (watcher.bindings.indexOf(index) != -1);
    }
    if (isValidWatcher) {
      var /** @type {string} */ type = org.apache.flex.utils.Language.string(watcher.type);
      var /** @type {Object} */ parentObj = this._strand;
      switch (type) {
        case "static":
          parentObj = watcher.parentObj;
          gb.staticRoot = parentObj;
          gb.isStatic = true;
          break;
        case "property":
          var /** @type {Function} */ getterFunction = watcher.getterFunction;
          if (typeof((gb.source)) === "function" && watcher.children == null) {
            getterFunction = gb.source;
          }
          var /** @type {org.apache.flex.binding.PropertyWatcher} */ pw = new org.apache.flex.binding.PropertyWatcher(this._strand, watcher.propertyName, watcher.eventNames, getterFunction);
          watcher.watcher = pw;
          if (parentWatcher) {
            pw.parentChanged(parentWatcher.value);
          } else {
            pw.parentChanged(parentObj);
          }
          if (parentWatcher) {
            parentWatcher.addChild(pw);
          }
          if (watcher.children == null) {
            pw.addBinding(gb);
          }
          foundWatcher = true;
          break;
      }
      if (watcher.children) {
        this.setupWatchers(gb, index, watcher.children.watchers, watcher.watcher);
      }
    }
  }
  if (!foundWatcher) {
    if (parentWatcher) {
      gb.valueChanged(parentWatcher.value);
    } else {
      gb.valueChanged(null);
    }
  }
};


/**
 * @protected
 * @param {Array} bindingData
 * @return {Object}
 */
org.apache.flex.binding.DataBindingBase.prototype.decodeWatcher = function(bindingData) {
  var /** @type {Object} */ watcherMap = {};
  var /** @type {Array} */ watchers = [];
  var /** @type {number} */ n = bindingData.length;
  var /** @type {number} */ index = 0;
  var /** @type {Object} */ watcherData;
  while (index < n - 1) {
    var /** @type {number} */ watcherIndex = Number(bindingData[index++]);
    var /** @type {number} */ type = Number(bindingData[index++]);
    switch (type) {
      case 0:
        watcherData = {type:"function"};
        watcherData.functionName = bindingData[index++];
        watcherData.paramFunction = bindingData[index++];
        watcherData.eventNames = bindingData[index++];
        watcherData.bindings = bindingData[index++];
        break;
      case 1:
        watcherData = {type:"static"};
        watcherData.propertyName = bindingData[index++];
        watcherData.eventNames = bindingData[index++];
        watcherData.bindings = bindingData[index++];
        watcherData.getterFunction = bindingData[index++];
        watcherData.parentObj = bindingData[index++];
        watcherMap[watcherData.propertyName] = watcherData;
        break;
      case 2:
        watcherData = {type:"property"};
        watcherData.propertyName = bindingData[index++];
        watcherData.eventNames = bindingData[index++];
        watcherData.bindings = bindingData[index++];
        watcherData.getterFunction = bindingData[index++];
        watcherMap[watcherData.propertyName] = watcherData;
        break;
      case 3:
        watcherData = {type:"xml"};
        watcherData.propertyName = bindingData[index++];
        watcherData.bindings = bindingData[index++];
        watcherMap[watcherData.propertyName] = watcherData;
        break;
    }
    watcherData.children = bindingData[index++];
    if (watcherData.children != null) {
      watcherData.children = this.decodeWatcher(watcherData.children);
    }
    watcherData.index = watcherIndex;
    watchers.push(watcherData);
  }
  return {watchers:watchers, watcherMap:watcherMap};
};


/**
 * @protected
 * @param {Object} binding
 */
org.apache.flex.binding.DataBindingBase.prototype.makeConstantBinding = function(binding) {
  var /** @type {org.apache.flex.binding.ConstantBinding} */ cb = new org.apache.flex.binding.ConstantBinding();
  cb.destinationPropertyName = org.apache.flex.utils.Language.string(binding.destination[1]);
  if (org.apache.flex.utils.Language.is(binding.source, String)) {
    cb.sourcePropertyName = org.apache.flex.utils.Language.string(binding.source);
  } else {
    cb.sourceID = org.apache.flex.utils.Language.string(binding.source[0]);
    cb.sourcePropertyName = org.apache.flex.utils.Language.string(binding.source[1]);
  }
  cb.setDocument(this._strand);
  this.prepareCreatedBinding(org.apache.flex.utils.Language.as(cb, org.apache.flex.core.IBinding), binding);
};


/**
 * @private
 * @param {org.apache.flex.events.Event} event
 */
org.apache.flex.binding.DataBindingBase.prototype.deferredBindingsHandler = function(event) {
  for (var /** @type {string} */ p in this.deferredBindings) {
    if (this._strand[p] != null) {
      var /** @type {org.apache.flex.core.IStrand} */ destination = org.apache.flex.utils.Language.as(this._strand[p], org.apache.flex.core.IStrand);
      if (destination) {
        destination.addBead(this.deferredBindings[p]);
      } else {
        var /** @type {Object} */ destObject = this._strand[p];
        if (destObject) {
          this.deferredBindings[p].destination = destObject;
          this._strand.addBead(this.deferredBindings[p]);
        } else {
          org.apache.flex.utils.Language.trace("unexpected condition in deferredBindingsHandler");
        }
      }
      delete this.deferredBindings[p];
    }
  }
};


org.apache.flex.binding.DataBindingBase.prototype.set__strand = function(value) {
  this._strand = value;
  org.apache.flex.utils.Language.as(this._strand, org.apache.flex.events.IEventDispatcher, true).addEventListener("initBindings", org.apache.flex.utils.Language.closure(this.initBindingsHandler, this, 'initBindingsHandler'));
};


Object.defineProperties(org.apache.flex.binding.DataBindingBase.prototype, /** @lends {org.apache.flex.binding.DataBindingBase.prototype} */ {
/** @export */
strand: {
set: org.apache.flex.binding.DataBindingBase.prototype.set__strand}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.flex.binding.DataBindingBase.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'DataBindingBase', qName: 'org.apache.flex.binding.DataBindingBase', kind: 'class' }], interfaces: [org.apache.flex.core.IBead] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.flex.binding.DataBindingBase', org.apache.flex.binding.DataBindingBase);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.flex.binding.DataBindingBase.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'strand': { type: 'org.apache.flex.core.IStrand', access: 'writeonly', declaredBy: 'org.apache.flex.binding.DataBindingBase'}
      };
    },
    methods: function () {
      return {
        'DataBindingBase': { type: '', declaredBy: 'org.apache.flex.binding.DataBindingBase'}
      };
    }
  };
};