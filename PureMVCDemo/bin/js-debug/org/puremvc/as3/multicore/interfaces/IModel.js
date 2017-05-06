/**
 * Generated by Apache Flex Cross-Compiler from org\puremvc\as3\multicore\interfaces\IModel.as
 * org.puremvc.as3.multicore.interfaces.IModel
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.puremvc.as3.multicore.interfaces.IModel');

goog.require('org.apache.flex.utils.Language');



/**
 * @interface
 */
org.puremvc.as3.multicore.interfaces.IModel = function() {
};
org.puremvc.as3.multicore.interfaces.IModel.prototype.registerProxy = function(proxy) {
};
org.puremvc.as3.multicore.interfaces.IModel.prototype.retrieveProxy = function(proxyName) {
};
org.puremvc.as3.multicore.interfaces.IModel.prototype.removeProxy = function(proxyName) {
};
org.puremvc.as3.multicore.interfaces.IModel.prototype.hasProxy = function(proxyName) {
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.puremvc.as3.multicore.interfaces.IModel.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'IModel', qName: 'org.puremvc.as3.multicore.interfaces.IModel', kind: 'interface' }] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.puremvc.as3.multicore.interfaces.IModel', org.puremvc.as3.multicore.interfaces.IModel);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.puremvc.as3.multicore.interfaces.IModel.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    accessors: function () {return {};},
    methods: function () {
      return {
        'registerProxy': { type: 'void', declaredBy: 'org.puremvc.as3.multicore.interfaces.IModel', parameters: function () { return [  { index: 1, type: 'org.puremvc.as3.multicore.interfaces.IProxy', optional: false } ]; }},
        'retrieveProxy': { type: 'org.puremvc.as3.multicore.interfaces.IProxy', declaredBy: 'org.puremvc.as3.multicore.interfaces.IModel', parameters: function () { return [  { index: 1, type: 'String', optional: false } ]; }},
        'removeProxy': { type: 'org.puremvc.as3.multicore.interfaces.IProxy', declaredBy: 'org.puremvc.as3.multicore.interfaces.IModel', parameters: function () { return [  { index: 1, type: 'String', optional: false } ]; }},
        'hasProxy': { type: 'Boolean', declaredBy: 'org.puremvc.as3.multicore.interfaces.IModel', parameters: function () { return [  { index: 1, type: 'String', optional: false } ]; }}
      };
    }
  };
};