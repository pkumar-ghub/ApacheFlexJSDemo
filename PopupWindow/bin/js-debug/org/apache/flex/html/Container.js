/**
 * Generated by Apache Flex Cross-Compiler from org/apache/flex/html/Container.as
 * org.apache.flex.html.Container
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.flex.html.Container');

goog.require('org.apache.flex.core.ContainerBase');
goog.require('org.apache.flex.core.ValuesManager');
goog.require('org.apache.flex.events.Event');
goog.require('org.apache.flex.utils.MXMLDataInterpreter');
goog.require('org.apache.flex.core.IMXMLDocument');



/**
 *  Constructor.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 * @constructor
 * @extends {org.apache.flex.core.ContainerBase}
 * @implements {org.apache.flex.core.IMXMLDocument}
 */
org.apache.flex.html.Container = function() {
  
  this._mxmlDocument = this;
  org.apache.flex.html.Container.base(this, 'constructor');
};
goog.inherits(org.apache.flex.html.Container, org.apache.flex.core.ContainerBase);


/**
 * @private
 * @type {Array}
 */
org.apache.flex.html.Container.prototype._mxmlDescriptor;


/**
 * @private
 * @type {Object}
 */
org.apache.flex.html.Container.prototype._mxmlDocument;


/**
 * @private
 * @type {boolean}
 */
org.apache.flex.html.Container.prototype._initialized;


/**
 * @asprivate
 * @export
 * @override
 */
org.apache.flex.html.Container.prototype.addedToParent = function() {
  if (!this._initialized) {
    org.apache.flex.core.ValuesManager["valuesImpl"].init(this);
  }
  org.apache.flex.html.Container.superClass_.addedToParent.apply(this);
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
org.apache.flex.html.Container.prototype.setMXMLDescriptor = function(document, value) {
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
org.apache.flex.html.Container.prototype.generateMXMLAttributes = function(data) {
  org.apache.flex.utils.MXMLDataInterpreter.generateMXMLProperties(this, data);
};


/**
 * @export
 * @type {Array}
 */
org.apache.flex.html.Container.prototype.mxmlContent;


org.apache.flex.html.Container.prototype.get__MXMLDescriptor = function() {
  return this._mxmlDescriptor;
};


Object.defineProperties(org.apache.flex.html.Container.prototype, /** @lends {org.apache.flex.html.Container.prototype} */ {
/** @export */
MXMLDescriptor: {
get: org.apache.flex.html.Container.prototype.get__MXMLDescriptor}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.flex.html.Container.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'Container', qName: 'org.apache.flex.html.Container', kind: 'class' }], interfaces: [org.apache.flex.core.IMXMLDocument] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.flex.html.Container', org.apache.flex.html.Container);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.flex.html.Container.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'mxmlContent': { type: 'Array'}
      };
    },
    accessors: function () {
      return {
        'MXMLDescriptor': { type: 'Array', access: 'readonly', declaredBy: 'org.apache.flex.html.Container'}
      };
    },
    methods: function () {
      return {
        'Container': { type: '', declaredBy: 'org.apache.flex.html.Container'},
        'addedToParent': { type: 'void', declaredBy: 'org.apache.flex.html.Container'},
        'setMXMLDescriptor': { type: 'void', declaredBy: 'org.apache.flex.html.Container', parameters: function () { return [  { index: 1, type: 'Object', optional: false },{ index: 2, type: 'Array', optional: false } ]; }},
        'generateMXMLAttributes': { type: 'void', declaredBy: 'org.apache.flex.html.Container', parameters: function () { return [  { index: 1, type: 'Array', optional: false } ]; }}
      };
    },
    metadata: function () { return [  ]; }
  };
};