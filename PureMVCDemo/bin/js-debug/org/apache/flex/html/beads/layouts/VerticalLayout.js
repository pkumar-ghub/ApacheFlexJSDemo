/**
 * Generated by Apache Flex Cross-Compiler from org\apache\flex\html\beads\layouts\VerticalLayout.as
 * org.apache.flex.html.beads.layouts.VerticalLayout
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.flex.html.beads.layouts.VerticalLayout');

goog.require('org.apache.flex.core.IParentIUIBase');
goog.require('org.apache.flex.core.LayoutBase');
goog.require('org.apache.flex.core.IBeadLayout');
goog.require('org.apache.flex.utils.Language');



/**
 *  Constructor.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 * @constructor
 * @extends {org.apache.flex.core.LayoutBase}
 * @implements {org.apache.flex.core.IBeadLayout}
 */
org.apache.flex.html.beads.layouts.VerticalLayout = function() {
  org.apache.flex.html.beads.layouts.VerticalLayout.base(this, 'constructor');
};
goog.inherits(org.apache.flex.html.beads.layouts.VerticalLayout, org.apache.flex.core.LayoutBase);


/**
 *  Layout children vertically
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 *  @flexjsignorecoercion org.apache.flex.core.ILayoutHost
 * @export
 * @override
 */
org.apache.flex.html.beads.layouts.VerticalLayout.prototype.layout = function() {
  
  var /** @type {Array} */ children;
  var /** @type {number} */ i = 0;
  var /** @type {number} */ n = 0;
  var /** @type {org.apache.flex.core.IParentIUIBase} */ contentView = org.apache.flex.utils.Language.as(this.layoutView, org.apache.flex.core.IParentIUIBase);
  children = contentView.internalChildren();
  n = children.length;
  for (i = 0; i < n; i++) {
    var /** @type {org.apache.flex.core.WrappedHTMLElement} */ child = children[i];
    child.flexjs_wrapper.setDisplayStyleForLayout('block');
    if (child.style.display === 'none') {
      child.flexjs_wrapper.setDisplayStyleForLayout('block');
    } else {
      child.style.display = 'inline-block';
      child.style.display = 'block';
    }
    child.flexjs_wrapper.dispatchEvent('sizeChanged');
  }
  return true;
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.flex.html.beads.layouts.VerticalLayout.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'VerticalLayout', qName: 'org.apache.flex.html.beads.layouts.VerticalLayout', kind: 'class' }], interfaces: [org.apache.flex.core.IBeadLayout] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.flex.html.beads.layouts.VerticalLayout', org.apache.flex.html.beads.layouts.VerticalLayout);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.flex.html.beads.layouts.VerticalLayout.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {return {};},
    methods: function () {
      return {
        'VerticalLayout': { type: '', declaredBy: 'org.apache.flex.html.beads.layouts.VerticalLayout'},
        'layout': { type: 'Boolean', declaredBy: 'org.apache.flex.html.beads.layouts.VerticalLayout'}
      };
    }
  };
};