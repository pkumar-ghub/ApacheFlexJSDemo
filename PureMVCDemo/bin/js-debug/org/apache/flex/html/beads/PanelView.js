/**
 * Generated by Apache Flex Cross-Compiler from org\apache\flex\html\beads\PanelView.as
 * org.apache.flex.html.beads.PanelView
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.flex.html.beads.PanelView');

goog.require('org.apache.flex.core.IBeadLayout');
goog.require('org.apache.flex.core.IChild');
goog.require('org.apache.flex.core.IViewport');
goog.require('org.apache.flex.core.UIBase');
goog.require('org.apache.flex.events.Event');
goog.require('org.apache.flex.html.Container');
goog.require('org.apache.flex.html.Panel');
goog.require('org.apache.flex.html.TitleBar');
goog.require('org.apache.flex.html.beads.GroupView');
goog.require('org.apache.flex.html.beads.layouts.VerticalFlexLayout');
goog.require('org.apache.flex.html.supportClasses.PanelLayoutProxy');
goog.require('org.apache.flex.core.IBeadView');
goog.require('org.apache.flex.utils.Language');



/**
 *  constructor.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 * @constructor
 * @extends {org.apache.flex.html.beads.GroupView}
 * @implements {org.apache.flex.core.IBeadView}
 */
org.apache.flex.html.beads.PanelView = function() {
  org.apache.flex.html.beads.PanelView.base(this, 'constructor');
};
goog.inherits(org.apache.flex.html.beads.PanelView, org.apache.flex.html.beads.GroupView);


/**
 * @private
 * @type {org.apache.flex.html.TitleBar}
 */
org.apache.flex.html.beads.PanelView.prototype._titleBar;


/**
 * @private
 * @type {org.apache.flex.html.Container}
 */
org.apache.flex.html.beads.PanelView.prototype._contentArea;


/**
 * @private
 * @type {org.apache.flex.core.IStrand}
 */
org.apache.flex.html.beads.PanelView.prototype._strand;


/**
 * @private
 * @type {org.apache.flex.html.supportClasses.PanelLayoutProxy}
 */
org.apache.flex.html.beads.PanelView.prototype._panelLayoutProxy;


/**
 * @protected
 * @override
 */
org.apache.flex.html.beads.PanelView.prototype.completeSetup = function() {
  if (this.titleBar.parent == null) {
    org.apache.flex.utils.Language.as(this._strand, org.apache.flex.html.Panel).$addElement(this.titleBar);
  }
  if (this.contentArea.parent == null) {
    org.apache.flex.utils.Language.as(this._strand, org.apache.flex.html.Panel).$addElement(org.apache.flex.utils.Language.as(this.contentArea, org.apache.flex.core.IChild));
  }
  org.apache.flex.html.beads.PanelView.superClass_.completeSetup.apply(this);
  this.performLayout(null);
};


/**
 * @protected
 * @param {org.apache.flex.events.Event} event
 */
org.apache.flex.html.beads.PanelView.prototype.handleSizeChange = function(event) {
  this._titleBar.percentWidth = 100;
  this._contentArea.percentWidth = 100;
  this.performLayout(event);
};


/**
 * @private
 * @param {org.apache.flex.events.Event} event
 */
org.apache.flex.html.beads.PanelView.prototype.handleChildrenAdded = function(event) {
  this._contentArea.dispatchEvent(new org.apache.flex.events.Event("layoutNeeded"));
  this.performLayout(event);
};


org.apache.flex.html.beads.PanelView.prototype.get__titleBar = function() {
  return this._titleBar;
};


org.apache.flex.html.beads.PanelView.prototype.set__titleBar = function(value) {
  this._titleBar = value;
};


org.apache.flex.html.beads.PanelView.prototype.get__contentArea = function() {
  return this._contentArea;
};


org.apache.flex.html.beads.PanelView.prototype.set__contentArea = function(value) {
  this._contentArea = value;
};


