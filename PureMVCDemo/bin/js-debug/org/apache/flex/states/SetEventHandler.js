/**
 * Generated by Apache Flex Cross-Compiler from org\apache\flex\states\SetEventHandler.as
 * org.apache.flex.states.SetEventHandler
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.flex.states.SetEventHandler');

goog.require('org.apache.flex.core.IDocument');
goog.require('org.apache.flex.utils.Language');



/**
 *  Constructor.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 9
 *  @playerversion AIR 1.1
 *  @productversion Flex 3
 * @constructor
 * @implements {org.apache.flex.core.IDocument}
 */
org.apache.flex.states.SetEventHandler = function() {
  ;
};


/**
 * @export
 * @type {string}
 */
org.apache.flex.states.SetEventHandler.prototype.target;


/**
 * @export
 * @type {string}
 */
org.apache.flex.states.SetEventHandler.prototype.name;


/**
 * @export
 * @type {Function}
 */
org.apache.flex.states.SetEventHandler.prototype.handlerFunction;


/**
 * @export
 * @type {Object}
 */
org.apache.flex.states.SetEventHandler.prototype.document;


/**
 * @export
 * @param {Object} document
 * @param {string=} id
 */
org.apache.flex.states.SetEventHandler.prototype.setDocument = function(document, id) {
  id = typeof id !== 'undefined' ? id : null;
  this.document = document;
};


/**
 * @asprivate 
 * Initialize this object from a descriptor.
 * @export
 * @param {Object} properties
 * @return {Object}
 */
org.apache.flex.states.SetEventHandler.prototype.initializeFromObject = function(properties) {
  for (var /** @type {string} */ p in properties) {
    this[p] = properties[p];
  }
  return Object(this);
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.flex.states.SetEventHandler.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'SetEventHandler', qName: 'org.apache.flex.states.SetEventHandler', kind: 'class' }], interfaces: [org.apache.flex.core.IDocument] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.flex.states.SetEventHandler', org.apache.flex.states.SetEventHandler);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.flex.states.SetEventHandler.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'target': { type: 'String'},
        'name': { type: 'String'},
        'handlerFunction': { type: 'Function'},
        'document': { type: 'Object'}
      };
    },
    accessors: function () {return {};},
    methods: function () {
      return {
        'SetEventHandler': { type: '', declaredBy: 'org.apache.flex.states.SetEventHandler'},
        'setDocument': { type: 'void', declaredBy: 'org.apache.flex.states.SetEventHandler', parameters: function () { return [  { index: 1, type: 'Object', optional: false },{ index: 2, type: 'String', optional: true } ]; }},
        'initializeFromObject': { type: 'Object', declaredBy: 'org.apache.flex.states.SetEventHandler', parameters: function () { return [  { index: 1, type: 'Object', optional: false } ]; }}
      };
    },
    metadata: function () { return [  ]; }
  };
};