/**
 * Generated by Apache Flex Cross-Compiler from org\puremvc\as3\multicore\patterns\observer\Notification.as
 * org.puremvc.as3.multicore.patterns.observer.Notification
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.puremvc.as3.multicore.patterns.observer.Notification');

goog.require('org.puremvc.as3.multicore.interfaces.INotification');
goog.require('org.apache.flex.utils.Language');



/**
 * Constructor. 
 * 
 * @asparam name name of the <code>Notification</code> instance. (required)
 * @asparam body the <code>Notification</code> body. (optional)
 * @asparam type the type of the <code>Notification</code> (optional)
 * @constructor
 * @implements {org.puremvc.as3.multicore.interfaces.INotification}
 * @param {string} name
 * @param {Object=} body
 * @param {string=} type
 */
org.puremvc.as3.multicore.patterns.observer.Notification = function(name, body, type) {
  body = typeof body !== 'undefined' ? body : null;
  type = typeof type !== 'undefined' ? type : null;
  this.name = name;
  this.body = body;
  this.type = type;
};


/**
 * Get the name of the <code>Notification</code> instance.
 * 
 * @asreturn the name of the <code>Notification</code> instance.
 * @export
 * @return {string}
 */
org.puremvc.as3.multicore.patterns.observer.Notification.prototype.getName = function() {
  return this.name;
};


/**
 * Set the body of the <code>Notification</code> instance.
 * @export
 * @param {Object} body
 */
org.puremvc.as3.multicore.patterns.observer.Notification.prototype.setBody = function(body) {
  this.body = body;
};


/**
 * Get the body of the <code>Notification</code> instance.
 * 
 * @asreturn the body object. 
 * @export
 * @return {Object}
 */
org.puremvc.as3.multicore.patterns.observer.Notification.prototype.getBody = function() {
  return this.body;
};


/**
 * Set the type of the <code>Notification</code> instance.
 * @export
 * @param {string} type
 */
org.puremvc.as3.multicore.patterns.observer.Notification.prototype.setType = function(type) {
  this.type = type;
};


/**
 * Get the type of the <code>Notification</code> instance.
 * 
 * @asreturn the type  
 * @export
 * @return {string}
 */
org.puremvc.as3.multicore.patterns.observer.Notification.prototype.getType = function() {
  return this.type;
};


/**
 * Get the string representation of the <code>Notification</code> instance.
 * 
 * @asreturn the string representation of the <code>Notification</code> instance.
 * @export
 * @return {string}
 */
org.puremvc.as3.multicore.patterns.observer.Notification.prototype.toString = function() {
  var /** @type {string} */ msg = "Notification Name: " + this.getName();
  msg += "\nBody:" + ((this.body == null) ? "null" : this.body.toString());
  msg += "\nType:" + ((this.type == null) ? "null" : this.type);
  return msg;
};


/**
 * @private
 * @type {string}
 */
org.puremvc.as3.multicore.patterns.observer.Notification.prototype.name;


/**
 * @private
 * @type {string}
 */
org.puremvc.as3.multicore.patterns.observer.Notification.prototype.type;


/**
 * @private
 * @type {Object}
 */
org.puremvc.as3.multicore.patterns.observer.Notification.prototype.body;


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.puremvc.as3.multicore.patterns.observer.Notification.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'Notification', qName: 'org.puremvc.as3.multicore.patterns.observer.Notification', kind: 'class' }], interfaces: [org.puremvc.as3.multicore.interfaces.INotification] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.puremvc.as3.multicore.patterns.observer.Notification', org.puremvc.as3.multicore.patterns.observer.Notification);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.puremvc.as3.multicore.patterns.observer.Notification.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {return {};},
    methods: function () {
      return {
        'Notification': { type: '', declaredBy: 'org.puremvc.as3.multicore.patterns.observer.Notification', parameters: function () { return [  { index: 1, type: 'String', optional: false },{ index: 2, type: 'Object', optional: true },{ index: 3, type: 'String', optional: true } ]; }},
        'getName': { type: 'String', declaredBy: 'org.puremvc.as3.multicore.patterns.observer.Notification'},
        'setBody': { type: 'void', declaredBy: 'org.puremvc.as3.multicore.patterns.observer.Notification', parameters: function () { return [  { index: 1, type: 'Object', optional: false } ]; }},
        'getBody': { type: 'Object', declaredBy: 'org.puremvc.as3.multicore.patterns.observer.Notification'},
        'setType': { type: 'void', declaredBy: 'org.puremvc.as3.multicore.patterns.observer.Notification', parameters: function () { return [  { index: 1, type: 'String', optional: false } ]; }},
        'getType': { type: 'String', declaredBy: 'org.puremvc.as3.multicore.patterns.observer.Notification'},
        'toString': { type: 'String', declaredBy: 'org.puremvc.as3.multicore.patterns.observer.Notification'}
      };
    }
  };
};