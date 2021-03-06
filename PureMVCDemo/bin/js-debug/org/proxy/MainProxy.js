/**
 * Generated by Apache Flex Cross-Compiler from org\proxy\MainProxy.as
 * org.proxy.MainProxy
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.proxy.MainProxy');

goog.require('org.facade.MainFacade');
goog.require('org.puremvc.as3.multicore.patterns.proxy.Proxy');
goog.require('org.puremvc.as3.multicore.interfaces.IProxy');
goog.require('org.apache.flex.utils.Language');



/**
 * @constructor
 * @extends {org.puremvc.as3.multicore.patterns.proxy.Proxy}
 * @implements {org.puremvc.as3.multicore.interfaces.IProxy}
 */
org.proxy.MainProxy = function() {
  org.proxy.MainProxy.base(this, 'constructor', org.proxy.MainProxy.NAME);
};
goog.inherits(org.proxy.MainProxy, org.puremvc.as3.multicore.patterns.proxy.Proxy);


/**
 * @export
 * @const
 * @type {string}
 */
org.proxy.MainProxy.NAME = "mainProxy";


/**
 * @export
 * @param {string} vId
 */
org.proxy.MainProxy.prototype.setUIResult = function(vId) {
  this.sendNotification(org.facade.MainFacade.SET_UI_RESULT, vId);
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.proxy.MainProxy.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'MainProxy', qName: 'org.proxy.MainProxy', kind: 'class' }], interfaces: [org.puremvc.as3.multicore.interfaces.IProxy] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.proxy.MainProxy', org.proxy.MainProxy);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.proxy.MainProxy.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {return {};},
    methods: function () {
      return {
        'MainProxy': { type: '', declaredBy: 'org.proxy.MainProxy'},
        'setUIResult': { type: 'void', declaredBy: 'org.proxy.MainProxy', parameters: function () { return [  { index: 1, type: 'String', optional: false } ]; }}
      };
    }
  };
};