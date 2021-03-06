/**
 * Generated by Apache Flex Cross-Compiler from org\apache\flex\html\beads\TextItemRendererFactoryForArrayData.as
 * org.apache.flex.html.beads.TextItemRendererFactoryForArrayData
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.flex.html.beads.TextItemRendererFactoryForArrayData');

goog.require('org.apache.flex.core.IItemRendererClassFactory');
goog.require('org.apache.flex.core.IList');
goog.require('org.apache.flex.core.ISelectionModel');
goog.require('org.apache.flex.core.ValuesManager');
goog.require('org.apache.flex.events.Event');
goog.require('org.apache.flex.events.EventDispatcher');
goog.require('org.apache.flex.events.IEventDispatcher');
goog.require('org.apache.flex.events.ItemRendererEvent');
goog.require('org.apache.flex.html.beads.ITextItemRenderer');
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
org.apache.flex.html.beads.TextItemRendererFactoryForArrayData = function(target) {
  target = typeof target !== 'undefined' ? target : null;
  org.apache.flex.html.beads.TextItemRendererFactoryForArrayData.base(this, 'constructor', target);
};
goog.inherits(org.apache.flex.html.beads.TextItemRendererFactoryForArrayData, org.apache.flex.events.EventDispatcher);


/**
 * @private
 * @type {org.apache.flex.core.ISelectionModel}
 */
org.apache.flex.html.beads.TextItemRendererFactoryForArrayData.prototype.selectionModel;


/**
 * @private
 * @type {org.apache.flex.core.IStrand}
 */
org.apache.flex.html.beads.TextItemRendererFactoryForArrayData.prototype._strand;


/**
 * @private
 * @param {org.apache.flex.events.Event} event
 */
org.apache.flex.html.beads.TextItemRendererFactoryForArrayData.prototype.finishSetup = function(event) {
  this.selectionModel = org.apache.flex.utils.Language.as(this._strand.getBeadByType(org.apache.flex.core.ISelectionModel), org.apache.flex.core.ISelectionModel);
  this.selectionModel.addEventListener("dataProviderChanged", org.apache.flex.utils.Language.closure(this.dataProviderChangeHandler, this, 'dataProviderChangeHandler'));
  if (!this.itemRendererFactory) {
    this._itemRendererFactory = org.apache.flex.utils.Language.as(this._strand.getBeadByType(org.apache.flex.core.IItemRendererClassFactory), org.apache.flex.core.IItemRendererClassFactory);
    if (!this._itemRendererFactory) {
      this._itemRendererFactory = org.apache.flex.utils.Language.as(new (org.apache.flex.core.ValuesManager["valuesImpl"].getValue(this._strand, "iItemRendererClassFactory"))(), org.apache.flex.core.IItemRendererClassFactory);
      this._strand.addBead(this._itemRendererFactory);
    }
  }
  this.dataProviderChangeHandler(null);
};


/**
 * @private
 * @type {org.apache.flex.core.IItemRendererClassFactory}
 */
org.apache.flex.html.beads.TextItemRendererFactoryForArrayData.prototype._itemRendererFactory;


/**
 *  The IItemRendererParent that should parent the ITextItemRenderers
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 * @private
 * @param {org.apache.flex.events.Event} event
 */
org.apache.flex.html.beads.TextItemRendererFactoryForArrayData.prototype.dataProviderChangeHandler = function(event) {
  var /** @type {Array} */ dp = org.apache.flex.utils.Language.as(this.selectionModel.dataProvider, Array);
  if (!dp)
    return;
  var /** @type {org.apache.flex.core.IList} */ list = org.apache.flex.utils.Language.as(this._strand, org.apache.flex.core.IList);
  var /** @type {org.apache.flex.core.IItemRendererParent} */ dataGroup = list.dataGroup;
  dataGroup.removeAllItemRenderers();
  var /** @type {number} */ n = dp.length;
  for (var /** @type {number} */ i = 0; i < n; i++) {
    var /** @type {org.apache.flex.html.beads.ITextItemRenderer} */ tf = org.apache.flex.utils.Language.as(this.itemRendererFactory.createItemRenderer(dataGroup), org.apache.flex.html.beads.ITextItemRenderer);
    tf.index = i;
    dataGroup.addItemRenderer(tf);
    if (this.selectionModel.labelField)
      tf.text = org.apache.flex.utils.Language.string(dp[i][this.selectionModel.labelField]);
    else
      tf.text = org.apache.flex.utils.Language.string(dp[i]);
    var /** @type {org.apache.flex.events.ItemRendererEvent} */ newEvent = new org.apache.flex.events.ItemRendererEvent(org.apache.flex.events.ItemRendererEvent.CREATED);
    newEvent.itemRenderer = tf;
    this.dispatchEvent(newEvent);
  }
  org.apache.flex.utils.Language.as(this._strand, org.apache.flex.events.IEventDispatcher, true).dispatchEvent(new org.apache.flex.events.Event("itemsCreated"));
};


org.apache.flex.html.beads.TextItemRendererFactoryForArrayData.prototype.set__strand = function(value) {
  this._strand = value;
  org.apache.flex.utils.Language.as(value, org.apache.flex.events.IEventDispatcher, true).addEventListener("initComplete", org.apache.flex.utils.Language.closure(this.finishSetup, this, 'finishSetup'));
};


org.apache.flex.html.beads.TextItemRendererFactoryForArrayData.prototype.get__itemRendererFactory = function() {
  return this._itemRendererFactory;
};


org.apache.flex.html.beads.TextItemRendererFactoryForArrayData.prototype.set__itemRendererFactory = function(value) {
  this._itemRendererFactory = value;
};


Object.defineProperties(org.apache.flex.html.beads.TextItemRendererFactoryForArrayData.prototype, /** @lends {org.apache.flex.html.beads.TextItemRendererFactoryForArrayData.prototype} */ {
/** @export */
strand: {
set: org.apache.flex.html.beads.TextItemRendererFactoryForArrayData.prototype.set__strand},
/** @export */
itemRendererFactory: {
get: org.apache.flex.html.beads.TextItemRendererFactoryForArrayData.prototype.get__itemRendererFactory,
set: org.apache.flex.html.beads.TextItemRendererFactoryForArrayData.prototype.set__itemRendererFactory}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.flex.html.beads.TextItemRendererFactoryForArrayData.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'TextItemRendererFactoryForArrayData', qName: 'org.apache.flex.html.beads.TextItemRendererFactoryForArrayData', kind: 'class' }], interfaces: [org.apache.flex.core.IBead, org.apache.flex.core.IDataProviderItemRendererMapper] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.flex.html.beads.TextItemRendererFactoryForArrayData', org.apache.flex.html.beads.TextItemRendererFactoryForArrayData);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.flex.html.beads.TextItemRendererFactoryForArrayData.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'strand': { type: 'org.apache.flex.core.IStrand', access: 'writeonly', declaredBy: 'org.apache.flex.html.beads.TextItemRendererFactoryForArrayData'},
        'itemRendererFactory': { type: 'org.apache.flex.core.IItemRendererClassFactory', access: 'readwrite', declaredBy: 'org.apache.flex.html.beads.TextItemRendererFactoryForArrayData'}
      };
    },
    methods: function () {
      return {
        'TextItemRendererFactoryForArrayData': { type: '', declaredBy: 'org.apache.flex.html.beads.TextItemRendererFactoryForArrayData', parameters: function () { return [  { index: 1, type: 'Object', optional: true } ]; }}
      };
    },
    metadata: function () { return [  ]; }
  };
};