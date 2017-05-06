/**
 * Generated by Apache Flex Cross-Compiler from org\puremvc\as3\multicore\interfaces\IView.as
 * org.puremvc.as3.multicore.interfaces.IView
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.puremvc.as3.multicore.interfaces.IView');




/**
 * @interface
 */
org.puremvc.as3.multicore.interfaces.IView = function() {
};
org.puremvc.as3.multicore.interfaces.IView.prototype.registerObserver = function(notificationName, observer) {
};
org.puremvc.as3.multicore.interfaces.IView.prototype.removeObserver = function(notificationName, notifyContext) {
};
org.puremvc.as3.multicore.interfaces.IView.prototype.notifyObservers = function(note) {
};
org.puremvc.as3.multicore.interfaces.IView.prototype.registerMediator = function(mediator) {
};
org.puremvc.as3.multicore.interfaces.IView.prototype.retrieveMediator = function(mediatorName) {
};
org.puremvc.as3.multicore.interfaces.IView.prototype.removeMediator = function(mediatorName) {
};
org.puremvc.as3.multicore.interfaces.IView.prototype.hasMediator = function(mediatorName) {
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.puremvc.as3.multicore.interfaces.IView.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'IView', qName: 'org.puremvc.as3.multicore.interfaces.IView', kind: 'interface' }] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.puremvc.as3.multicore.interfaces.IView', org.puremvc.as3.multicore.interfaces.IView);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.puremvc.as3.multicore.interfaces.IView.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    accessors: function () {return {};},
    methods: function () {
      return {
        'registerObserver': { type: 'void', declaredBy: 'org.puremvc.as3.multicore.interfaces.IView', parameters: function () { return [  { index: 1, type: 'String', optional: false },{ index: 2, type: 'org.puremvc.as3.multicore.interfaces.IObserver', optional: false } ]; }},
        'removeObserver': { type: 'void', declaredBy: 'org.puremvc.as3.multicore.interfaces.IView', parameters: function () { return [  { index: 1, type: 'String', optional: false },{ index: 2, type: 'Object', optional: false } ]; }},
        'notifyObservers': { type: 'void', declaredBy: 'org.puremvc.as3.multicore.interfaces.IView', parameters: function () { return [  { index: 1, type: 'org.puremvc.as3.multicore.interfaces.INotification', optional: false } ]; }},
        'registerMediator': { type: 'void', declaredBy: 'org.puremvc.as3.multicore.interfaces.IView', parameters: function () { return [  { index: 1, type: 'org.puremvc.as3.multicore.interfaces.IMediator', optional: false } ]; }},
        'retrieveMediator': { type: 'org.puremvc.as3.multicore.interfaces.IMediator', declaredBy: 'org.puremvc.as3.multicore.interfaces.IView', parameters: function () { return [  { index: 1, type: 'String', optional: false } ]; }},
        'removeMediator': { type: 'org.puremvc.as3.multicore.interfaces.IMediator', declaredBy: 'org.puremvc.as3.multicore.interfaces.IView', parameters: function () { return [  { index: 1, type: 'String', optional: false } ]; }},
        'hasMediator': { type: 'Boolean', declaredBy: 'org.puremvc.as3.multicore.interfaces.IView', parameters: function () { return [  { index: 1, type: 'String', optional: false } ]; }}
      };
    }
  };
};