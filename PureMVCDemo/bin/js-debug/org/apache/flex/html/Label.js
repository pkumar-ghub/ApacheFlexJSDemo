/**
 * Generated by Apache Flex Cross-Compiler from org\apache\flex\html\Label.as
 * org.apache.flex.html.Label
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.flex.html.Label');

goog.require('org.apache.flex.core.UIBase');
goog.require('org.apache.flex.utils.Language');



/**
 *  Constructor.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 * @constructor
 * @extends {org.apache.flex.core.UIBase}
 */
org.apache.flex.html.Label = function() {
  org.apache.flex.html.Label.base(this, 'constructor');
};
goog.inherits(org.apache.flex.html.Label, org.apache.flex.core.UIBase);


/**
 * @flexjsignorecoercion org.apache.flex.core.WrappedHTMLElement
 * @protected
 * @override
 */
org.apache.flex.html.Label.prototype.createElement = function() {
  this.element = document.createElement('span');
  this.positioner = this.element;
  this.element.flexjs_wrapper = this;
  this.element.style.whiteSpace = "nowrap";
  this.className = "Label";
  this.typeNames = "Label";
  return this.element;
};


org.apache.flex.html.Label.prototype.get__text = function() {
  
  return this.element.innerHTML;
};


org.apache.flex.html.Label.prototype.set__text = function(value) {
  
  this.element.innerHTML = value;
  this.dispatchEvent('textChange');
};


org.apache.flex.html.Label.prototype.get__html = function() {
  
  return this.element.innerHTML;
};


org.apache.flex.html.Label.prototype.set__html = function(value) {
  
  this.element.innerHTML = value;
  this.dispatchEvent('textChange');
};


Object.defineProperties(org.apache.flex.html.Label.prototype, /** @lends {org.apache.flex.html.Label.prototype} */ {
/** @export */
text: {
get: org.apache.flex.html.Label.prototype.get__text,
set: org.apache.flex.html.Label.prototype.set__text},
/** @export */
html: {
get: org.apache.flex.html.Label.prototype.get__html,
set: org.apache.flex.html.Label.prototype.set__html}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.flex.html.Label.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'Label', qName: 'org.apache.flex.html.Label', kind: 'class' }] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.flex.html.Label', org.apache.flex.html.Label);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.flex.html.Label.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'text': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.flex.html.Label', metadata: function () { return [ { name: 'Bindable', args: [ { key: '', value: 'textChange' } ] } ]; }},
        'html': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.flex.html.Label', metadata: function () { return [ { name: 'Bindable', args: [ { key: '', value: 'htmlChange' } ] } ]; }}
      };
    },
    methods: function () {
      return {
        'Label': { type: '', declaredBy: 'org.apache.flex.html.Label'}
      };
    },
    metadata: function () { return [  ]; }
  };
};