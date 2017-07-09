/**
 * Generated by Apache Flex Cross-Compiler from org/apache/flex/core/DataContainerBase.as
 * org.apache.flex.core.DataContainerBase
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.flex.core.DataContainerBase');

goog.require('org.apache.flex.core.ContainerBase');
goog.require('org.apache.flex.core.IDataProviderItemRendererMapper');
goog.require('org.apache.flex.core.IItemRenderer');
goog.require('org.apache.flex.core.IItemRendererClassFactory');
goog.require('org.apache.flex.core.IItemRendererParent');
goog.require('org.apache.flex.core.ValuesManager');
goog.require('org.apache.flex.events.Event');
goog.require('org.apache.flex.events.ItemAddedEvent');
goog.require('org.apache.flex.events.ItemRemovedEvent');
goog.require('org.apache.flex.html.beads.IListView');
goog.require('org.apache.flex.html.supportClasses.DataItemRenderer');
goog.require('org.apache.flex.core.IList');
goog.require('org.apache.flex.utils.Language');



/**
 *  Constructor.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 * @constructor
 * @extends {org.apache.flex.core.ContainerBase}
 * @implements {org.apache.flex.core.IItemRendererParent}
 * @implements {org.apache.flex.core.IList}
 */
org.apache.flex.core.DataContainerBase = function() {
  org.apache.flex.core.DataContainerBase.base(this, 'constructor');
};
goog.inherits(org.apache.flex.core.DataContainerBase, org.apache.flex.core.ContainerBase);


/**
 * @flexjsignorecoercion org.apache.flex.core.WrappedHTMLElement
 * @protected
 * @override
 */
org.apache.flex.core.DataContainerBase.prototype.createElement = function() {
  org.apache.flex.core.DataContainerBase.superClass_.createElement.apply(this);
  this.className = 'DataContainer';
  return this.element;
};


/**
 * @private
 * @type {boolean}
 */
org.apache.flex.core.DataContainerBase.prototype._DCinitialized;


/**
 * @asprivate
 * @export
 * @override
 */
org.apache.flex.core.DataContainerBase.prototype.addedToParent = function() {
  if (!this._DCinitialized) {
    org.apache.flex.core.ValuesManager["valuesImpl"].init(this);
    this._DCinitialized = true;
  }
  org.apache.flex.core.DataContainerBase.superClass_.addedToParent.apply(this);
  if (this.getBeadByType(org.apache.flex.core.IDataProviderItemRendererMapper) == null) {
    var /** @type {org.apache.flex.core.IDataProviderItemRendererMapper} */ mapper = org.apache.flex.utils.Language.as(new (org.apache.flex.core.ValuesManager["valuesImpl"].getValue(this, "iDataProviderItemRendererMapper"))(), org.apache.flex.core.IDataProviderItemRendererMapper);
    this.addBead(mapper);
  }
  var /** @type {org.apache.flex.core.IItemRendererClassFactory} */ itemRendererFactory = org.apache.flex.utils.Language.as(this.getBeadByType(org.apache.flex.core.IItemRendererClassFactory), org.apache.flex.core.IItemRendererClassFactory);
  if (!itemRendererFactory) {
    itemRendererFactory = org.apache.flex.utils.Language.as(new (org.apache.flex.core.ValuesManager["valuesImpl"].getValue(this, "iItemRendererClassFactory"))(), org.apache.flex.core.IItemRendererClassFactory);
    this.addBead(itemRendererFactory);
  }
  this.dispatchEvent(new org.apache.flex.events.Event("initComplete"));
};


/**
 * @private
 * @type {org.apache.flex.core.IFactory}
 */
org.apache.flex.core.DataContainerBase.prototype._itemRenderer;


/**
 * @copy org.apache.flex.core.IItemRendererParent#addItemRenderer()
 * @asprivate
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.8
 * @export
 * @param {org.apache.flex.core.IItemRenderer} renderer
 */
org.apache.flex.core.DataContainerBase.prototype.addItemRenderer = function(renderer) {
  this.addElement(renderer, true);
  var /** @type {org.apache.flex.events.ItemAddedEvent} */ newEvent = new org.apache.flex.events.ItemAddedEvent("itemAdded");
  newEvent.item = renderer;
  this.dispatchEvent(newEvent);
};


/**
 * @copy org.apache.flex.core.IItemRendererParent#removeItemRenderer()
 * @asprivate
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.8
 * @export
 * @param {org.apache.flex.core.IItemRenderer} renderer
 */
org.apache.flex.core.DataContainerBase.prototype.removeItemRenderer = function(renderer) {
  this.removeElement(renderer, true);
  var /** @type {org.apache.flex.events.ItemRemovedEvent} */ newEvent = new org.apache.flex.events.ItemRemovedEvent("itemRemoved");
  newEvent.item = renderer;
  this.dispatchEvent(newEvent);
};


/**
 * @copy org.apache.flex.core.IItemRendererParent#removeAllItemRenderers()
 * @asprivate
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.8
 * @export
 */
