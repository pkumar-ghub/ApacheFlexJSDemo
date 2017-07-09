/**
 * Generated by Apache Flex Cross-Compiler from org/apache/flex/html/beads/layouts/TileLayout.as
 * org.apache.flex.html.beads.layouts.TileLayout
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.flex.html.beads.layouts.TileLayout');

goog.require('org.apache.flex.core.IParentIUIBase');
goog.require('org.apache.flex.core.LayoutBase');
goog.require('org.apache.flex.utils.CSSContainerUtils');
goog.require('org.apache.flex.core.IBeadLayout');
goog.require('org.apache.flex.utils.Language');



/**
 *  constructor.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 * @constructor
 * @extends {org.apache.flex.core.LayoutBase}
 * @implements {org.apache.flex.core.IBeadLayout}
 */
org.apache.flex.html.beads.layouts.TileLayout = function() {
  
  this._columnWidth = Number.NaN;
  this._rowHeight = Number.NaN;
  org.apache.flex.html.beads.layouts.TileLayout.base(this, 'constructor');
};
goog.inherits(org.apache.flex.html.beads.layouts.TileLayout, org.apache.flex.core.LayoutBase);


/**
 * @private
 * @type {number}
 */
org.apache.flex.html.beads.layouts.TileLayout.prototype._numColumns = 4;


/**
 * @private
 * @type {number}
 */
org.apache.flex.html.beads.layouts.TileLayout.prototype._columnWidth;


/**
 * @private
 * @type {number}
 */
org.apache.flex.html.beads.layouts.TileLayout.prototype._rowHeight;


/**
 * @copy org.apache.flex.core.IBeadLayout#layout
 * @export
 * @override
 */
org.apache.flex.html.beads.layouts.TileLayout.prototype.layout = function() {
  var /** @type {org.apache.flex.geom.Rectangle} */ paddingMetrics = org.apache.flex.utils.CSSContainerUtils.getPaddingMetrics(this.host);
  var /** @type {org.apache.flex.geom.Rectangle} */ borderMetrics = org.apache.flex.utils.CSSContainerUtils.getBorderMetrics(this.host);
  
  var /** @type {Array} */ children;
  var /** @type {number} */ i = 0;
  var /** @type {number} */ n = 0;
  var /** @type {org.apache.flex.core.UIBase} */ child;
  var /** @type {number} */ xpos;
  var /** @type {number} */ ypos;
  var /** @type {number} */ useWidth;
  var /** @type {number} */ useHeight;
  var /** @type {number} */ adjustedWidth = Math.floor(this.host.width - borderMetrics.left - borderMetrics.right);
  var /** @type {number} */ adjustedHeight = Math.floor(this.host.height - borderMetrics.top - borderMetrics.bottom);
  var /** @type {org.apache.flex.core.IParentIUIBase} */ contentView = org.apache.flex.utils.Language.as(this.layoutView, org.apache.flex.core.IParentIUIBase);
  children = contentView.internalChildren();
  n = children.length;
  if (n === 0)
    return false;
  contentView.element.style["display"] = "flex";
  contentView.element.style["flex-flow"] = "row wrap";
  var /** @type {number} */ realN = n;
  for (i = 0; i < n; i++) {
    child = children[i].flexjs_wrapper;
    if (!child.visible)
      realN--;
  }
  xpos = 0;
  ypos = 0;
  useWidth = this.columnWidth;
  useHeight = this.rowHeight;
  if (isNaN(useWidth)) {
    useWidth = Math.floor(adjustedWidth / this.numColumns);
  }
  if (isNaN(useHeight)) {
    var /** @type {number} */ numRows = Math.floor(realN / this.numColumns);
    if (org.apache.flex.utils.Language.closure(this.host.isHeightSizedToContent, this.host, 'isHeightSizedToContent'))
      useHeight = 30;
    else
      useHeight = Math.floor(adjustedHeight / numRows);
  }
  for (i = 0; i < n; i++) {
    child = children[i].flexjs_wrapper;
    if (!child.visible)
      continue;
    child.setDisplayStyleForLayout('inline-block');
    child.width = useWidth;
    child.height = useHeight;
  }
  return true;
};


org.apache.flex.html.beads.layouts.TileLayout.prototype.get__numColumns = function() {
  return this._numColumns;
};


org.apache.flex.html.beads.layouts.TileLayout.prototype.set__numColumns = function(value) {
  this._numColumns = value;
};


org.apache.flex.html.beads.layouts.TileLayout.prototype.get__columnWidth = function() {
  return this._columnWidth;
};


org.apache.flex.html.beads.layouts.TileLayout.prototype.set__columnWidth = function(value) {
  this._columnWidth = value;
};


org.apache.flex.html.beads.layouts.TileLayout.prototype.get__rowHeight = function() {
  return this._rowHeight;
};


org.apache.flex.html.beads.layouts.TileLayout.prototype.set__rowHeight = function(value) {
  this._rowHeight = value;
};


Object.defineProperties(org.apache.flex.html.beads.layouts.TileLayout.prototype, /** @lends {org.apache.flex.html.beads.layouts.TileLayout.prototype} */ {
/** @export */
numColumns: {
get: org.apache.flex.html.beads.layouts.TileLayout.prototype.get__numColumns,
set: org.apache.flex.html.beads.layouts.TileLayout.prototype.set__numColumns},
/** @export */
columnWidth: {
get: org.apache.flex.html.beads.layouts.TileLayout.prototype.get__columnWidth,
set: org.apache.flex.html.beads.layouts.TileLayout.prototype.set__columnWidth},
/** @export */
rowHeight: {
get: org.apache.flex.html.beads.layouts.TileLayout.prototype.get__rowHeight,
set: org.apache.flex.html.beads.layouts.TileLayout.prototype.set__rowHeight}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.flex.html.beads.layouts.TileLayout.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'TileLayout', qName: 'org.apache.flex.html.beads.layouts.TileLayout', kind: 'class' }], interfaces: [org.apache.flex.core.IBeadLayout] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.flex.html.beads.layouts.TileLayout', org.apache.flex.html.beads.layouts.TileLayout);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.flex.html.beads.layouts.TileLayout.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'numColumns': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.flex.html.beads.layouts.TileLayout'},
        'columnWidth': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.flex.html.beads.layouts.TileLayout'},
        'rowHeight': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.flex.html.beads.layouts.TileLayout'}
      };
    },
    methods: function () {
      return {
        'TileLayout': { type: '', declaredBy: 'org.apache.flex.html.beads.layouts.TileLayout'},
        'layout': { type: 'Boolean', declaredBy: 'org.apache.flex.html.beads.layouts.TileLayout'}
      };
    }
  };
};