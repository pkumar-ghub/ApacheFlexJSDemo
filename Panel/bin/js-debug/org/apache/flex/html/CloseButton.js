/**
 * Generated by Apache Flex Cross-Compiler from org/apache/flex/html/CloseButton.as
 * org.apache.flex.html.CloseButton
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.flex.html.CloseButton');

goog.require('org.apache.flex.html.Button');



/**
 *  Constructor.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 * @constructor
 * @extends {org.apache.flex.html.Button}
 */
org.apache.flex.html.CloseButton = function() {
  org.apache.flex.html.CloseButton.base(this, 'constructor');
};
goog.inherits(org.apache.flex.html.CloseButton, org.apache.flex.html.Button);


/**
 * @flexjsignorecoercion org.apache.flex.core.WrappedHTMLElement
 * @protected
 * @override
 */
org.apache.flex.html.CloseButton.prototype.createElement = function() {
  org.apache.flex.html.CloseButton.superClass_.createElement.apply(this);
  this.element.innerHTML = 'x';
  this.element.style.padding = 0;
  this.height = 11;
  this.width = 11;
  return this.element;
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.flex.html.CloseButton.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'CloseButton', qName: 'org.apache.flex.html.CloseButton', kind: 'class' }] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.flex.html.CloseButton', org.apache.flex.html.CloseButton);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.flex.html.CloseButton.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {return {};},
    methods: function () {
      return {
        'CloseButton': { type: '', declaredBy: 'org.apache.flex.html.CloseButton'}
      };
    }
  };
};