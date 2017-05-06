/**
 * Generated by Apache Flex Cross-Compiler from org\apache\flex\collections\ArrayList.as
 * org.apache.flex.collections.ArrayList
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.flex.collections.ArrayList');

goog.require('org.apache.flex.events.CollectionEvent');
goog.require('org.apache.flex.events.Event');
goog.require('org.apache.flex.events.EventDispatcher');
goog.require('org.apache.flex.collections.IArrayList');
goog.require('org.apache.flex.collections.ICollection');
goog.require('org.apache.flex.core.IBead');



/**
 *  Constructor.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 * @constructor
 * @extends {org.apache.flex.events.EventDispatcher}
 * @implements {org.apache.flex.core.IBead}
 * @implements {org.apache.flex.collections.ICollection}
 * @implements {org.apache.flex.collections.IArrayList}
 * @param {Array=} initialSource
 */
org.apache.flex.collections.ArrayList = function(initialSource) {
  initialSource = typeof initialSource !== 'undefined' ? initialSource : null;
  org.apache.flex.collections.ArrayList.base(this, 'constructor');
  if (initialSource)
    this._source = initialSource;
  else
    this._source = [];
};
goog.inherits(org.apache.flex.collections.ArrayList, org.apache.flex.events.EventDispatcher);


/**
 * @private
 * @type {string}
 */
org.apache.flex.collections.ArrayList.prototype._id;


/**
 * @private
 * @type {org.apache.flex.core.IStrand}
 */
org.apache.flex.collections.ArrayList.prototype._strand;


/**
 * @private
 * @type {Array}
 */
org.apache.flex.collections.ArrayList.prototype._source;


/**
 * Returns a copy of the source array.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 * @export
 * @return {Array}
 */
org.apache.flex.collections.ArrayList.prototype.toArray = function() {
  return this._source.concat();
};


/**
 *  Fetches an item from the collection
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 * @export
 * @param {number} index
 * @return {Object}
 */
org.apache.flex.collections.ArrayList.prototype.getItemAt = function(index) {
  return this._source[index];
};


/**
 *  Fetches an item from the collection given an index.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 * @export
 * @param {Object} item
 * @return {number}
 */
org.apache.flex.collections.ArrayList.prototype.getItemIndex = function(item) {
  for (var /** @type {number} */ index = 0; index < this._source.length; index++) {
    if (item == this._source[index]) {
      return index;
    }
  }
  return -1;
};


/**
 *  Adds an item to the end of the array.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 * @export
 * @param {Object} item
 */
org.apache.flex.collections.ArrayList.prototype.addItem = function(item) {
  this.addItemAt(item, this.length);
};


/**
 *  Inserts an item to a specific location within the array.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 * @export
 * @param {Object} item
 * @param {number} index
 */
org.apache.flex.collections.ArrayList.prototype.addItemAt = function(item, index) {
  
/**
 * @const
 * @type {number}
 */
var spliceUpperBound = this.length;
  if (index < spliceUpperBound && index > 0) {
    this.source.splice(index, 0, item);
  } else if (index == spliceUpperBound) {
    this.source.push(item);
  } else if (index == 0) {
    this.source.unshift(item);
  } else {
    return;
  }
  var /** @type {org.apache.flex.events.CollectionEvent} */ collectionEvent = new org.apache.flex.events.CollectionEvent(org.apache.flex.events.CollectionEvent.ITEM_ADDED);
  collectionEvent.item = item;
  this.dispatchEvent(collectionEvent);
};


/**
 *  Replaces the item at the given index with a new item and
 *  returns the old item.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 * @export
 * @param {Object} item
 * @param {number} index
 * @return {Object}
 */
org.apache.flex.collections.ArrayList.prototype.setItemAt = function(item, index) {
  
/**
 * @const
 * @type {number}
 */
var spliceUpperBound = this.length;
  var /** @type {Object} */ oldItem;
  if (index >= 0 && index < spliceUpperBound) {
    oldItem = this.source[index];
    this.source[index] = item;
    var /** @type {org.apache.flex.events.CollectionEvent} */ collectionEvent = new org.apache.flex.events.CollectionEvent(org.apache.flex.events.CollectionEvent.ITEM_UPDATED);
    collectionEvent.item = item;
    this.dispatchEvent(collectionEvent);
  } else {
  }
  return oldItem;
};


