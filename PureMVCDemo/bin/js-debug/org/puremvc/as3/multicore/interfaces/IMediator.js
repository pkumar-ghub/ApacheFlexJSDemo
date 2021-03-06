/**
 * Generated by Apache Flex Cross-Compiler from org\puremvc\as3\multicore\interfaces\IMediator.as
 * org.puremvc.as3.multicore.interfaces.IMediator
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.puremvc.as3.multicore.interfaces.IMediator');

goog.require('org.puremvc.as3.multicore.interfaces.INotifier');
goog.require('org.apache.flex.utils.Language');



/**
 * @interface
 * @extends {org.puremvc.as3.multicore.interfaces.INotifier}
 */
org.puremvc.as3.multicore.interfaces.IMediator = function() {
};
org.puremvc.as3.multicore.interfaces.IMediator.prototype.getMediatorName = function() {
};
org.puremvc.as3.multicore.interfaces.IMediator.prototype.getViewComponent = function() {
};
org.puremvc.as3.multicore.interfaces.IMediator.prototype.setViewComponent = function(viewComponent) {
};
org.puremvc.as3.multicore.interfaces.IMediator.prototype.listNotificationInterests = function() {
};
org.puremvc.as3.multicore.interfaces.IMediator.prototype.handleNotification = function(notification) {
};
org.puremvc.as3.multicore.interfaces.IMediator.prototype.onRegister = function() {
};
org.puremvc.as3.multicore.interfaces.IMediator.prototype.onRemove = function() {
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.puremvc.as3.multicore.interfaces.IMediator.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'IMediator', qName: 'org.puremvc.as3.multicore.interfaces.IMediator', kind: 'interface' }], interfaces: [org.puremvc.as3.multicore.interfaces.INotifier] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.puremvc.as3.multicore.interfaces.IMediator', org.puremvc.as3.multicore.interfaces.IMediator);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.puremvc.as3.multicore.interfaces.IMediator.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    accessors: function () {return {};},
    methods: function () {
      return {
        'getMediatorName': { type: 'String', declaredBy: 'org.puremvc.as3.multicore.interfaces.IMediator'},
        'getViewComponent': { type: 'Object', declaredBy: 'org.puremvc.as3.multicore.interfaces.IMediator'},
        'setViewComponent': { type: 'void', declaredBy: 'org.puremvc.as3.multicore.interfaces.IMediator', parameters: function () { return [  { index: 1, type: 'Object', optional: false } ]; }},
        'listNotificationInterests': { type: 'Array', declaredBy: 'org.puremvc.as3.multicore.interfaces.IMediator'},
        'handleNotification': { type: 'void', declaredBy: 'org.puremvc.as3.multicore.interfaces.IMediator', parameters: function () { return [  { index: 1, type: 'org.puremvc.as3.multicore.interfaces.INotification', optional: false } ]; }},
        'onRegister': { type: 'void', declaredBy: 'org.puremvc.as3.multicore.interfaces.IMediator'},
        'onRemove': { type: 'void', declaredBy: 'org.puremvc.as3.multicore.interfaces.IMediator'}
      };
    }
  };
};