/**
 * Generated by Apache Flex Cross-Compiler from org\puremvc\as3\multicore\interfaces\IController.as
 * org.puremvc.as3.multicore.interfaces.IController
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.puremvc.as3.multicore.interfaces.IController');

goog.require('org.apache.flex.utils.Language');



/**
 * @interface
 */
org.puremvc.as3.multicore.interfaces.IController = function() {
};
org.puremvc.as3.multicore.interfaces.IController.prototype.registerCommand = function(notificationName, commandClassRef) {
};
org.puremvc.as3.multicore.interfaces.IController.prototype.executeCommand = function(notification) {
};
org.puremvc.as3.multicore.interfaces.IController.prototype.removeCommand = function(notificationName) {
};
org.puremvc.as3.multicore.interfaces.IController.prototype.hasCommand = function(notificationName) {
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.puremvc.as3.multicore.interfaces.IController.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'IController', qName: 'org.puremvc.as3.multicore.interfaces.IController', kind: 'interface' }] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.puremvc.as3.multicore.interfaces.IController', org.puremvc.as3.multicore.interfaces.IController);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.puremvc.as3.multicore.interfaces.IController.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    accessors: function () {return {};},
    methods: function () {
      return {
        'registerCommand': { type: 'void', declaredBy: 'org.puremvc.as3.multicore.interfaces.IController', parameters: function () { return [  { index: 1, type: 'String', optional: false },{ index: 2, type: 'Class', optional: false } ]; }},
        'executeCommand': { type: 'void', declaredBy: 'org.puremvc.as3.multicore.interfaces.IController', parameters: function () { return [  { index: 1, type: 'org.puremvc.as3.multicore.interfaces.INotification', optional: false } ]; }},
        'removeCommand': { type: 'void', declaredBy: 'org.puremvc.as3.multicore.interfaces.IController', parameters: function () { return [  { index: 1, type: 'String', optional: false } ]; }},
        'hasCommand': { type: 'Boolean', declaredBy: 'org.puremvc.as3.multicore.interfaces.IController', parameters: function () { return [  { index: 1, type: 'String', optional: false } ]; }}
      };
    }
  };
};