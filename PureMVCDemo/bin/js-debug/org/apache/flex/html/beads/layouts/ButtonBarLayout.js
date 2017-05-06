/**
 * Generated by Apache Flex Cross-Compiler from org\apache\flex\html\beads\layouts\ButtonBarLayout.as
 * org.apache.flex.html.beads.layouts.ButtonBarLayout
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.flex.html.beads.layouts.ButtonBarLayout');

goog.require('org.apache.flex.core.ILayoutChild');
goog.require('org.apache.flex.core.IStrand');
goog.require('org.apache.flex.core.IStyleableObject');
goog.require('org.apache.flex.html.beads.layouts.HorizontalFlexLayout');
goog.require('org.apache.flex.html.beads.models.ButtonBarModel');
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
 * @extends {org.apache.flex.html.beads.layouts.HorizontalFlexLayout}
 * @implements {org.apache.flex.core.IBeadLayout}
 */
org.apache.flex.html.beads.layouts.ButtonBarLayout = function() {
  
  this._widthType = org.apache.flex.html.beads.models.ButtonBarModel.PIXEL_WIDTHS;
  org.apache.flex.html.beads.layouts.ButtonBarLayout.base(this, 'constructor');
};
goog.inherits(org.apache.flex.html.beads.layouts.ButtonBarLayout, org.apache.flex.html.beads.layouts.HorizontalFlexLayout);


/**
 * @private
 * @type {number}
 */
org.apache.flex.html.beads.layouts.ButtonBarLayout.prototype._widthType;


/**
 * @private
 * @type {Array}
 */
org.apache.flex.html.beads.layouts.ButtonBarLayout.prototype._buttonWidths = null;


/**
 * @copy org.apache.flex.core.IBeadLayout#layout
 * @export
 * @override
 */
org.apache.flex.html.beads.layouts.ButtonBarLayout.prototype.layout = function() {
  var /** @type {org.apache.flex.core.ILayoutView} */ contentView = this.layoutView;
  var /** @type {org.apache.flex.html.beads.models.ButtonBarModel} */ model = org.apache.flex.utils.Language.as(org.apache.flex.utils.Language.as(this.host, org.apache.flex.core.IStrand).getBeadByType(org.apache.flex.html.beads.models.ButtonBarModel), org.apache.flex.html.beads.models.ButtonBarModel);
  if (model) {
    this.buttonWidths = model.buttonWidths;
    this._widthType = model.widthType;
  }
  var /** @type {number} */ n = contentView.numElements;
  if (n <= 0)
    return false;
  for (var /** @type {number} */ i = 0; i < n; i++) {
    var /** @type {org.apache.flex.core.ILayoutChild} */ ilc = org.apache.flex.utils.Language.as(contentView.getElementAt(i), org.apache.flex.core.ILayoutChild);
    if (ilc == null || !ilc.visible)
      continue;
    if (!org.apache.flex.utils.Language.is(ilc, org.apache.flex.core.IStyleableObject))
      continue;
    
    if (this.buttonWidths) {
      var /** @type {*} */ widthValue = this.buttonWidths[i];
      if (this._widthType == org.apache.flex.html.beads.models.ButtonBarModel.PIXEL_WIDTHS) {
        if (widthValue != null)
          ilc.width = Number(widthValue);
      } else if (this._widthType == org.apache.flex.html.beads.models.ButtonBarModel.PROPORTIONAL_WIDTHS) {
        if (widthValue != null)
          ilc.element.style["flex-grow"] = String(widthValue);
      } else if (this._widthType == org.apache.flex.html.beads.models.ButtonBarModel.PERCENT_WIDTHS) {
        if (widthValue != null)
          ilc.percentWidth = Number(widthValue);
      }
    } else {
      ilc.element.style["flex-grow"] = "1";
    }
    ilc.height = contentView.height;
  }
  return org.apache.flex.html.beads.layouts.ButtonBarLayout.superClass_.layout.apply(this);
};


org.apache.flex.html.beads.layouts.ButtonBarLayout.prototype.get__buttonWidths = function() {
  return this._buttonWidths;
};


org.apache.flex.html.beads.layouts.ButtonBarLayout.prototype.set__buttonWidths = function(value) {
  this._buttonWidths = value;
};


Object.defineProperties(org.apache.flex.html.beads.layouts.ButtonBarLayout.prototype, /** @lends {org.apache.flex.html.beads.layouts.ButtonBarLayout.prototype} */ {
/** @export */
buttonWidths: {
get: org.apache.flex.html.beads.layouts.ButtonBarLayout.prototype.get__buttonWidths,
set: org.apache.flex.html.beads.layouts.ButtonBarLayout.prototype.set__buttonWidths}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.flex.html.beads.layouts.ButtonBarLayout.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'ButtonBarLayout', qName: 'org.apache.flex.html.beads.layouts.ButtonBarLayout', kind: 'class' }], interfaces: [org.apache.flex.core.IBeadLayout] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.flex.html.beads.layouts.ButtonBarLayout', org.apache.flex.html.beads.layouts.ButtonBarLayout);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.flex.html.beads.layouts.ButtonBarLayout.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'buttonWidths': { type: 'Array', access: 'readwrite', declaredBy: 'org.apache.flex.html.beads.layouts.ButtonBarLayout'}
      };
    },
    methods: function () {
      return {
        'ButtonBarLayout': { type: '', declaredBy: 'org.apache.flex.html.beads.layouts.ButtonBarLayout'},
        'layout': { type: 'Boolean', declaredBy: 'org.apache.flex.html.beads.layouts.ButtonBarLayout'}
      };
    }
  };
};