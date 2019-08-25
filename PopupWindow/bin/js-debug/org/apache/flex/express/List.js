/**
 * Generated by Apache Flex Cross-Compiler from org/apache/flex/express/List.as
 * org.apache.flex.express.List
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.flex.express.List');

goog.require('org.apache.flex.collections.ArrayList');
goog.require('org.apache.flex.core.IBead');
goog.require('org.apache.flex.events.Event');
goog.require('org.apache.flex.html.List');
goog.require('org.apache.flex.html.beads.DataItemRendererFactoryForArrayData');
goog.require('org.apache.flex.html.beads.DataItemRendererFactoryForArrayList');
goog.require('org.apache.flex.html.beads.models.ArrayListSelectionModel');
goog.require('org.apache.flex.html.beads.models.ArraySelectionModel');
goog.require('org.apache.flex.utils.Language');



/**
 * @constructor
 * @extends {org.apache.flex.html.List}
 */
org.apache.flex.express.List = function() {
  org.apache.flex.express.List.base(this, 'constructor');
};
goog.inherits(org.apache.flex.express.List, org.apache.flex.html.List);


org.apache.flex.express.List.prototype.set__dataProvider = function(value) {
  if (org.apache.flex.utils.Language.is(value, Array)) {
    if (this.model != null) {
      this.removeBead(org.apache.flex.utils.Language.as(this.model, org.apache.flex.core.IBead));
    }
    var /** @type {org.apache.flex.html.beads.models.ArraySelectionModel} */ newModel = new org.apache.flex.html.beads.models.ArraySelectionModel();
    this.addBead(newModel);
    var /** @type {Object} */ oldFactory1 = this.getBeadByType(org.apache.flex.html.beads.DataItemRendererFactoryForArrayList);
    if (oldFactory1 != null) {
      this.removeBead(org.apache.flex.utils.Language.as(oldFactory1, org.apache.flex.core.IBead));
    }
    var /** @type {org.apache.flex.html.beads.DataItemRendererFactoryForArrayData} */ newFactory1 = new org.apache.flex.html.beads.DataItemRendererFactoryForArrayData();
    this.addBead(newFactory1);
  } else if (org.apache.flex.utils.Language.is(value, org.apache.flex.collections.ArrayList)) {
    if (this.model != null) {
      this.removeBead(org.apache.flex.utils.Language.as(this.model, org.apache.flex.core.IBead));
    }
    var /** @type {org.apache.flex.html.beads.models.ArrayListSelectionModel} */ newListModel = new org.apache.flex.html.beads.models.ArrayListSelectionModel();
    this.addBead(newListModel);
    var /** @type {Object} */ oldFactory2 = this.getBeadByType(org.apache.flex.html.beads.DataItemRendererFactoryForArrayData);
    if (oldFactory2 != null) {
      this.removeBead(org.apache.flex.utils.Language.as(oldFactory2, org.apache.flex.core.IBead));
    }
    var /** @type {org.apache.flex.html.beads.DataItemRendererFactoryForArrayList} */ newFactory2 = new org.apache.flex.html.beads.DataItemRendererFactoryForArrayList();
    this.addBead(newFactory2);
  }
  org.apache.flex.express.List.superClass_.set__dataProvider.apply(this, [ value] );
  this.dispatchEvent(new org.apache.flex.events.Event("beadsAdded"));
};


Object.defineProperties(org.apache.flex.express.List.prototype, /** @lends {org.apache.flex.express.List.prototype} */ {
/** @export */
dataProvider: {
get: org.apache.flex.html.DataContainer.prototype.get__dataProvider,
set: org.apache.flex.express.List.prototype.set__dataProvider}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.flex.express.List.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'List', qName: 'org.apache.flex.express.List', kind: 'class' }] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.flex.express.List', org.apache.flex.express.List);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.flex.express.List.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'dataProvider': { type: 'Object', access: 'writeonly', declaredBy: 'org.apache.flex.express.List'}
      };
    },
    methods: function () {
      return {
        'List': { type: '', declaredBy: 'org.apache.flex.express.List'}
      };
    }
  };
};