/**
 * Generated by Apache Flex Cross-Compiler from org\apache\flex\html\Panel.as
 * org.apache.flex.html.Panel
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.flex.html.Panel');

goog.require('org.apache.flex.core.IPanelModel');
goog.require('org.apache.flex.events.Event');
goog.require('org.apache.flex.html.Group');
goog.require('org.apache.flex.utils.Language');



/**
 *  constructor.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 * @constructor
 * @extends {org.apache.flex.html.Group}
 */
org.apache.flex.html.Panel = function() {
  org.apache.flex.html.Panel.base(this, 'constructor');
  this.className = "Panel";
};
goog.inherits(org.apache.flex.html.Panel, org.apache.flex.html.Group);


/**
 * @export
 * @param {org.apache.flex.core.IChild} c
 * @param {boolean=} dispatchEvent
 */
org.apache.flex.html.Panel.prototype.$addElement = function(c, dispatchEvent) {
  dispatchEvent = typeof dispatchEvent !== 'undefined' ? dispatchEvent : true;
  org.apache.flex.html.Panel.superClass_.addElement.apply(this, [ c, dispatchEvent] );
};


/**
 * @export
 * @param {number} index
 * @return {org.apache.flex.core.IChild}
 */
org.apache.flex.html.Panel.prototype.$getElementAt = function(index) {
  return org.apache.flex.html.Panel.superClass_.getElementAt.apply(this, [ index] );
};


/**
 * @asprivate
 * @flexjsignorecoercion org.apache.flex.html.beads.PanelView
 * @export
 * @override
 */
org.apache.flex.html.Panel.prototype.addElement = function(c, dispatchEvent) {
  dispatchEvent = typeof dispatchEvent !== 'undefined' ? dispatchEvent : true;
  var /** @type {Object} */ panelView = this.view;
  panelView.contentArea.addElement(c, dispatchEvent);
  panelView.contentArea.dispatchEvent(new org.apache.flex.events.Event("layoutNeeded"));
};


/**
 * @asprivate
 * @flexjsignorecoercion org.apache.flex.html.beads.PanelView
 * @export
 * @override
 */
org.apache.flex.html.Panel.prototype.addElementAt = function(c, index, dispatchEvent) {
  dispatchEvent = typeof dispatchEvent !== 'undefined' ? dispatchEvent : true;
  var /** @type {Object} */ panelView = this.view;
  panelView.contentArea.addElementAt(c, index, dispatchEvent);
  panelView.contentArea.dispatchEvent(new org.apache.flex.events.Event("layoutNeeded"));
};


/**
 * @asprivate
 * @flexjsignorecoercion org.apache.flex.html.beads.PanelView
 * @export
 * @override
 */
org.apache.flex.html.Panel.prototype.getElementIndex = function(c) {
  var /** @type {Object} */ panelView = this.view;
  return panelView.contentArea.getElementIndex(c);
};


/**
 * @asprivate
 * @flexjsignorecoercion org.apache.flex.html.beads.PanelView
 * @export
 * @override
 */
org.apache.flex.html.Panel.prototype.removeElement = function(c, dispatchEvent) {
  dispatchEvent = typeof dispatchEvent !== 'undefined' ? dispatchEvent : true;
  var /** @type {Object} */ panelView = this.view;
  panelView.contentArea.removeElement(c, dispatchEvent);
};


/**
 * @asprivate
 * @flexjsignorecoercion org.apache.flex.html.beads.PanelView
 * @export
 * @override
 */
org.apache.flex.html.Panel.prototype.getElementAt = function(index) {
  var /** @type {Object} */ panelView = this.view;
  return panelView.contentArea.getElementAt(index);
};


org.apache.flex.html.Panel.prototype.get__$numElements = function() {
  return org.apache.flex.html.Panel.superClass_.get__numElements.apply(this);
};


org.apache.flex.html.Panel.prototype.get__title = function() {
  return org.apache.flex.utils.Language.as(this.model, org.apache.flex.core.IPanelModel, true).title;
};


org.apache.flex.html.Panel.prototype.set__title = function(value) {
  org.apache.flex.utils.Language.as(this.model, org.apache.flex.core.IPanelModel, true).title = value;
};


org.apache.flex.html.Panel.prototype.get__htmlTitle = function() {
  return org.apache.flex.utils.Language.as(this.model, org.apache.flex.core.IPanelModel, true).htmlTitle;
};