/**
 *  Removed an item from the array and returns it.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 * @export
 * @param {Object} item
 * @return {boolean}
 */
org.apache.flex.collections.ArrayList.prototype.removeItem = function(item) {
  var /** @type {number} */ index = this.getItemIndex(item);
  var /** @type {boolean} */ result = index >= 0;
  if (result) {
    this.removeItemAt(index);
  }
  return result;
};


/**
 *  Removes an item from a specific location within the array and
 *  returns it.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 * @export
 * @param {number} index
 * @return {Object}
 */
org.apache.flex.collections.ArrayList.prototype.removeItemAt = function(index) {
  
/**
 * @const
 * @type {number}
 */
var spliceUpperBound = this.length - 1;
  var /** @type {Object} */ removed;
  if (index > 0 && index < spliceUpperBound) {
    removed = this.source.splice(index, 1)[0];
  } else if (index == spliceUpperBound) {
    removed = this.source.pop();
  } else if (index == 0) {
    removed = this.source.shift();
  } else {
    return null;
  }
  var /** @type {org.apache.flex.events.CollectionEvent} */ collectionEvent = new org.apache.flex.events.CollectionEvent(org.apache.flex.events.CollectionEvent.ITEM_REMOVED);
  collectionEvent.item = removed;
  this.dispatchEvent(collectionEvent);
  return removed;
};


/**
 *  Removes all of the items from the array.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 * @export
 */
org.apache.flex.collections.ArrayList.prototype.removeAll = function() {
  if (this.length > 0) {
    var /** @type {org.apache.flex.events.CollectionEvent} */ collectionEvent = new org.apache.flex.events.CollectionEvent(org.apache.flex.events.CollectionEvent.ITEM_REMOVED);
    collectionEvent.items = this.source.splice(0, this.length);
    this.dispatchEvent(collectionEvent);
  }
};


/**
 *  Signals that an item in the array has been updated.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 * @export
 * @param {Object} item
 */
org.apache.flex.collections.ArrayList.prototype.itemUpdated = function(item) {
  var /** @type {number} */ index = this.getItemIndex(item);
  if (index >= 0) {
    var /** @type {org.apache.flex.events.CollectionEvent} */ collectionEvent = new org.apache.flex.events.CollectionEvent(org.apache.flex.events.CollectionEvent.ITEM_UPDATED);
    collectionEvent.item = item;
    this.dispatchEvent(collectionEvent);
  }
};


/**
 *  Signals that an item in the array has been updated.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 * @export
 * @param {number} index
 */
org.apache.flex.collections.ArrayList.prototype.itemUpdatedAt = function(index) {
  var /** @type {org.apache.flex.events.CollectionEvent} */ collectionEvent = new org.apache.flex.events.CollectionEvent(org.apache.flex.events.CollectionEvent.ITEM_UPDATED);
  collectionEvent.item = this.getItemAt(index);
  this.dispatchEvent(collectionEvent);
};


org.apache.flex.collections.ArrayList.prototype.get__id = function() {
  return this._id;
};


org.apache.flex.collections.ArrayList.prototype.set__id = function(value) {
  if (this._id != value) {
    this._id = value;
    this.dispatchEvent(new org.apache.flex.events.Event("idChanged"));
  }
};


org.apache.flex.collections.ArrayList.prototype.set__strand = function(value) {
  this._strand = value;
  this._source = new Array();
};


org.apache.flex.collections.ArrayList.prototype.get__source = function() {
  return this._source;
};


org.apache.flex.collections.ArrayList.prototype.set__source = function(value) {
  if (this._source != value) {
    if (value == null) {
      this._source = [];
    } else {
      this._source = value;
    }
    this.dispatchEvent(new org.apache.flex.events.CollectionEvent(org.apache.flex.events.CollectionEvent.COLLECTION_CHANGED));
  }
};


