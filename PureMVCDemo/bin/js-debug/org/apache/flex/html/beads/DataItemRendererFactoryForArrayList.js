/**
 * Generated by Apache Flex Cross-Compiler from org\apache\flex\html\beads\DataItemRendererFactoryForArrayList.as
 * org.apache.flex.html.beads.DataItemRendererFactoryForArrayList
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.flex.html.beads.DataItemRendererFactoryForArrayList');

goog.require('org.apache.flex.collections.IArrayList');
goog.require('org.apache.flex.core.IDataProviderModel');
goog.require('org.apache.flex.core.IItemRendererClassFactory');
goog.require('org.apache.flex.core.IList');
goog.require('org.apache.flex.core.IListPresentationModel');
goog.require('org.apache.flex.core.ISelectableItemRenderer');
goog.require('org.apache.flex.core.SimpleCSSStyles');
goog.require('org.apache.flex.core.UIBase');
goog.require('org.apache.flex.core.ValuesManager');
goog.require('org.apache.flex.events.Event');
goog.require('org.apache.flex.events.EventDispatcher');
goog.require('org.apache.flex.events.IEventDispatcher');
goog.require('org.apache.flex.events.ItemRendererEvent');
goog.require('org.apache.flex.core.IBead');
goog.require('org.apache.flex.core.IDataProviderItemRendererMapper');
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
 * @implements {org.apache.flex.core.IBead}
 * @implements {org.apache.flex.core.IDataProviderItemRendererMapper}
 * @param {Object=} target
 */
org.apache.flex.html.beads.DataItemRendererFactoryForArrayList = function(target) {
  target = typeof target !== 'undefined' ? target : null;
  org.apache.flex.html.beads.DataItemRendererFactoryForArrayList.base(this, 'constructor', target);
};
goog.inherits(org.apache.flex.html.beads.DataItemRendererFactoryForArrayList, org.apache.flex.events.EventDispatcher);


/**
 * @protected
 * @type {org.apache.flex.core.IDataProviderModel}
 */
org.apache.flex.html.beads.DataItemRendererFactoryForArrayList.prototype.dataProviderModel;


/**
 * @protected
 * @type {string}
 */
org.apache.flex.html.beads.DataItemRendererFactoryForArrayList.prototype.labelField;


/**
 * @private
 * @type {org.apache.flex.core.IStrand}
 */
org.apache.flex.html.beads.DataItemRendererFactoryForArrayList.prototype._strand;


/**
 * @private
 * @param {org.apache.flex.events.Event} event
 */
org.apache.flex.html.beads.DataItemRendererFactoryForArrayList.prototype.finishSetup = function(event) {
  this.dataProviderModel = org.apache.flex.utils.Language.as(this._strand.getBeadByType(org.apache.flex.core.IDataProviderModel), org.apache.flex.core.IDataProviderModel);
  this.dataProviderModel.addEventListener("dataProviderChanged", org.apache.flex.utils.Language.closure(this.dataProviderChangeHandler, this, 'dataProviderChangeHandler'));
  this.labelField = this.dataProviderModel.labelField;
  this._itemRendererFactory = org.apache.flex.utils.Language.as(this._strand.getBeadByType(org.apache.flex.core.IItemRendererClassFactory), org.apache.flex.core.IItemRendererClassFactory);
  if (this.itemRendererFactory == null) {
    this._itemRendererFactory = org.apache.flex.utils.Language.as(new (org.apache.flex.core.ValuesManager["valuesImpl"].getValue(this._strand, "iItemRendererClassFactory"))(), org.apache.flex.core.IItemRendererClassFactory);
    this._strand.addBead(this._itemRendererFactory);
  }
  this.dataProviderChangeHandler(null);
};


/**
 * @private
 * @type {org.apache.flex.core.IItemRendererClassFactory}
 */
org.apache.flex.html.beads.DataItemRendererFactoryForArrayList.prototype._itemRendererFactory;


/**
 * @asprivate
 * @protected
 * @param {org.apache.flex.core.ISelectableItemRenderer} ir
 * @param {Object} data
 * @param {number} index
 */
org.apache.flex.html.beads.DataItemRendererFactoryForArrayList.prototype.setData = function(ir, data, index) {
  ir.index = index;
  ir.labelField = this.labelField;
  ir.data = data;
};


/**
 * @asprivate
 * @protected
 * @param {org.apache.flex.events.Event} event
 */
