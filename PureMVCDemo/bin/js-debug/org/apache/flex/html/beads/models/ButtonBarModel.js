/**
 * Generated by Apache Flex Cross-Compiler from org\apache\flex\html\beads\models\ButtonBarModel.as
 * org.apache.flex.html.beads.models.ButtonBarModel
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.flex.html.beads.models.ButtonBarModel');

goog.require('org.apache.flex.events.Event');
goog.require('org.apache.flex.html.beads.models.ArraySelectionModel');
goog.require('org.apache.flex.utils.Language');



/**
 *  Constructor.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 * @constructor
 * @extends {org.apache.flex.html.beads.models.ArraySelectionModel}
 */
org.apache.flex.html.beads.models.ButtonBarModel = function() {
  org.apache.flex.html.beads.models.ButtonBarModel.base(this, 'constructor');

this._widthType = org.apache.flex.html.beads.models.ButtonBarModel.PIXEL_WIDTHS;
};
goog.inherits(org.apache.flex.html.beads.models.ButtonBarModel, org.apache.flex.html.beads.models.ArraySelectionModel);


/**
 * @export
 * @const
 * @type {number}
 */
org.apache.flex.html.beads.models.ButtonBarModel.PIXEL_WIDTHS = 0;


/**
 * @export
 * @const
 * @type {number}
 */
org.apache.flex.html.beads.models.ButtonBarModel.PROPORTIONAL_WIDTHS = 1;


/**
 * @export
 * @const
 * @type {number}
 */
org.apache.flex.html.beads.models.ButtonBarModel.PERCENT_WIDTHS = 2;


/**
 * @private
 * @type {Array}
 */
org.apache.flex.html.beads.models.ButtonBarModel.prototype._buttonWidths = null;


/**
 * @private
 * @type {number}
 */
org.apache.flex.html.beads.models.ButtonBarModel.prototype._widthType;


org.apache.flex.html.beads.models.ButtonBarModel.prototype.get__buttonWidths = function() {
  return this._buttonWidths;
};


org.apache.flex.html.beads.models.ButtonBarModel.prototype.set__buttonWidths = function(value) {
  this._buttonWidths = value;
  this.dispatchEvent(new org.apache.flex.events.Event("buttonWidthsChanged"));
};


org.apache.flex.html.beads.models.ButtonBarModel.prototype.get__widthType = function() {
  return this._widthType;
};


org.apache.flex.html.beads.models.ButtonBarModel.prototype.set__widthType = function(value) {
  this._widthType = value;
  this.dispatchEvent(new org.apache.flex.events.Event("widthTypeChanged"));
};


Object.defineProperties(org.apache.flex.html.beads.models.ButtonBarModel.prototype, /** @lends {org.apache.flex.html.beads.models.ButtonBarModel.prototype} */ {
/** @export */
buttonWidths: {
get: org.apache.flex.html.beads.models.ButtonBarModel.prototype.get__buttonWidths,
set: org.apache.flex.html.beads.models.ButtonBarModel.prototype.set__buttonWidths},
/** @export */
widthType: {
get: org.apache.flex.html.beads.models.ButtonBarModel.prototype.get__widthType,
set: org.apache.flex.html.beads.models.ButtonBarModel.prototype.set__widthType}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.flex.html.beads.models.ButtonBarModel.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'ButtonBarModel', qName: 'org.apache.flex.html.beads.models.ButtonBarModel', kind: 'class' }] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.flex.html.beads.models.ButtonBarModel', org.apache.flex.html.beads.models.ButtonBarModel);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.flex.html.beads.models.ButtonBarModel.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'buttonWidths': { type: 'Array', access: 'readwrite', declaredBy: 'org.apache.flex.html.beads.models.ButtonBarModel'},
        'widthType': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.flex.html.beads.models.ButtonBarModel'}
      };
    },
    methods: function () {
      return {
        'ButtonBarModel': { type: '', declaredBy: 'org.apache.flex.html.beads.models.ButtonBarModel'}
      };
    }
  };
};