org.apache.flex.html.beads.PanelView.prototype.set__strand = function(value) {
  this._strand = value;
  var /** @type {org.apache.flex.core.UIBase} */ host = org.apache.flex.utils.Language.as(value, org.apache.flex.core.UIBase, true);
  if (!this._titleBar) {
    this._titleBar = new org.apache.flex.html.TitleBar();
    this._titleBar.id = "panelTitleBar";
    
    this._titleBar.element.style["flex-grow"] = "0";
    this._titleBar.element.style["order"] = "1";
  }
  this.titleBar.model = host.model;
  if (!this._contentArea) {
    this._contentArea = new org.apache.flex.html.Container();
    this._contentArea.id = "panelContent";
    this._contentArea.className = "PanelContent";
    
    this._contentArea.element.style["flex-grow"] = "1";
    this._contentArea.element.style["order"] = "2";
    this._contentArea.element.style["overflow"] = "auto";
  }
  
  org.apache.flex.html.beads.PanelView.superClass_.set__strand.apply(this, [ value] );
  var /** @type {org.apache.flex.core.IBeadLayout} */ layoutBead = org.apache.flex.utils.Language.as(value.getBeadByType(org.apache.flex.core.IBeadLayout), org.apache.flex.core.IBeadLayout);
  if (layoutBead) {
    value.removeBead(layoutBead);
    var /** @type {org.apache.flex.core.IBeadLayout} */ contentLayout = org.apache.flex.utils.Language.as(this._contentArea.getBeadByType(org.apache.flex.core.IBeadLayout), org.apache.flex.core.IBeadLayout);
    if (contentLayout) {
      this._contentArea.removeBead(contentLayout);
    }
    this._contentArea.addBead(layoutBead);
  }
  var /** @type {org.apache.flex.core.IViewport} */ viewportBead = org.apache.flex.utils.Language.as(value.getBeadByType(org.apache.flex.core.IViewport), org.apache.flex.core.IViewport);
  if (viewportBead) {
    value.removeBead(viewportBead);
    this._contentArea.addBead(viewportBead);
  }
  layoutBead = new org.apache.flex.html.beads.layouts.VerticalFlexLayout();
  value.addBead(layoutBead);
};


org.apache.flex.html.beads.PanelView.prototype.get__contentView = function() {
  if (this._panelLayoutProxy == null) {
    this._panelLayoutProxy = new org.apache.flex.html.supportClasses.PanelLayoutProxy(this._strand);
  }
  return this._panelLayoutProxy;
};


Object.defineProperties(org.apache.flex.html.beads.PanelView.prototype, /** @lends {org.apache.flex.html.beads.PanelView.prototype} */ {
/** @export */
titleBar: {
get: org.apache.flex.html.beads.PanelView.prototype.get__titleBar,
set: org.apache.flex.html.beads.PanelView.prototype.set__titleBar},
/** @export */
contentArea: {
get: org.apache.flex.html.beads.PanelView.prototype.get__contentArea,
set: org.apache.flex.html.beads.PanelView.prototype.set__contentArea},
/** @export */
strand: {
set: org.apache.flex.html.beads.PanelView.prototype.set__strand},
/** @export */
contentView: {
get: org.apache.flex.html.beads.PanelView.prototype.get__contentView}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.flex.html.beads.PanelView.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'PanelView', qName: 'org.apache.flex.html.beads.PanelView', kind: 'class' }], interfaces: [org.apache.flex.core.IBeadView] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.flex.html.beads.PanelView', org.apache.flex.html.beads.PanelView);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.flex.html.beads.PanelView.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'titleBar': { type: 'org.apache.flex.html.TitleBar', access: 'readwrite', declaredBy: 'org.apache.flex.html.beads.PanelView'},
        'contentArea': { type: 'org.apache.flex.html.Container', access: 'readwrite', declaredBy: 'org.apache.flex.html.beads.PanelView'},
        'strand': { type: 'org.apache.flex.core.IStrand', access: 'writeonly', declaredBy: 'org.apache.flex.html.beads.PanelView'},
        'contentView': { type: 'org.apache.flex.core.ILayoutView', access: 'readonly', declaredBy: 'org.apache.flex.html.beads.PanelView'}
      };
    },
    methods: function () {
      return {
        'PanelView': { type: '', declaredBy: 'org.apache.flex.html.beads.PanelView'}
      };
    }
  };
};