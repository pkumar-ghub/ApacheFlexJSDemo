/**
 * Generated by Apache Flex Cross-Compiler from org\apache\flex\html\beads\models\PanelModel.as
 * org.apache.flex.html.beads.models.PanelModel
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.flex.html.beads.models.PanelModel');

goog.require('org.apache.flex.events.Event');
goog.require('org.apache.flex.events.EventDispatcher');
goog.require('org.apache.flex.core.IBead');
goog.require('org.apache.flex.core.IPanelModel');
goog.require('org.apache.flex.utils.Language');



/**
 *  constructor.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 * @constructor
 * @extends {org.apache.flex.events.EventDispatcher}
 * @implements {org.apache.flex.core.IBead}
 * @implements {org.apache.flex.core.IPanelModel}
 */
org.apache.flex.html.beads.models.PanelModel = function() {
  org.apache.flex.html.beads.models.PanelModel.base(this, 'constructor');
};
goog.inherits(org.apache.flex.html.beads.models.PanelModel, org.apache.flex.events.EventDispatcher);


/**
 * @private
 * @type {org.apache.flex.core.IStrand}
 */
org.apache.flex.html.beads.models.PanelModel.prototype._strand;


/**
 * @private
 * @type {Array}
 */
org.apache.flex.html.beads.models.PanelModel.prototype._controlBar;


/**
 * @private
 * @type {string}
 */
org.apache.flex.html.beads.models.PanelModel.prototype._title;


/**
 * @private
 * @type {string}
 */
org.apache.flex.html.beads.models.PanelModel.prototype._htmlTitle;


/**
 * @private
 * @type {boolean}
 */
org.apache.flex.html.beads.models.PanelModel.prototype._showCloseButton = false;


org.apache.flex.html.beads.models.PanelModel.prototype.set__strand = function(value) {
  this._strand = value;
};


org.apache.flex.html.beads.models.PanelModel.prototype.get__controlBar = function() {
  return this._controlBar;
};


org.apache.flex.html.beads.models.PanelModel.prototype.set__controlBar = function(value) {
  this._controlBar = value;
};


org.apache.flex.html.beads.models.PanelModel.prototype.get__title = function() {
  return this._title;
};


org.apache.flex.html.beads.models.PanelModel.prototype.set__title = function(value) {
  if (value != this._title) {
    this._title = value;
    this.dispatchEvent(new org.apache.flex.events.Event('titleChange'));
  }
};


org.apache.flex.html.beads.models.PanelModel.prototype.get__htmlTitle = function() {
  return this._htmlTitle;
};


org.apache.flex.html.beads.models.PanelModel.prototype.set__htmlTitle = function(value) {
  if (value != this._htmlTitle) {
    this._htmlTitle = value;
    this.dispatchEvent(new org.apache.flex.events.Event('htmlTitleChange'));
  }
};


org.apache.flex.html.beads.models.PanelModel.prototype.get__showCloseButton = function() {
  return this._showCloseButton;
};


org.apache.flex.html.beads.models.PanelModel.prototype.set__showCloseButton = function(value) {
  if (value != this._showCloseButton) {
    this._showCloseButton = value;
    this.dispatchEvent(new org.apache.flex.events.Event('showCloseButtonChange'));
  }
};


Object.defineProperties(org.apache.flex.html.beads.models.PanelModel.prototype, /** @lends {org.apache.flex.html.beads.models.PanelModel.prototype} */ {
/** @export */
strand: {
set: org.apache.flex.html.beads.models.PanelModel.prototype.set__strand},
/** @export */
controlBar: {
get: org.apache.flex.html.beads.models.PanelModel.prototype.get__controlBar,
set: org.apache.flex.html.beads.models.PanelModel.prototype.set__controlBar},
/** @export */
title: {
get: org.apache.flex.html.beads.models.PanelModel.prototype.get__title,
set: org.apache.flex.html.beads.models.PanelModel.prototype.set__title},
/** @export */
htmlTitle: {
get: org.apache.flex.html.beads.models.PanelModel.prototype.get__htmlTitle,
set: org.apache.flex.html.beads.models.PanelModel.prototype.set__htmlTitle},
/** @export */
showCloseButton: {
get: org.apache.flex.html.beads.models.PanelModel.prototype.get__showCloseButton,
set: org.apache.flex.html.beads.models.PanelModel.prototype.set__showCloseButton}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.flex.html.beads.models.PanelModel.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'PanelModel', qName: 'org.apache.flex.html.beads.models.PanelModel', kind: 'class' }], interfaces: [org.apache.flex.core.IBead, org.apache.flex.core.IPanelModel] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.flex.html.beads.models.PanelModel', org.apache.flex.html.beads.models.PanelModel);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.flex.html.beads.models.PanelModel.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'strand': { type: 'org.apache.flex.core.IStrand', access: 'writeonly', declaredBy: 'org.apache.flex.html.beads.models.PanelModel'},
        'controlBar': { type: 'Array', access: 'readwrite', declaredBy: 'org.apache.flex.html.beads.models.PanelModel'},
        'title': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.flex.html.beads.models.PanelModel'},
        'htmlTitle': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.flex.html.beads.models.PanelModel'},
        'showCloseButton': { type: 'Boolean', access: 'readwrite', declaredBy: 'org.apache.flex.html.beads.models.PanelModel'}
      };
    },
    methods: function () {
      return {
        'PanelModel': { type: '', declaredBy: 'org.apache.flex.html.beads.models.PanelModel'}
      };
    }
  };
};