org.apache.flex.core.DataContainerBase.prototype.removeAllItemRenderers = function() {
  while (this.numElements > 0) {
    var /** @type {org.apache.flex.core.IChild} */ child = this.getElementAt(0);
    this.removeElement(child);
  }
};


/**
 *  @copy org.apache.flex.core.IItemRendererParent#getItemRendererForIndex()
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.8
 * @export
 * @param {number} index
 * @return {org.apache.flex.core.IItemRenderer}
 */
org.apache.flex.core.DataContainerBase.prototype.getItemRendererForIndex = function(index) {
  if (index < 0 || index >= this.numElements)
    return null;
  return org.apache.flex.utils.Language.as(this.getElementAt(index), org.apache.flex.core.IItemRenderer);
};


/**
 *  Refreshes the itemRenderers. Useful after a size change by the data group.
 *
 *  @copy org.apache.flex.core.IItemRendererParent#updateAllItemRenderers()
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.8
 * @export
 */
org.apache.flex.core.DataContainerBase.prototype.updateAllItemRenderers = function() {
  var /** @type {number} */ n = this.numElements;
  for (var /** @type {number} */ i = 0; i < n; i++) {
    var /** @type {org.apache.flex.html.supportClasses.DataItemRenderer} */ renderer = org.apache.flex.utils.Language.as(this.getItemRendererForIndex(i), org.apache.flex.html.supportClasses.DataItemRenderer);
    if (renderer) {
      renderer.setWidth(this.width, true);
      renderer.adjustSize();
    }
  }
};


org.apache.flex.core.DataContainerBase.prototype.get__dataGroup = function() {
  return org.apache.flex.utils.Language.as(this.view, org.apache.flex.html.beads.IListView).dataGroup;
};


org.apache.flex.core.DataContainerBase.prototype.get__itemRenderer = function() {
  return this._itemRenderer;
};


org.apache.flex.core.DataContainerBase.prototype.set__itemRenderer = function(value) {
  this._itemRenderer = value;
};


org.apache.flex.core.DataContainerBase.prototype.get__hasItemRenderer = function() {
  var /** @type {boolean} */ result = false;
  
  var /** @type {*} */ test = this._itemRenderer;
  result = this._itemRenderer !== null && test !== undefined;
  return result;
};


Object.defineProperties(org.apache.flex.core.DataContainerBase.prototype, /** @lends {org.apache.flex.core.DataContainerBase.prototype} */ {
/** @export */
dataGroup: {
get: org.apache.flex.core.DataContainerBase.prototype.get__dataGroup},
/** @export */
itemRenderer: {
get: org.apache.flex.core.DataContainerBase.prototype.get__itemRenderer,
set: org.apache.flex.core.DataContainerBase.prototype.set__itemRenderer},
/** @export */
hasItemRenderer: {
get: org.apache.flex.core.DataContainerBase.prototype.get__hasItemRenderer}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.flex.core.DataContainerBase.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'DataContainerBase', qName: 'org.apache.flex.core.DataContainerBase', kind: 'class' }], interfaces: [org.apache.flex.core.IItemRendererParent, org.apache.flex.core.IList] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.flex.core.DataContainerBase', org.apache.flex.core.DataContainerBase);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.flex.core.DataContainerBase.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'dataGroup': { type: 'org.apache.flex.core.IItemRendererParent', access: 'readonly', declaredBy: 'org.apache.flex.core.DataContainerBase'},
        'itemRenderer': { type: 'org.apache.flex.core.IFactory', access: 'readwrite', declaredBy: 'org.apache.flex.core.DataContainerBase'},
        'hasItemRenderer': { type: 'Boolean', access: 'readonly', declaredBy: 'org.apache.flex.core.DataContainerBase'}
      };
    },
    methods: function () {
      return {
        'DataContainerBase': { type: '', declaredBy: 'org.apache.flex.core.DataContainerBase'},
        'addedToParent': { type: 'void', declaredBy: 'org.apache.flex.core.DataContainerBase'},
        'addItemRenderer': { type: 'void', declaredBy: 'org.apache.flex.core.DataContainerBase', parameters: function () { return [  { index: 1, type: 'org.apache.flex.core.IItemRenderer', optional: false } ]; }},
        'removeItemRenderer': { type: 'void', declaredBy: 'org.apache.flex.core.DataContainerBase', parameters: function () { return [  { index: 1, type: 'org.apache.flex.core.IItemRenderer', optional: false } ]; }},
        'removeAllItemRenderers': { type: 'void', declaredBy: 'org.apache.flex.core.DataContainerBase'},
        'getItemRendererForIndex': { type: 'org.apache.flex.core.IItemRenderer', declaredBy: 'org.apache.flex.core.DataContainerBase', parameters: function () { return [  { index: 1, type: 'int', optional: false } ]; }},
        'updateAllItemRenderers': { type: 'void', declaredBy: 'org.apache.flex.core.DataContainerBase'}
      };
    },
    metadata: function () { return [  ]; }
  };
};