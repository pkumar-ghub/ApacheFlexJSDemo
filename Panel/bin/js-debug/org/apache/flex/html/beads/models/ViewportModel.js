/**
 * Generated by Apache Flex Cross-Compiler from org/apache/flex/html/beads/models/ViewportModel.as
 * org.apache.flex.html.beads.models.ViewportModel
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.flex.html.beads.models.ViewportModel');

goog.require('org.apache.flex.events.EventDispatcher');
goog.require('org.apache.flex.core.IViewportModel');



/**
 * @constructor
 * @extends {org.apache.flex.events.EventDispatcher}
 * @implements {org.apache.flex.core.IViewportModel}
 */
org.apache.flex.html.beads.models.ViewportModel = function() {
  org.apache.flex.html.beads.models.ViewportModel.base(this, 'constructor');
};
goog.inherits(org.apache.flex.html.beads.models.ViewportModel, org.apache.flex.events.EventDispatcher);


/**
 * @private
 * @type {org.apache.flex.geom.Rectangle}
 */
org.apache.flex.html.beads.models.ViewportModel.prototype._borderMetrics;


/**
 * @private
 * @type {org.apache.flex.geom.Rectangle}
 */
org.apache.flex.html.beads.models.ViewportModel.prototype._chromeMetrics;


/**
 * @private
 * @type {org.apache.flex.core.IStrand}
 */
org.apache.flex.html.beads.models.ViewportModel.prototype._strand;


org.apache.flex.html.beads.models.ViewportModel.prototype.get__borderMetrics = function() {
  return this._borderMetrics;
};


org.apache.flex.html.beads.models.ViewportModel.prototype.set__borderMetrics = function(value) {
  this._borderMetrics = value;
};


org.apache.flex.html.beads.models.ViewportModel.prototype.get__chromeMetrics = function() {
  return this._chromeMetrics;
};


org.apache.flex.html.beads.models.ViewportModel.prototype.set__chromeMetrics = function(value) {
  this._chromeMetrics = value;
};


org.apache.flex.html.beads.models.ViewportModel.prototype.set__strand = function(value) {
  this._strand = value;
};


Object.defineProperties(org.apache.flex.html.beads.models.ViewportModel.prototype, /** @lends {org.apache.flex.html.beads.models.ViewportModel.prototype} */ {
/** @export */
borderMetrics: {
get: org.apache.flex.html.beads.models.ViewportModel.prototype.get__borderMetrics,
set: org.apache.flex.html.beads.models.ViewportModel.prototype.set__borderMetrics},
/** @export */
chromeMetrics: {
get: org.apache.flex.html.beads.models.ViewportModel.prototype.get__chromeMetrics,
set: org.apache.flex.html.beads.models.ViewportModel.prototype.set__chromeMetrics},
/** @export */
strand: {
set: org.apache.flex.html.beads.models.ViewportModel.prototype.set__strand}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.flex.html.beads.models.ViewportModel.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'ViewportModel', qName: 'org.apache.flex.html.beads.models.ViewportModel', kind: 'class' }], interfaces: [org.apache.flex.core.IViewportModel] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.flex.html.beads.models.ViewportModel', org.apache.flex.html.beads.models.ViewportModel);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.flex.html.beads.models.ViewportModel.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'borderMetrics': { type: 'org.apache.flex.geom.Rectangle', access: 'readwrite', declaredBy: 'org.apache.flex.html.beads.models.ViewportModel'},
        'chromeMetrics': { type: 'org.apache.flex.geom.Rectangle', access: 'readwrite', declaredBy: 'org.apache.flex.html.beads.models.ViewportModel'},
        'strand': { type: 'org.apache.flex.core.IStrand', access: 'writeonly', declaredBy: 'org.apache.flex.html.beads.models.ViewportModel'}
      };
    },
    methods: function () {
      return {
        'ViewportModel': { type: '', declaredBy: 'org.apache.flex.html.beads.models.ViewportModel'}
      };
    }
  };
};