org.apache.flex.html.beads.DataItemRendererFactoryForArrayList.prototype.dataProviderChangeHandler = function(event) {
  var /** @type {org.apache.flex.collections.IArrayList} */ dp = org.apache.flex.utils.Language.as(this.dataProviderModel.dataProvider, org.apache.flex.collections.IArrayList);
  if (!dp)
    return;
  var /** @type {org.apache.flex.core.IList} */ list = org.apache.flex.utils.Language.as(this._strand, org.apache.flex.core.IList);
  var /** @type {org.apache.flex.core.IItemRendererParent} */ dataGroup = list.dataGroup;
  dataGroup.removeAllItemRenderers();
  var /** @type {org.apache.flex.core.IListPresentationModel} */ presentationModel = org.apache.flex.utils.Language.as(this._strand.getBeadByType(org.apache.flex.core.IListPresentationModel), org.apache.flex.core.IListPresentationModel);
  var /** @type {number} */ n = dp.length;
  for (var /** @type {number} */ i = 0; i < n; i++) {
    var /** @type {org.apache.flex.core.ISelectableItemRenderer} */ ir = org.apache.flex.utils.Language.as(this.itemRendererFactory.createItemRenderer(dataGroup), org.apache.flex.core.ISelectableItemRenderer);
    dataGroup.addItemRenderer(ir);
    if (presentationModel) {
      var /** @type {org.apache.flex.core.SimpleCSSStyles} */ style = new org.apache.flex.core.SimpleCSSStyles();
      style.marginBottom = presentationModel.separatorThickness;
      org.apache.flex.utils.Language.as(ir, org.apache.flex.core.UIBase, true).style = style;
      org.apache.flex.utils.Language.as(ir, org.apache.flex.core.UIBase, true).height = presentationModel.rowHeight;
      org.apache.flex.utils.Language.as(ir, org.apache.flex.core.UIBase, true).percentWidth = 100;
    }
    this.setData(ir, dp.getItemAt(i), i);
    var /** @type {org.apache.flex.events.ItemRendererEvent} */ newEvent = new org.apache.flex.events.ItemRendererEvent(org.apache.flex.events.ItemRendererEvent.CREATED);
    newEvent.itemRenderer = ir;
    this.dispatchEvent(newEvent);
  }
  org.apache.flex.utils.Language.as(this._strand, org.apache.flex.events.IEventDispatcher, true).dispatchEvent(new org.apache.flex.events.Event("itemsCreated"));
};


org.apache.flex.html.beads.DataItemRendererFactoryForArrayList.prototype.set__strand = function(value) {
  this._strand = value;
  org.apache.flex.utils.Language.as(this._strand, org.apache.flex.events.IEventDispatcher, true).addEventListener("initComplete", org.apache.flex.utils.Language.closure(this.finishSetup, this, 'finishSetup'));
};


org.apache.flex.html.beads.DataItemRendererFactoryForArrayList.prototype.get__itemRendererFactory = function() {
  return this._itemRendererFactory;
};


org.apache.flex.html.beads.DataItemRendererFactoryForArrayList.prototype.set__itemRendererFactory = function(value) {
  this._itemRendererFactory = value;
};


Object.defineProperties(org.apache.flex.html.beads.DataItemRendererFactoryForArrayList.prototype, /** @lends {org.apache.flex.html.beads.DataItemRendererFactoryForArrayList.prototype} */ {
/** @export */
strand: {
set: org.apache.flex.html.beads.DataItemRendererFactoryForArrayList.prototype.set__strand},
/** @export */
itemRendererFactory: {
get: org.apache.flex.html.beads.DataItemRendererFactoryForArrayList.prototype.get__itemRendererFactory,
set: org.apache.flex.html.beads.DataItemRendererFactoryForArrayList.prototype.set__itemRendererFactory}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.flex.html.beads.DataItemRendererFactoryForArrayList.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'DataItemRendererFactoryForArrayList', qName: 'org.apache.flex.html.beads.DataItemRendererFactoryForArrayList', kind: 'class' }], interfaces: [org.apache.flex.core.IBead, org.apache.flex.core.IDataProviderItemRendererMapper] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.flex.html.beads.DataItemRendererFactoryForArrayList', org.apache.flex.html.beads.DataItemRendererFactoryForArrayList);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.flex.html.beads.DataItemRendererFactoryForArrayList.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'strand': { type: 'org.apache.flex.core.IStrand', access: 'writeonly', declaredBy: 'org.apache.flex.html.beads.DataItemRendererFactoryForArrayList'},
        'itemRendererFactory': { type: 'org.apache.flex.core.IItemRendererClassFactory', access: 'readwrite', declaredBy: 'org.apache.flex.html.beads.DataItemRendererFactoryForArrayList'}
      };
    },
    methods: function () {
      return {
        'DataItemRendererFactoryForArrayList': { type: '', declaredBy: 'org.apache.flex.html.beads.DataItemRendererFactoryForArrayList', parameters: function () { return [  { index: 1, type: 'Object', optional: true } ]; }}
      };
    },
    metadata: function () { return [  ]; }
  };
};