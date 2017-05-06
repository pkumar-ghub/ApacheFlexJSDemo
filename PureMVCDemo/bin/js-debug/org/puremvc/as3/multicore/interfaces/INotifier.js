/**
 * Generated by Apache Flex Cross-Compiler from org\puremvc\as3\multicore\interfaces\INotifier.as
 * org.puremvc.as3.multicore.interfaces.INotifier
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.puremvc.as3.multicore.interfaces.INotifier');



/**
 * @interface
 */
org.puremvc.as3.multicore.interfaces.INotifier = function() {
};
org.puremvc.as3.multicore.interfaces.INotifier.prototype.sendNotification = function(notificationName, body, type) {
};
org.puremvc.as3.multicore.interfaces.INotifier.prototype.initializeNotifier = function(key) {
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.puremvc.as3.multicore.interfaces.INotifier.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'INotifier', qName: 'org.puremvc.as3.multicore.interfaces.INotifier', kind: 'interface' }] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.puremvc.as3.multicore.interfaces.INotifier', org.puremvc.as3.multicore.interfaces.INotifier);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.puremvc.as3.multicore.interfaces.INotifier.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    accessors: function () {return {};},
    methods: function () {
      return {
        'sendNotification': { type: 'void', declaredBy: 'org.puremvc.as3.multicore.interfaces.INotifier', parameters: function () { return [  { index: 1, type: 'String', optional: false },{ index: 2, type: 'Object', optional: true },{ index: 3, type: 'String', optional: true } ]; }},
        'initializeNotifier': { type: 'void', declaredBy: 'org.puremvc.as3.multicore.interfaces.INotifier', parameters: function () { return [  { index: 1, type: 'String', optional: false } ]; }}
      };
    }
  };
};