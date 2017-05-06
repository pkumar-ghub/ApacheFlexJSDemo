/**
 * Generated by Apache Flex Cross-Compiler from org\apache\flex\html\supportClasses\DateItemRenderer.as
 * org.apache.flex.html.supportClasses.DateItemRenderer
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.flex.html.supportClasses.DateItemRenderer');

goog.require('org.apache.flex.html.supportClasses.StringItemRenderer');
goog.require('org.apache.flex.utils.Language');



/**
 *  constructor.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 * @constructor
 * @extends {org.apache.flex.html.supportClasses.StringItemRenderer}
 */
org.apache.flex.html.supportClasses.DateItemRenderer = function() {
  org.apache.flex.html.supportClasses.DateItemRenderer.base(this, 'constructor');
  this.className = "DateItemRenderer";
};
goog.inherits(org.apache.flex.html.supportClasses.DateItemRenderer, org.apache.flex.html.supportClasses.StringItemRenderer);


org.apache.flex.html.supportClasses.DateItemRenderer.prototype.set__data = function(value) {
  org.apache.flex.html.supportClasses.DateItemRenderer.superClass_.set__data.apply(this, [ value] );
  
  if (org.apache.flex.utils.Language.is(value, Date)) {
    this.text = String(org.apache.flex.utils.Language.as(value, Date).getDate());
  } else {
    this.text = "";
  }
};


org.apache.flex.html.supportClasses.DateItemRenderer.prototype.set__height = function(value) {
  org.apache.flex.html.supportClasses.DateItemRenderer.superClass_.set__height.apply(this, [ value] );
  this.element.style["line-height"] = String(value) + "px";
};


Object.defineProperties(org.apache.flex.html.supportClasses.DateItemRenderer.prototype, /** @lends {org.apache.flex.html.supportClasses.DateItemRenderer.prototype} */ {
/** @export */
data: {
get: org.apache.flex.html.supportClasses.UIItemRendererBase.prototype.get__data,
set: org.apache.flex.html.supportClasses.DateItemRenderer.prototype.set__data},
/** @export */
height: {
get: org.apache.flex.core.UIBase.prototype.get__height,
set: org.apache.flex.html.supportClasses.DateItemRenderer.prototype.set__height}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.flex.html.supportClasses.DateItemRenderer.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'DateItemRenderer', qName: 'org.apache.flex.html.supportClasses.DateItemRenderer', kind: 'class' }] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.flex.html.supportClasses.DateItemRenderer', org.apache.flex.html.supportClasses.DateItemRenderer);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.flex.html.supportClasses.DateItemRenderer.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'data': { type: 'Object', access: 'writeonly', declaredBy: 'org.apache.flex.html.supportClasses.DateItemRenderer'},
        'height': { type: 'Number', access: 'writeonly', declaredBy: 'org.apache.flex.html.supportClasses.DateItemRenderer'}
      };
    },
    methods: function () {
      return {
        'DateItemRenderer': { type: '', declaredBy: 'org.apache.flex.html.supportClasses.DateItemRenderer'}
      };
    }
  };
};