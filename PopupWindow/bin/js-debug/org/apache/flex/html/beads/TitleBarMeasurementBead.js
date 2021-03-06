/**
 * Generated by Apache Flex Cross-Compiler from org/apache/flex/html/beads/TitleBarMeasurementBead.as
 * org.apache.flex.html.beads.TitleBarMeasurementBead
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.flex.html.beads.TitleBarMeasurementBead');

goog.require('org.apache.flex.core.IMeasurementBead');
goog.require('org.apache.flex.html.TitleBar');
goog.require('org.apache.flex.html.beads.TitleBarView');
goog.require('org.apache.flex.utils.Language');



/**
 *  constructor.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 * @constructor
 * @implements {org.apache.flex.core.IMeasurementBead}
 */
org.apache.flex.html.beads.TitleBarMeasurementBead = function() {
};


/**
 * @private
 * @type {org.apache.flex.core.IStrand}
 */
org.apache.flex.html.beads.TitleBarMeasurementBead.prototype._strand;


org.apache.flex.html.beads.TitleBarMeasurementBead.prototype.get__measuredWidth = function() {
  var /** @type {number} */ mwidth = 0;
  var /** @type {org.apache.flex.html.TitleBar} */ titleBar = org.apache.flex.utils.Language.as(this._strand, org.apache.flex.html.TitleBar);
  var /** @type {org.apache.flex.html.beads.TitleBarView} */ titleView = org.apache.flex.utils.Language.as(this._strand.getBeadByType(org.apache.flex.html.beads.TitleBarView), org.apache.flex.html.beads.TitleBarView);
  var /** @type {org.apache.flex.core.IMeasurementBead} */ labelMeasure = titleView.titleLabel.measurementBead;
  mwidth = labelMeasure.measuredWidth;
  if (titleBar.showCloseButton) {
    var /** @type {org.apache.flex.core.IMeasurementBead} */ buttonMeasure = titleView.closeButton.measurementBead;
    mwidth += buttonMeasure.measuredWidth;
  }
  return mwidth;
};


org.apache.flex.html.beads.TitleBarMeasurementBead.prototype.get__measuredHeight = function() {
  var /** @type {number} */ mheight = 0;
  var /** @type {org.apache.flex.html.TitleBar} */ titleBar = org.apache.flex.utils.Language.as(this._strand, org.apache.flex.html.TitleBar);
  var /** @type {org.apache.flex.html.beads.TitleBarView} */ titleView = org.apache.flex.utils.Language.as(this._strand.getBeadByType(org.apache.flex.html.beads.TitleBarView), org.apache.flex.html.beads.TitleBarView);
  var /** @type {org.apache.flex.core.IMeasurementBead} */ labelMeasure = titleView.titleLabel.measurementBead;
  mheight = labelMeasure.measuredHeight;
  if (titleBar.showCloseButton) {
    var /** @type {org.apache.flex.core.IMeasurementBead} */ buttonMeasure = titleView.closeButton.measurementBead;
    mheight = Math.max(mheight, buttonMeasure.measuredHeight);
  }
  return mheight;
};


org.apache.flex.html.beads.TitleBarMeasurementBead.prototype.set__strand = function(value) {
  this._strand = value;
};


Object.defineProperties(org.apache.flex.html.beads.TitleBarMeasurementBead.prototype, /** @lends {org.apache.flex.html.beads.TitleBarMeasurementBead.prototype} */ {
/** @export */
measuredWidth: {
get: org.apache.flex.html.beads.TitleBarMeasurementBead.prototype.get__measuredWidth},
/** @export */
measuredHeight: {
get: org.apache.flex.html.beads.TitleBarMeasurementBead.prototype.get__measuredHeight},
/** @export */
strand: {
set: org.apache.flex.html.beads.TitleBarMeasurementBead.prototype.set__strand}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.flex.html.beads.TitleBarMeasurementBead.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'TitleBarMeasurementBead', qName: 'org.apache.flex.html.beads.TitleBarMeasurementBead', kind: 'class' }], interfaces: [org.apache.flex.core.IMeasurementBead] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.flex.html.beads.TitleBarMeasurementBead', org.apache.flex.html.beads.TitleBarMeasurementBead);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.flex.html.beads.TitleBarMeasurementBead.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'measuredWidth': { type: 'Number', access: 'readonly', declaredBy: 'org.apache.flex.html.beads.TitleBarMeasurementBead'},
        'measuredHeight': { type: 'Number', access: 'readonly', declaredBy: 'org.apache.flex.html.beads.TitleBarMeasurementBead'},
        'strand': { type: 'org.apache.flex.core.IStrand', access: 'writeonly', declaredBy: 'org.apache.flex.html.beads.TitleBarMeasurementBead'}
      };
    },
    methods: function () {
      return {
        'TitleBarMeasurementBead': { type: '', declaredBy: 'org.apache.flex.html.beads.TitleBarMeasurementBead'}
      };
    }
  };
};