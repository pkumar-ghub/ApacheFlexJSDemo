/**
 * Generated by Apache Flex Cross-Compiler from org\apache\flex\html\List.as
 * org.apache.flex.html.List
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.flex.html.List');

goog.require('org.apache.flex.core.IRollOverModel');
goog.require('org.apache.flex.core.ISelectionModel');
goog.require('org.apache.flex.html.DataContainer');
goog.require('org.apache.flex.utils.Language');



/**
 *  constructor.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 * @constructor
 * @extends {org.apache.flex.html.DataContainer}
 */
org.apache.flex.html.List = function() {
  org.apache.flex.html.List.base(this, 'constructor');
};
goog.inherits(org.apache.flex.html.List, org.apache.flex.html.DataContainer);


/**
 * @flexjsignorecoercion org.apache.flex.core.WrappedHTMLElement
 * @protected
 * @override
 */
org.apache.flex.html.List.prototype.createElement = function() {
  org.apache.flex.html.List.superClass_.createElement.apply(this);
  this.className = 'List';
  return this.element;
};


org.apache.flex.html.List.prototype.get__selectedIndex = function() {
  return org.apache.flex.utils.Language.as(this.model, org.apache.flex.core.ISelectionModel, true).selectedIndex;
};


org.apache.flex.html.List.prototype.set__selectedIndex = function(value) {
  org.apache.flex.utils.Language.as(this.model, org.apache.flex.core.ISelectionModel, true).selectedIndex = value;
};


org.apache.flex.html.List.prototype.get__rollOverIndex = function() {
  return org.apache.flex.utils.Language.as(this.model, org.apache.flex.core.IRollOverModel, true).rollOverIndex;
};


org.apache.flex.html.List.prototype.set__rollOverIndex = function(value) {
  org.apache.flex.utils.Language.as(this.model, org.apache.flex.core.IRollOverModel, true).rollOverIndex = value;
};


org.apache.flex.html.List.prototype.get__rowHeight = function() {
  return this.presentationModel.rowHeight;
};


org.apache.flex.html.List.prototype.set__rowHeight = function(value) {
  this.presentationModel.rowHeight = value;
};


org.apache.flex.html.List.prototype.get__selectedItem = function() {
  return org.apache.flex.utils.Language.as(this.model, org.apache.flex.core.ISelectionModel, true).selectedItem;
};


org.apache.flex.html.List.prototype.set__selectedItem = function(value) {
  org.apache.flex.utils.Language.as(this.model, org.apache.flex.core.ISelectionModel, true).selectedItem = value;
};


Object.defineProperties(org.apache.flex.html.List.prototype, /** @lends {org.apache.flex.html.List.prototype} */ {
/** @export */
selectedIndex: {
get: org.apache.flex.html.List.prototype.get__selectedIndex,
set: org.apache.flex.html.List.prototype.set__selectedIndex},
/** @export */
rollOverIndex: {
get: org.apache.flex.html.List.prototype.get__rollOverIndex,
set: org.apache.flex.html.List.prototype.set__rollOverIndex},
/** @export */
rowHeight: {
get: org.apache.flex.html.List.prototype.get__rowHeight,
set: org.apache.flex.html.List.prototype.set__rowHeight},
/** @export */
selectedItem: {
get: org.apache.flex.html.List.prototype.get__selectedItem,
set: org.apache.flex.html.List.prototype.set__selectedItem}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.flex.html.List.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'List', qName: 'org.apache.flex.html.List', kind: 'class' }] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.flex.html.List', org.apache.flex.html.List);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.flex.html.List.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'selectedIndex': { type: 'int', access: 'readwrite', declaredBy: 'org.apache.flex.html.List'},
        'rollOverIndex': { type: 'int', access: 'readwrite', declaredBy: 'org.apache.flex.html.List'},
        'rowHeight': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.flex.html.List'},
        'selectedItem': { type: 'Object', access: 'readwrite', declaredBy: 'org.apache.flex.html.List'}
      };
    },
    methods: function () {
      return {
        'List': { type: '', declaredBy: 'org.apache.flex.html.List'}
      };
    },
    metadata: function () { return [  ]; }
  };
};