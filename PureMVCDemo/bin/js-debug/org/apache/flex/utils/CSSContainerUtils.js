/**
 * Generated by Apache Flex Cross-Compiler from org\apache\flex\utils\CSSContainerUtils.as
 * org.apache.flex.utils.CSSContainerUtils
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.flex.utils.CSSContainerUtils');

goog.require('org.apache.flex.core.ValuesManager');
goog.require('org.apache.flex.geom.Rectangle');
goog.require('org.apache.flex.utils.CSSUtils');
goog.require('org.apache.flex.utils.Language');



/**
 * @constructor
 */
org.apache.flex.utils.CSSContainerUtils = function() {
};


/**
 *  Compute the width/thickness of the four border edges.
 *  
 *  @asparam object The object with style values.
 *  @asparam quick True to assume all four edges have the same widths.
 *  @asreturn A Rectangle representing the four sides.
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 * @export
 * @param {Object} object
 * @param {boolean=} quick
 * @return {org.apache.flex.geom.Rectangle}
 */
org.apache.flex.utils.CSSContainerUtils.getBorderMetrics = function(object, quick) {
  quick = typeof quick !== 'undefined' ? quick : false;
  var /** @type {Object} */ borderThickness = org.apache.flex.core.ValuesManager["valuesImpl"].getValue(object, "border-width");
  var /** @type {Object} */ borderStyle = org.apache.flex.core.ValuesManager["valuesImpl"].getValue(object, "border-style");
  var /** @type {Object} */ border = org.apache.flex.core.ValuesManager["valuesImpl"].getValue(object, "border");
  var /** @type {number} */ borderOffset;
  if (borderStyle == "none")
    borderOffset = 0; else if (borderStyle != null && borderThickness != null) {
    if (org.apache.flex.utils.Language.is(borderThickness, String))
      borderOffset = org.apache.flex.utils.CSSUtils.toNumber(org.apache.flex.utils.Language.as(borderThickness, String), object.width);
    else
      borderOffset = Number(borderThickness);
    if (isNaN(borderOffset))
      borderOffset = 0;
  } else {
    border = org.apache.flex.core.ValuesManager["valuesImpl"].getValue(object, "border");
    if (border != null) {
      if (org.apache.flex.utils.Language.is(border, Array)) {
        borderOffset = org.apache.flex.utils.CSSUtils.toNumber(border[0], object.width);
        borderStyle = border[1];
      }
      else if (border == "none")
        borderOffset = 0;
      else if (org.apache.flex.utils.Language.is(border, String))
        borderOffset = org.apache.flex.utils.CSSUtils.toNumber(org.apache.flex.utils.Language.as(border, String), object.width);
      else
        borderOffset = Number(border);
    }
    else
      borderOffset = 0;
  }
  if (quick)
    return new org.apache.flex.geom.Rectangle(borderOffset, borderOffset, 0, 0);
  var /** @type {number} */ widthTop = borderOffset;
  var /** @type {number} */ widthLeft = borderOffset;
  var /** @type {number} */ widthBottom = borderOffset;
  var /** @type {number} */ widthRight = borderOffset;
  var /** @type {*} */ value;
  var /** @type {Array} */ values;
  var /** @type {number} */ n = 0;
  value = org.apache.flex.core.ValuesManager["valuesImpl"].getValue(object, "border-top");
  if (value != null) {
    if (org.apache.flex.utils.Language.is(value, Array))
      values = org.apache.flex.utils.Language.as(value, Array);
    else
      values = value.split(" ");
    n = values.length;
    widthTop = org.apache.flex.utils.CSSUtils.toNumber(values[0]);
  }
  value = org.apache.flex.core.ValuesManager["valuesImpl"].getValue(object, "border-left");
  if (value != null) {
    if (org.apache.flex.utils.Language.is(value, Array))
      values = org.apache.flex.utils.Language.as(value, Array);
    else
      values = value.split(" ");
    n = values.length;
    widthLeft = org.apache.flex.utils.CSSUtils.toNumber(values[0]);
  }
  value = org.apache.flex.core.ValuesManager["valuesImpl"].getValue(object, "border-bottom");
  if (value != null) {
    if (org.apache.flex.utils.Language.is(value, Array))
      values = org.apache.flex.utils.Language.as(value, Array);
    else
      values = value.split(" ");
    n = values.length;
    widthBottom = org.apache.flex.utils.CSSUtils.toNumber(values[0]);
  }
  value = org.apache.flex.core.ValuesManager["valuesImpl"].getValue(object, "border-right");
  if (value != null) {
    if (org.apache.flex.utils.Language.is(value, Array))
      values = org.apache.flex.utils.Language.as(value, Array);
    else
      values = value.split(" ");
    n = values.length;
    widthRight = org.apache.flex.utils.CSSUtils.toNumber(values[0]);
  }
  return new org.apache.flex.geom.Rectangle(widthLeft, widthTop, widthRight - widthLeft, widthTop - widthBottom);
};


