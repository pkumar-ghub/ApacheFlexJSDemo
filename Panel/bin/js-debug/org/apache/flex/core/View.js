/**
 * Generated by Apache Flex Cross-Compiler from org/apache/flex/core/View.as
 * org.apache.flex.core.View
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.flex.core.View');

goog.require('org.apache.flex.core.ValuesManager');
goog.require('org.apache.flex.core.ViewBase');
goog.require('org.apache.flex.events.Event');
goog.require('org.apache.flex.utils.MXMLDataInterpreter');
goog.require('org.apache.flex.core.IMXMLDocument');



/**
 * @constructor
 * @extends {org.apache.flex.core.ViewBase}
 * @implements {org.apache.flex.core.IMXMLDocument}
 */
org.apache.flex.core.View = function() {
  
  this._mxmlDocument = this;
  org.apache.flex.core.View.base(this, 'constructor');
};
goog.inherits(org.apache.flex.core.View, org.apache.flex.core.ViewBase);


/**
 * @private
 * @type {Array}
 */
org.apache.flex.core.View.prototype._mxmlDescriptor;


/**
 * @private
 * @type {Object}
 */
org.apache.flex.core.View.prototype._mxmlDocument;


/**
 * @private
 * @type {boolean}
 */
org.apache.flex.core.View.prototype._initialized;


/**
 * @asprivate
 * @export
 * @override
 */
org.apache.flex.core.View.prototype.addedToParent = function() {
  if (!this._initialized) {
    org.apache.flex.core.ValuesManager["valuesImpl"].init(this);
  }
  org.apache.flex.core.View.superClass_.addedToParent.apply(this);
  if (!this._initialized) {
    org.apache.flex.utils.MXMLDataInterpreter.generateMXMLInstances(this._mxmlDocument, this, this.MXMLDescriptor);
    this.dispatchEvent(new org.apache.flex.events.Event("initBindings"));
    this.dispatchEvent(new org.apache.flex.events.Event("initComplete"));
    this._initialized = true;
  }
};


/**
 *  @asprivate
 * @export
 * @param {Object} document
 * @param {Array} value
 */
org.apache.flex.core.View.prototype.setMXMLDescriptor = function(document, value) {
  this._mxmlDocument = document;
  this._mxmlDescriptor = value;
};


/**
 *  @copy org.apache.flex.core.Application#generateMXMLAttributes()
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.8
 * @export
 * @param {Array} data
 */
org.apache.flex.core.View.prototype.generateMXMLAttributes = function(data) {
  org.apache.flex.utils.MXMLDataInterpreter.generateMXMLProperties(this, data);
};


/**
 * @export
 * @type {Array}
 */
org.apache.flex.core.View.prototype.mxmlContent;


org.apache.flex.core.View.prototype.get__MXMLDescriptor = function() {
  return this._mxmlDescriptor;
};


Object.defineProperties(org.apache.flex.core.View.prototype, /** @lends {org.apache.flex.core.View.prototype} */ {
/** @export */
MXMLDescriptor: {
get: org.apache.flex.core.View.prototype.get__MXMLDescriptor}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.flex.core.View.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'View', qName: 'org.apache.flex.core.View', kind: 'class' }], interfaces: [org.apache.flex.core.IMXMLDocument] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.flex.core.View', org.apache.flex.core.View);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.flex.core.View.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'mxmlContent': { type: 'Array'}
      };
    },
    accessors: function () {
      return {
        'MXMLDescriptor': { type: 'Array', access: 'readonly', declaredBy: 'org.apache.flex.core.View'}
      };
    },
    methods: function () {
      return {
        'View': { type: '', declaredBy: 'org.apache.flex.core.View'},
        'addedToParent': { type: 'void', declaredBy: 'org.apache.flex.core.View'},
        'setMXMLDescriptor': { type: 'void', declaredBy: 'org.apache.flex.core.View', parameters: function () { return [  { index: 1, type: 'Object', optional: false },{ index: 2, type: 'Array', optional: false } ]; }},
        'generateMXMLAttributes': { type: 'void', declaredBy: 'org.apache.flex.core.View', parameters: function () { return [  { index: 1, type: 'Array', optional: false } ]; }}
      };
    },
    metadata: function () { return [  ]; }
  };
};