org.apache.flex.collections.ArrayList.prototype.get__length = function() {
  return this._source ? this._source.length : 0;
};


Object.defineProperties(org.apache.flex.collections.ArrayList.prototype, /** @lends {org.apache.flex.collections.ArrayList.prototype} */ {
/** @export */
id: {
get: org.apache.flex.collections.ArrayList.prototype.get__id,
set: org.apache.flex.collections.ArrayList.prototype.set__id},
/** @export */
strand: {
set: org.apache.flex.collections.ArrayList.prototype.set__strand},
/** @export */
source: {
get: org.apache.flex.collections.ArrayList.prototype.get__source,
set: org.apache.flex.collections.ArrayList.prototype.set__source},
/** @export */
length: {
get: org.apache.flex.collections.ArrayList.prototype.get__length}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.flex.collections.ArrayList.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'ArrayList', qName: 'org.apache.flex.collections.ArrayList', kind: 'class' }], interfaces: [org.apache.flex.core.IBead, org.apache.flex.collections.ICollection, org.apache.flex.collections.IArrayList] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.flex.collections.ArrayList', org.apache.flex.collections.ArrayList);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.flex.collections.ArrayList.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'id': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.flex.collections.ArrayList'},
        'strand': { type: 'org.apache.flex.core.IStrand', access: 'writeonly', declaredBy: 'org.apache.flex.collections.ArrayList'},
        'source': { type: 'Array', access: 'readwrite', declaredBy: 'org.apache.flex.collections.ArrayList'},
        'length': { type: 'int', access: 'readonly', declaredBy: 'org.apache.flex.collections.ArrayList'}
      };
    },
    methods: function () {
      return {
        'ArrayList': { type: '', declaredBy: 'org.apache.flex.collections.ArrayList', parameters: function () { return [  { index: 1, type: 'Array', optional: true } ]; }},
        'toArray': { type: 'Array', declaredBy: 'org.apache.flex.collections.ArrayList'},
        'getItemAt': { type: 'Object', declaredBy: 'org.apache.flex.collections.ArrayList', parameters: function () { return [  { index: 1, type: 'int', optional: false } ]; }},
        'getItemIndex': { type: 'int', declaredBy: 'org.apache.flex.collections.ArrayList', parameters: function () { return [  { index: 1, type: 'Object', optional: false } ]; }},
        'addItem': { type: 'void', declaredBy: 'org.apache.flex.collections.ArrayList', parameters: function () { return [  { index: 1, type: 'Object', optional: false } ]; }},
        'addItemAt': { type: 'void', declaredBy: 'org.apache.flex.collections.ArrayList', parameters: function () { return [  { index: 1, type: 'Object', optional: false },{ index: 2, type: 'int', optional: false } ]; }},
        'setItemAt': { type: 'Object', declaredBy: 'org.apache.flex.collections.ArrayList', parameters: function () { return [  { index: 1, type: 'Object', optional: false },{ index: 2, type: 'int', optional: false } ]; }},
        'removeItem': { type: 'Boolean', declaredBy: 'org.apache.flex.collections.ArrayList', parameters: function () { return [  { index: 1, type: 'Object', optional: false } ]; }},
        'removeItemAt': { type: 'Object', declaredBy: 'org.apache.flex.collections.ArrayList', parameters: function () { return [  { index: 1, type: 'int', optional: false } ]; }},
        'removeAll': { type: 'void', declaredBy: 'org.apache.flex.collections.ArrayList'},
        'itemUpdated': { type: 'void', declaredBy: 'org.apache.flex.collections.ArrayList', parameters: function () { return [  { index: 1, type: 'Object', optional: false } ]; }},
        'itemUpdatedAt': { type: 'void', declaredBy: 'org.apache.flex.collections.ArrayList', parameters: function () { return [  { index: 1, type: 'int', optional: false } ]; }}
      };
    },
    metadata: function () { return [  ]; }
  };
};