org.apache.flex.html.Panel.prototype.set__htmlTitle = function(value) {
  org.apache.flex.utils.Language.as(this.model, org.apache.flex.core.IPanelModel, true).htmlTitle = value;
};


org.apache.flex.html.Panel.prototype.get__showCloseButton = function() {
  return org.apache.flex.utils.Language.as(this.model, org.apache.flex.core.IPanelModel, true).showCloseButton;
};


org.apache.flex.html.Panel.prototype.set__showCloseButton = function(value) {
  org.apache.flex.utils.Language.as(this.model, org.apache.flex.core.IPanelModel, true).showCloseButton = value;
};


org.apache.flex.html.Panel.prototype.get__numElements = function() {
  var /** @type {Object} */ panelView = this.view;
  return panelView.contentArea.numElements;
};


Object.defineProperties(org.apache.flex.html.Panel.prototype, /** @lends {org.apache.flex.html.Panel.prototype} */ {
/** @export */
$numElements: {
get: org.apache.flex.html.Panel.prototype.get__$numElements},
/** @export */
title: {
get: org.apache.flex.html.Panel.prototype.get__title,
set: org.apache.flex.html.Panel.prototype.set__title},
/** @export */
htmlTitle: {
get: org.apache.flex.html.Panel.prototype.get__htmlTitle,
set: org.apache.flex.html.Panel.prototype.set__htmlTitle},
/** @export */
showCloseButton: {
get: org.apache.flex.html.Panel.prototype.get__showCloseButton,
set: org.apache.flex.html.Panel.prototype.set__showCloseButton},
/** @export */
numElements: {
get: org.apache.flex.html.Panel.prototype.get__numElements}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.flex.html.Panel.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'Panel', qName: 'org.apache.flex.html.Panel', kind: 'class' }] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.flex.html.Panel', org.apache.flex.html.Panel);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.flex.html.Panel.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        '$numElements': { type: 'Number', access: 'readonly', declaredBy: 'org.apache.flex.html.Panel'},
        'title': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.flex.html.Panel'},
        'htmlTitle': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.flex.html.Panel'},
        'showCloseButton': { type: 'Boolean', access: 'readwrite', declaredBy: 'org.apache.flex.html.Panel'},
        'numElements': { type: 'int', access: 'readonly', declaredBy: 'org.apache.flex.html.Panel'}
      };
    },
    methods: function () {
      return {
        'Panel': { type: '', declaredBy: 'org.apache.flex.html.Panel'},
        '$addElement': { type: 'void', declaredBy: 'org.apache.flex.html.Panel', parameters: function () { return [  { index: 1, type: 'org.apache.flex.core.IChild', optional: false },{ index: 2, type: 'Boolean', optional: true } ]; }},
        '$getElementAt': { type: 'org.apache.flex.core.IChild', declaredBy: 'org.apache.flex.html.Panel', parameters: function () { return [  { index: 1, type: 'Number', optional: false } ]; }},
        'addElement': { type: 'void', declaredBy: 'org.apache.flex.html.Panel', parameters: function () { return [  { index: 1, type: 'org.apache.flex.core.IChild', optional: false },{ index: 2, type: 'Boolean', optional: true } ]; }},
        'addElementAt': { type: 'void', declaredBy: 'org.apache.flex.html.Panel', parameters: function () { return [  { index: 1, type: 'org.apache.flex.core.IChild', optional: false },{ index: 2, type: 'int', optional: false },{ index: 3, type: 'Boolean', optional: true } ]; }},
        'getElementIndex': { type: 'int', declaredBy: 'org.apache.flex.html.Panel', parameters: function () { return [  { index: 1, type: 'org.apache.flex.core.IChild', optional: false } ]; }},
        'removeElement': { type: 'void', declaredBy: 'org.apache.flex.html.Panel', parameters: function () { return [  { index: 1, type: 'org.apache.flex.core.IChild', optional: false },{ index: 2, type: 'Boolean', optional: true } ]; }},
        'getElementAt': { type: 'org.apache.flex.core.IChild', declaredBy: 'org.apache.flex.html.Panel', parameters: function () { return [  { index: 1, type: 'int', optional: false } ]; }}
      };
    },
    metadata: function () { return [  ]; }
  };
};