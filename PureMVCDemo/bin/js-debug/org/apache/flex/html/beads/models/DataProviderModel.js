/**
 * Generated by Apache Flex Cross-Compiler from org\apache\flex\html\beads\models\DataProviderModel.as
 * org.apache.flex.html.beads.models.DataProviderModel
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.flex.html.beads.models.DataProviderModel');

goog.require('org.apache.flex.events.Event');
goog.require('org.apache.flex.events.EventDispatcher');
goog.require('org.apache.flex.core.IDataProviderModel');
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
 * @implements {org.apache.flex.core.IDataProviderModel}
 */
org.apache.flex.html.beads.models.DataProviderModel = function() {
  org.apache.flex.html.beads.models.DataProviderModel.base(this, 'constructor');
};
goog.inherits(org.apache.flex.html.beads.models.DataProviderModel, org.apache.flex.events.EventDispatcher);


/**
 * @private
 * @type {org.apache.flex.core.IStrand}
 */
org.apache.flex.html.beads.models.DataProviderModel.prototype._strand;


/**
 * @private
 * @type {Object}
 */
org.apache.flex.html.beads.models.DataProviderModel.prototype._dataProvider;


/**
 * @private
 * @type {string}
 */
org.apache.flex.html.beads.models.DataProviderModel.prototype._labelField = null;


org.apache.flex.html.beads.models.DataProviderModel.prototype.set__strand = function(value) {
  this._strand = value;
};


org.apache.flex.html.beads.models.DataProviderModel.prototype.get__dataProvider = function() {
  return this._dataProvider;
};


org.apache.flex.html.beads.models.DataProviderModel.prototype.set__dataProvider = function(value) {
  if (value === this._dataProvider)
    return;
  this._dataProvider = value;
  this.dispatchEvent(new org.apache.flex.events.Event("dataProviderChanged"));
};


org.apache.flex.html.beads.models.DataProviderModel.prototype.get__labelField = function() {
  return this._labelField;
};


org.apache.flex.html.beads.models.DataProviderModel.prototype.set__labelField = function(value) {
  if (value != this._labelField) {
    this._labelField = value;
    this.dispatchEvent(new org.apache.flex.events.Event("labelFieldChanged"));
  }
};


Object.defineProperties(org.apache.flex.html.beads.models.DataProviderModel.prototype, /** @lends {org.apache.flex.html.beads.models.DataProviderModel.prototype} */ {
/** @export */
strand: {
set: org.apache.flex.html.beads.models.DataProviderModel.prototype.set__strand},
/** @export */
dataProvider: {
get: org.apache.flex.html.beads.models.DataProviderModel.prototype.get__dataProvider,
set: org.apache.flex.html.beads.models.DataProviderModel.prototype.set__dataProvider},
/** @export */
labelField: {
get: org.apache.flex.html.beads.models.DataProviderModel.prototype.get__labelField,
set: org.apache.flex.html.beads.models.DataProviderModel.prototype.set__labelField}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.flex.html.beads.models.DataProviderModel.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'DataProviderModel', qName: 'org.apache.flex.html.beads.models.DataProviderModel', kind: 'class' }], interfaces: [org.apache.flex.core.IDataProviderModel] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.flex.html.beads.models.DataProviderModel', org.apache.flex.html.beads.models.DataProviderModel);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.flex.html.beads.models.DataProviderModel.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'strand': { type: 'org.apache.flex.core.IStrand', access: 'writeonly', declaredBy: 'org.apache.flex.html.beads.models.DataProviderModel'},
        'dataProvider': { type: 'Object', access: 'readwrite', declaredBy: 'org.apache.flex.html.beads.models.DataProviderModel'},
        'labelField': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.flex.html.beads.models.DataProviderModel'}
      };
    },
    methods: function () {
      return {
        'DataProviderModel': { type: '', declaredBy: 'org.apache.flex.html.beads.models.DataProviderModel'}
      };
    }
  };
};