/**
 * Generated by Apache Flex Cross-Compiler from org\apache\flex\html\supportClasses\ScrollingViewport.as
 * org.apache.flex.html.supportClasses.ScrollingViewport
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.flex.html.supportClasses.ScrollingViewport');

goog.require('org.apache.flex.core.UIBase');
goog.require('org.apache.flex.html.supportClasses.Viewport');
goog.require('org.apache.flex.core.IBead');
goog.require('org.apache.flex.core.IViewport');
goog.require('org.apache.flex.utils.Language');



/**
 * Constructor
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 * @constructor
 * @extends {org.apache.flex.html.supportClasses.Viewport}
 * @implements {org.apache.flex.core.IBead}
 * @implements {org.apache.flex.core.IViewport}
 */
org.apache.flex.html.supportClasses.ScrollingViewport = function() {
  org.apache.flex.html.supportClasses.ScrollingViewport.base(this, 'constructor');
};
goog.inherits(org.apache.flex.html.supportClasses.ScrollingViewport, org.apache.flex.html.supportClasses.Viewport);


/**
 * @copy org.apache.flex.core.IViewport
 * @export
 * @override
 */
org.apache.flex.html.supportClasses.ScrollingViewport.prototype.layoutViewportBeforeContentLayout = function(width, height) {
};


/**
 * @copy org.apache.flex.core.IViewport
 * @export
 * @override
 */
org.apache.flex.html.supportClasses.ScrollingViewport.prototype.layoutViewportAfterContentLayout = function(contentSize) {
};


org.apache.flex.html.supportClasses.ScrollingViewport.prototype.get__verticalScrollPosition = function() {
  return this.contentView.positioner.scrollTop;
};


org.apache.flex.html.supportClasses.ScrollingViewport.prototype.set__verticalScrollPosition = function(value) {
  this.contentView.positioner.scrollTop = value;
};


org.apache.flex.html.supportClasses.ScrollingViewport.prototype.get__horizontalScrollPosition = function() {
  return this.contentView.positioner.scrollLeft;
};


org.apache.flex.html.supportClasses.ScrollingViewport.prototype.set__horizontalScrollPosition = function(value) {
  this.contentView.positioner.scrollLeft = value;
};


org.apache.flex.html.supportClasses.ScrollingViewport.prototype.set__strand = function(value) {
  org.apache.flex.html.supportClasses.ScrollingViewport.superClass_.set__strand.apply(this, [ value] );
  if (this.contentView == null) {
    org.apache.flex.utils.Language.as(value, org.apache.flex.core.UIBase).element.style.overflow = "auto";
  } else {
    org.apache.flex.utils.Language.as(this.contentView, org.apache.flex.core.UIBase).element.style.overflow = "auto";
  }
};


Object.defineProperties(org.apache.flex.html.supportClasses.ScrollingViewport.prototype, /** @lends {org.apache.flex.html.supportClasses.ScrollingViewport.prototype} */ {
/** @export */
verticalScrollPosition: {
get: org.apache.flex.html.supportClasses.ScrollingViewport.prototype.get__verticalScrollPosition,
set: org.apache.flex.html.supportClasses.ScrollingViewport.prototype.set__verticalScrollPosition},
/** @export */
horizontalScrollPosition: {
get: org.apache.flex.html.supportClasses.ScrollingViewport.prototype.get__horizontalScrollPosition,
set: org.apache.flex.html.supportClasses.ScrollingViewport.prototype.set__horizontalScrollPosition},
/** @export */
strand: {
set: org.apache.flex.html.supportClasses.ScrollingViewport.prototype.set__strand}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.flex.html.supportClasses.ScrollingViewport.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'ScrollingViewport', qName: 'org.apache.flex.html.supportClasses.ScrollingViewport', kind: 'class' }], interfaces: [org.apache.flex.core.IBead, org.apache.flex.core.IViewport] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.flex.html.supportClasses.ScrollingViewport', org.apache.flex.html.supportClasses.ScrollingViewport);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.flex.html.supportClasses.ScrollingViewport.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'verticalScrollPosition': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.flex.html.supportClasses.ScrollingViewport'},
        'horizontalScrollPosition': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.flex.html.supportClasses.ScrollingViewport'},
        'strand': { type: 'org.apache.flex.core.IStrand', access: 'writeonly', declaredBy: 'org.apache.flex.html.supportClasses.ScrollingViewport'}
      };
    },
    methods: function () {
      return {
        'ScrollingViewport': { type: '', declaredBy: 'org.apache.flex.html.supportClasses.ScrollingViewport'},
        'layoutViewportBeforeContentLayout': { type: 'void', declaredBy: 'org.apache.flex.html.supportClasses.ScrollingViewport', parameters: function () { return [  { index: 1, type: 'Number', optional: false },{ index: 2, type: 'Number', optional: false } ]; }},
        'layoutViewportAfterContentLayout': { type: 'void', declaredBy: 'org.apache.flex.html.supportClasses.ScrollingViewport', parameters: function () { return [  { index: 1, type: 'org.apache.flex.geom.Size', optional: false } ]; }}
      };
    }
  };
};