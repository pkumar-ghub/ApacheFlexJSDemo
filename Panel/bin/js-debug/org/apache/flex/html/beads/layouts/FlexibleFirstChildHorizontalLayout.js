/**
 * Generated by Apache Flex Cross-Compiler from org/apache/flex/html/beads/layouts/FlexibleFirstChildHorizontalLayout.as
 * org.apache.flex.html.beads.layouts.FlexibleFirstChildHorizontalLayout
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.flex.html.beads.layouts.FlexibleFirstChildHorizontalLayout');

goog.require('org.apache.flex.core.UIBase');
goog.require('org.apache.flex.html.beads.layouts.HorizontalLayout');
goog.require('org.apache.flex.utils.Language');



/**
 *  Constructor.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 * @constructor
 * @extends {org.apache.flex.html.beads.layouts.HorizontalLayout}
 */
org.apache.flex.html.beads.layouts.FlexibleFirstChildHorizontalLayout = function() {
  org.apache.flex.html.beads.layouts.FlexibleFirstChildHorizontalLayout.base(this, 'constructor');
};
goog.inherits(org.apache.flex.html.beads.layouts.FlexibleFirstChildHorizontalLayout, org.apache.flex.html.beads.layouts.HorizontalLayout);


/**
 * @private
 * @type {number}
 */
org.apache.flex.html.beads.layouts.FlexibleFirstChildHorizontalLayout.prototype._maxWidth;


/**
 * @private
 * @type {number}
 */
org.apache.flex.html.beads.layouts.FlexibleFirstChildHorizontalLayout.prototype._maxHeight;


/**
 * @export
 * @override
 */
org.apache.flex.html.beads.layouts.FlexibleFirstChildHorizontalLayout.prototype.layout = function() {
  var /** @type {org.apache.flex.core.ILayoutView} */ contentView = this.layoutView;
  contentView.element.style["display"] = "flex";
  contentView.element.style["flex-flow"] = "row";
  if (!contentView.element.style["align-items"])
    contentView.element.style["align-items"] = "center";
  var /** @type {number} */ n = contentView.numElements;
  if (n == 0)
    return false;
  for (var /** @type {number} */ i = 0; i < n; i++) {
    var /** @type {org.apache.flex.core.UIBase} */ child = org.apache.flex.utils.Language.as(contentView.getElementAt(i), org.apache.flex.core.UIBase);
    child.element.style["flex-grow"] = (i == 0) ? "1" : "0";
    child.element.style["flex-shrink"] = "0";
    if (!isNaN(child.percentWidth))
      child.element.style["flex-basis"] = child.percentWidth.toString() + "%";
  }
  return true;
};


org.apache.flex.html.beads.layouts.FlexibleFirstChildHorizontalLayout.prototype.get__maxWidth = function() {
  return this._maxWidth;
};


org.apache.flex.html.beads.layouts.FlexibleFirstChildHorizontalLayout.prototype.set__maxWidth = function(value) {
  this._maxWidth = value;
};


org.apache.flex.html.beads.layouts.FlexibleFirstChildHorizontalLayout.prototype.get__maxHeight = function() {
  return this._maxHeight;
};


org.apache.flex.html.beads.layouts.FlexibleFirstChildHorizontalLayout.prototype.set__maxHeight = function(value) {
  this._maxHeight = value;
};


Object.defineProperties(org.apache.flex.html.beads.layouts.FlexibleFirstChildHorizontalLayout.prototype, /** @lends {org.apache.flex.html.beads.layouts.FlexibleFirstChildHorizontalLayout.prototype} */ {
/** @export */
maxWidth: {
get: org.apache.flex.html.beads.layouts.FlexibleFirstChildHorizontalLayout.prototype.get__maxWidth,
set: org.apache.flex.html.beads.layouts.FlexibleFirstChildHorizontalLayout.prototype.set__maxWidth},
/** @export */
maxHeight: {
get: org.apache.flex.html.beads.layouts.FlexibleFirstChildHorizontalLayout.prototype.get__maxHeight,
set: org.apache.flex.html.beads.layouts.FlexibleFirstChildHorizontalLayout.prototype.set__maxHeight}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.flex.html.beads.layouts.FlexibleFirstChildHorizontalLayout.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'FlexibleFirstChildHorizontalLayout', qName: 'org.apache.flex.html.beads.layouts.FlexibleFirstChildHorizontalLayout', kind: 'class' }] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.flex.html.beads.layouts.FlexibleFirstChildHorizontalLayout', org.apache.flex.html.beads.layouts.FlexibleFirstChildHorizontalLayout);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.flex.html.beads.layouts.FlexibleFirstChildHorizontalLayout.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'maxWidth': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.flex.html.beads.layouts.FlexibleFirstChildHorizontalLayout'},
        'maxHeight': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.flex.html.beads.layouts.FlexibleFirstChildHorizontalLayout'}
      };
    },
    methods: function () {
      return {
        'FlexibleFirstChildHorizontalLayout': { type: '', declaredBy: 'org.apache.flex.html.beads.layouts.FlexibleFirstChildHorizontalLayout'},
        'layout': { type: 'Boolean', declaredBy: 'org.apache.flex.html.beads.layouts.FlexibleFirstChildHorizontalLayout'}
      };
    }
  };
};