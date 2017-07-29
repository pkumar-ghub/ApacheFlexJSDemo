/**
 * Generated by Apache Flex Cross-Compiler from org/apache/flex/html/supportClasses/PanelLayoutProxy.as
 * org.apache.flex.html.supportClasses.PanelLayoutProxy
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.flex.html.supportClasses.PanelLayoutProxy');

goog.require('org.apache.flex.html.Panel');
goog.require('org.apache.flex.core.ILayoutView');
goog.require('org.apache.flex.utils.Language');



/**
 *  Constructor.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 * @constructor
 * @implements {org.apache.flex.core.ILayoutView}
 * @param {Object} host
 */
org.apache.flex.html.supportClasses.PanelLayoutProxy = function(host) {
  ;
  this._host = host;
};


/**
 * @private
 * @type {Object}
 */
org.apache.flex.html.supportClasses.PanelLayoutProxy.prototype._host;


/**
 *  Get a component from the parent.
 *
 *  @asparam c The index of the subcomponent.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 * @export
 * @param {number} index
 * @return {org.apache.flex.core.IChild}
 */
org.apache.flex.html.supportClasses.PanelLayoutProxy.prototype.getElementAt = function(index) {
  return org.apache.flex.utils.Language.as(this.host, org.apache.flex.html.Panel).$getElementAt(index);
};


org.apache.flex.html.supportClasses.PanelLayoutProxy.prototype.get__host = function() {
  return this._host;
};


org.apache.flex.html.supportClasses.PanelLayoutProxy.prototype.get__width = function() {
  return org.apache.flex.utils.Language.as(this.host, org.apache.flex.html.Panel).width;
};


org.apache.flex.html.supportClasses.PanelLayoutProxy.prototype.get__height = function() {
  return org.apache.flex.utils.Language.as(this.host, org.apache.flex.html.Panel).height;
};


org.apache.flex.html.supportClasses.PanelLayoutProxy.prototype.get__numElements = function() {
  return org.apache.flex.utils.Language.as(this.host, org.apache.flex.html.Panel).$numElements;
};


org.apache.flex.html.supportClasses.PanelLayoutProxy.prototype.get__somethingelse = function() {
  return org.apache.flex.utils.Language.as(this.host, org.apache.flex.html.Panel).element;
};


org.apache.flex.html.supportClasses.PanelLayoutProxy.prototype.get__element = function() {
  return org.apache.flex.utils.Language.as(this.host, org.apache.flex.html.Panel).element;
};


Object.defineProperties(org.apache.flex.html.supportClasses.PanelLayoutProxy.prototype, /** @lends {org.apache.flex.html.supportClasses.PanelLayoutProxy.prototype} */ {
/** @export */
host: {
get: org.apache.flex.html.supportClasses.PanelLayoutProxy.prototype.get__host},
/** @export */
width: {
get: org.apache.flex.html.supportClasses.PanelLayoutProxy.prototype.get__width},
/** @export */
height: {
get: org.apache.flex.html.supportClasses.PanelLayoutProxy.prototype.get__height},
/** @export */
numElements: {
get: org.apache.flex.html.supportClasses.PanelLayoutProxy.prototype.get__numElements},
/** @export */
somethingelse: {
get: org.apache.flex.html.supportClasses.PanelLayoutProxy.prototype.get__somethingelse},
/** @export */
element: {
get: org.apache.flex.html.supportClasses.PanelLayoutProxy.prototype.get__element}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.flex.html.supportClasses.PanelLayoutProxy.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'PanelLayoutProxy', qName: 'org.apache.flex.html.supportClasses.PanelLayoutProxy', kind: 'class' }], interfaces: [org.apache.flex.core.ILayoutView] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.flex.html.supportClasses.PanelLayoutProxy', org.apache.flex.html.supportClasses.PanelLayoutProxy);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.flex.html.supportClasses.PanelLayoutProxy.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'host': { type: 'Object', access: 'readonly', declaredBy: 'org.apache.flex.html.supportClasses.PanelLayoutProxy'},
        'width': { type: 'Number', access: 'readonly', declaredBy: 'org.apache.flex.html.supportClasses.PanelLayoutProxy'},
        'height': { type: 'Number', access: 'readonly', declaredBy: 'org.apache.flex.html.supportClasses.PanelLayoutProxy'},
        'numElements': { type: 'int', access: 'readonly', declaredBy: 'org.apache.flex.html.supportClasses.PanelLayoutProxy'},
        'somethingelse': { type: 'org.apache.flex.core.WrappedHTMLElement', access: 'readonly', declaredBy: 'org.apache.flex.html.supportClasses.PanelLayoutProxy'},
        'element': { type: 'org.apache.flex.core.WrappedHTMLElement', access: 'readonly', declaredBy: 'org.apache.flex.html.supportClasses.PanelLayoutProxy'}
      };
    },
    methods: function () {
      return {
        'PanelLayoutProxy': { type: '', declaredBy: 'org.apache.flex.html.supportClasses.PanelLayoutProxy', parameters: function () { return [  { index: 1, type: 'Object', optional: false } ]; }},
        'getElementAt': { type: 'org.apache.flex.core.IChild', declaredBy: 'org.apache.flex.html.supportClasses.PanelLayoutProxy', parameters: function () { return [  { index: 1, type: 'int', optional: false } ]; }}
      };
    }
  };
};