/**
 *  Compute the width/thickness of the four padding sides.
 *  
 *  @asparam object The object with style values.
 *  @asreturn A Rectangle representing the padding on each of the four sides.
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 * @export
 * @param {Object} object
 * @return {org.apache.flex.geom.Rectangle}
 */
org.apache.flex.utils.CSSContainerUtils.getPaddingMetrics = function(object) {
  var /** @type {Object} */ paddingLeft;
  var /** @type {Object} */ paddingTop;
  var /** @type {Object} */ paddingRight;
  var /** @type {Object} */ paddingBottom;
  var /** @type {Object} */ padding = org.apache.flex.core.ValuesManager["valuesImpl"].getValue(object, "padding");
  paddingLeft = org.apache.flex.core.ValuesManager["valuesImpl"].getValue(object, "padding-left");
  paddingTop = org.apache.flex.core.ValuesManager["valuesImpl"].getValue(object, "padding-top");
  paddingRight = org.apache.flex.core.ValuesManager["valuesImpl"].getValue(object, "padding-right");
  paddingBottom = org.apache.flex.core.ValuesManager["valuesImpl"].getValue(object, "padding-bottom");
  var /** @type {number} */ pl = org.apache.flex.utils.CSSUtils.getLeftValue(paddingLeft, padding, object.width);
  var /** @type {number} */ pt = org.apache.flex.utils.CSSUtils.getTopValue(paddingTop, padding, object.height);
  var /** @type {number} */ pr = org.apache.flex.utils.CSSUtils.getRightValue(paddingRight, padding, object.width);
  var /** @type {number} */ pb = org.apache.flex.utils.CSSUtils.getBottomValue(paddingBottom, padding, object.height);
  return new org.apache.flex.geom.Rectangle(pl, pt, pr - pl, pb - pt);
};


/**
 *  Combine padding and border.  Often used in non-containers.
 *  
 *  @asparam object The object with style values.
 *  @asreturn A Rectangle representing the padding and border on each of the four sides.
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 * @export
 * @param {Object} object
 * @return {org.apache.flex.geom.Rectangle}
 */
org.apache.flex.utils.CSSContainerUtils.getBorderAndPaddingMetrics = function(object) {
  var /** @type {org.apache.flex.geom.Rectangle} */ borderMetrics = org.apache.flex.utils.CSSContainerUtils.getBorderMetrics(object);
  var /** @type {org.apache.flex.geom.Rectangle} */ paddingMetrics = org.apache.flex.utils.CSSContainerUtils.getPaddingMetrics(object);
  return new org.apache.flex.geom.Rectangle(borderMetrics.left + paddingMetrics.left, borderMetrics.top + paddingMetrics.top, borderMetrics.width + paddingMetrics.width, borderMetrics.height + paddingMetrics.height);
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.flex.utils.CSSContainerUtils.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'CSSContainerUtils', qName: 'org.apache.flex.utils.CSSContainerUtils', kind: 'class' }] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.flex.utils.CSSContainerUtils', org.apache.flex.utils.CSSContainerUtils);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.flex.utils.CSSContainerUtils.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {return {};},
    methods: function () {
      return {
        '|getBorderMetrics': { type: 'org.apache.flex.geom.Rectangle', declaredBy: 'org.apache.flex.utils.CSSContainerUtils', parameters: function () { return [  { index: 1, type: 'Object', optional: false },{ index: 2, type: 'Boolean', optional: true } ]; }},
        '|getPaddingMetrics': { type: 'org.apache.flex.geom.Rectangle', declaredBy: 'org.apache.flex.utils.CSSContainerUtils', parameters: function () { return [  { index: 1, type: 'Object', optional: false } ]; }},
        '|getBorderAndPaddingMetrics': { type: 'org.apache.flex.geom.Rectangle', declaredBy: 'org.apache.flex.utils.CSSContainerUtils', parameters: function () { return [  { index: 1, type: 'Object', optional: false } ]; }}
      };
    }
  };
};