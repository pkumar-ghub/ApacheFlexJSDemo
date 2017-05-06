/**
 * Generated by Apache Flex Cross-Compiler from org\apache\flex\html\supportClasses\DataGridColumn.as
 * org.apache.flex.html.supportClasses.DataGridColumn
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.flex.html.supportClasses.DataGridColumn');

goog.require('org.apache.flex.utils.Language');



/**
 *  constructor.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 * @constructor
 */
org.apache.flex.html.supportClasses.DataGridColumn = function() {

this._columnWidth = Number.NaN;
};


/**
 * @private
 * @type {org.apache.flex.core.IFactory}
 */
org.apache.flex.html.supportClasses.DataGridColumn.prototype._itemRenderer;


/**
 * @private
 * @type {number}
 */
org.apache.flex.html.supportClasses.DataGridColumn.prototype._columnWidth;


/**
 * @private
 * @type {string}
 */
org.apache.flex.html.supportClasses.DataGridColumn.prototype._label;


/**
 * @private
 * @type {string}
 */
org.apache.flex.html.supportClasses.DataGridColumn.prototype._dataField;


org.apache.flex.html.supportClasses.DataGridColumn.prototype.get__itemRenderer = function() {
  return this._itemRenderer;
};


org.apache.flex.html.supportClasses.DataGridColumn.prototype.set__itemRenderer = function(value) {
  this._itemRenderer = value;
};


org.apache.flex.html.supportClasses.DataGridColumn.prototype.get__columnWidth = function() {
  return this._columnWidth;
};


org.apache.flex.html.supportClasses.DataGridColumn.prototype.set__columnWidth = function(value) {
  this._columnWidth = value;
};


org.apache.flex.html.supportClasses.DataGridColumn.prototype.get__label = function() {
  return this._label;
};


org.apache.flex.html.supportClasses.DataGridColumn.prototype.set__label = function(value) {
  this._label = value;
};


org.apache.flex.html.supportClasses.DataGridColumn.prototype.get__dataField = function() {
  return this._dataField;
};


org.apache.flex.html.supportClasses.DataGridColumn.prototype.set__dataField = function(value) {
  this._dataField = value;
};


Object.defineProperties(org.apache.flex.html.supportClasses.DataGridColumn.prototype, /** @lends {org.apache.flex.html.supportClasses.DataGridColumn.prototype} */ {
/** @export */
itemRenderer: {
get: org.apache.flex.html.supportClasses.DataGridColumn.prototype.get__itemRenderer,
set: org.apache.flex.html.supportClasses.DataGridColumn.prototype.set__itemRenderer},
/** @export */
columnWidth: {
get: org.apache.flex.html.supportClasses.DataGridColumn.prototype.get__columnWidth,
set: org.apache.flex.html.supportClasses.DataGridColumn.prototype.set__columnWidth},
/** @export */
label: {
get: org.apache.flex.html.supportClasses.DataGridColumn.prototype.get__label,
set: org.apache.flex.html.supportClasses.DataGridColumn.prototype.set__label},
/** @export */
dataField: {
get: org.apache.flex.html.supportClasses.DataGridColumn.prototype.get__dataField,
set: org.apache.flex.html.supportClasses.DataGridColumn.prototype.set__dataField}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.flex.html.supportClasses.DataGridColumn.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'DataGridColumn', qName: 'org.apache.flex.html.supportClasses.DataGridColumn', kind: 'class' }] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.flex.html.supportClasses.DataGridColumn', org.apache.flex.html.supportClasses.DataGridColumn);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.flex.html.supportClasses.DataGridColumn.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'itemRenderer': { type: 'org.apache.flex.core.IFactory', access: 'readwrite', declaredBy: 'org.apache.flex.html.supportClasses.DataGridColumn'},
        'columnWidth': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.flex.html.supportClasses.DataGridColumn'},
        'label': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.flex.html.supportClasses.DataGridColumn'},
        'dataField': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.flex.html.supportClasses.DataGridColumn'}
      };
    },
    methods: function () {
      return {
        'DataGridColumn': { type: '', declaredBy: 'org.apache.flex.html.supportClasses.DataGridColumn'}
      };
    }
  };
};