/**
 * Generated by Apache Flex Cross-Compiler from org\apache\flex\html\SimpleAlert.as
 * org.apache.flex.html.SimpleAlert
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.flex.html.SimpleAlert');

goog.require('org.apache.flex.core.IAlertModel');
goog.require('org.apache.flex.core.UIBase');
goog.require('org.apache.flex.core.IPopUp');
goog.require('org.apache.flex.utils.Language');



/**
 *  constructor.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 * @constructor
 * @extends {org.apache.flex.core.UIBase}
 * @implements {org.apache.flex.core.IPopUp}
 */
org.apache.flex.html.SimpleAlert = function() {
  org.apache.flex.html.SimpleAlert.base(this, 'constructor');
  this.className = "SimpleAlert";
};
goog.inherits(org.apache.flex.html.SimpleAlert, org.apache.flex.core.UIBase);


/**
 *  This function causes the SimpleAlert to appear. The parent is used for ActionScript and
 *  identifies the IPopUpParent that manages the alert.
 * 
 *  @asparam Object parent The object that hosts the pop-up.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 * @export
 * @param {Object} parent
 */
org.apache.flex.html.SimpleAlert.prototype.showAlert = function(parent) {
  parent.addElement(this);
};


/**
 *  A convenience function to compose and display the alert.
 * 
 *  @asparam String message The content to display in the SimpleAlert.
 *  @asparam Object parent The object that hosts the pop-up.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 * @export
 * @param {string} message
 * @param {Object} parent
 * @return {org.apache.flex.html.SimpleAlert}
 */
org.apache.flex.html.SimpleAlert.show = function(message, parent) {
  
  alert(message);
  return null;
};


org.apache.flex.html.SimpleAlert.prototype.get__message = function() {
  return org.apache.flex.utils.Language.as(this.model, org.apache.flex.core.IAlertModel, true).message;
};


org.apache.flex.html.SimpleAlert.prototype.set__message = function(value) {
  org.apache.flex.utils.Language.as(this.model, org.apache.flex.core.IAlertModel, true).message = value;
};


org.apache.flex.html.SimpleAlert.prototype.get__htmlMessage = function() {
  return org.apache.flex.utils.Language.as(this.model, org.apache.flex.core.IAlertModel, true).htmlMessage;
};


org.apache.flex.html.SimpleAlert.prototype.set__htmlMessage = function(value) {
  org.apache.flex.utils.Language.as(this.model, org.apache.flex.core.IAlertModel, true).htmlMessage = value;
};


Object.defineProperties(org.apache.flex.html.SimpleAlert.prototype, /** @lends {org.apache.flex.html.SimpleAlert.prototype} */ {
/** @export */
message: {
get: org.apache.flex.html.SimpleAlert.prototype.get__message,
set: org.apache.flex.html.SimpleAlert.prototype.set__message},
/** @export */
htmlMessage: {
get: org.apache.flex.html.SimpleAlert.prototype.get__htmlMessage,
set: org.apache.flex.html.SimpleAlert.prototype.set__htmlMessage}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.flex.html.SimpleAlert.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'SimpleAlert', qName: 'org.apache.flex.html.SimpleAlert', kind: 'class' }], interfaces: [org.apache.flex.core.IPopUp] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.flex.html.SimpleAlert', org.apache.flex.html.SimpleAlert);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.flex.html.SimpleAlert.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {return {};},
    methods: function () {
      return {
        'SimpleAlert': { type: '', declaredBy: 'org.apache.flex.html.SimpleAlert'},
        'showAlert': { type: 'void', declaredBy: 'org.apache.flex.html.SimpleAlert', parameters: function () { return [  { index: 1, type: 'Object', optional: false } ]; }},
        '|show': { type: 'org.apache.flex.html.SimpleAlert', declaredBy: 'org.apache.flex.html.SimpleAlert', parameters: function () { return [  { index: 1, type: 'String', optional: false },{ index: 2, type: 'Object', optional: false } ]; }}
      };
    },
    metadata: function () { return [  ]; }
  };
};