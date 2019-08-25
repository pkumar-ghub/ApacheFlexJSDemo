/**
 * Generated by Apache Flex Cross-Compiler from org/apache/flex/html/beads/models/ImageModel.as
 * org.apache.flex.html.beads.models.ImageModel
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.flex.html.beads.models.ImageModel');

goog.require('org.apache.flex.events.Event');
goog.require('org.apache.flex.events.EventDispatcher');
goog.require('org.apache.flex.core.IImageModel');



/**
 *  constructor.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 * @constructor
 * @extends {org.apache.flex.events.EventDispatcher}
 * @implements {org.apache.flex.core.IImageModel}
 */
org.apache.flex.html.beads.models.ImageModel = function() {
  org.apache.flex.html.beads.models.ImageModel.base(this, 'constructor');
};
goog.inherits(org.apache.flex.html.beads.models.ImageModel, org.apache.flex.events.EventDispatcher);


/**
 * @private
 * @type {org.apache.flex.core.IStrand}
 */
org.apache.flex.html.beads.models.ImageModel.prototype._strand;


/**
 * @private
 * @type {string}
 */
org.apache.flex.html.beads.models.ImageModel.prototype._url;


org.apache.flex.html.beads.models.ImageModel.prototype.set__strand = function(value) {
  this._strand = value;
};


org.apache.flex.html.beads.models.ImageModel.prototype.get__url = function() {
  return this._url;
};


org.apache.flex.html.beads.models.ImageModel.prototype.set__url = function(value) {
  if (value != this._url) {
    this._url = value;
    this.dispatchEvent(new org.apache.flex.events.Event("urlChanged"));
  }
};


Object.defineProperties(org.apache.flex.html.beads.models.ImageModel.prototype, /** @lends {org.apache.flex.html.beads.models.ImageModel.prototype} */ {
/** @export */
strand: {
set: org.apache.flex.html.beads.models.ImageModel.prototype.set__strand},
/** @export */
url: {
get: org.apache.flex.html.beads.models.ImageModel.prototype.get__url,
set: org.apache.flex.html.beads.models.ImageModel.prototype.set__url}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.flex.html.beads.models.ImageModel.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'ImageModel', qName: 'org.apache.flex.html.beads.models.ImageModel', kind: 'class' }], interfaces: [org.apache.flex.core.IImageModel] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.flex.html.beads.models.ImageModel', org.apache.flex.html.beads.models.ImageModel);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.flex.html.beads.models.ImageModel.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'strand': { type: 'org.apache.flex.core.IStrand', access: 'writeonly', declaredBy: 'org.apache.flex.html.beads.models.ImageModel'},
        'url': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.flex.html.beads.models.ImageModel'}
      };
    },
    methods: function () {
      return {
        'ImageModel': { type: '', declaredBy: 'org.apache.flex.html.beads.models.ImageModel'}
      };
    }
  };
};