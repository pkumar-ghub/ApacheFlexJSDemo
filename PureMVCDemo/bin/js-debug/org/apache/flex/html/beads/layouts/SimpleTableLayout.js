/**
 * Generated by Apache Flex Cross-Compiler from org\apache\flex\html\beads\layouts\SimpleTableLayout.as
 * org.apache.flex.html.beads.layouts.SimpleTableLayout
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.flex.html.beads.layouts.SimpleTableLayout');

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
org.apache.flex.html.beads.layouts.SimpleTableLayout = function() {
  org.apache.flex.html.beads.layouts.SimpleTableLayout.base(this, 'constructor');
};
goog.inherits(org.apache.flex.html.beads.layouts.SimpleTableLayout, org.apache.flex.core.LayoutBase);


/**
 * @copy org.apache.flex.core.IBeadLayout#layout
 * @flexjsignorecoercion org.apache.flex.core.ILayoutHost
 * @flexjsignorecoercion org.apache.flex.core.UIBase
 * @export
 * @override
 */
org.apache.flex.html.beads.layouts.SimpleTableLayout.prototype.layout = function() {
  
  return true;
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.flex.html.beads.layouts.SimpleTableLayout.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'SimpleTableLayout', qName: 'org.apache.flex.html.beads.layouts.SimpleTableLayout', kind: 'class' }], interfaces: [org.apache.flex.core.IBeadLayout] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.flex.html.beads.layouts.SimpleTableLayout', org.apache.flex.html.beads.layouts.SimpleTableLayout);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.flex.html.beads.layouts.SimpleTableLayout.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {return {};},
    methods: function () {
      return {
        'SimpleTableLayout': { type: '', declaredBy: 'org.apache.flex.html.beads.layouts.SimpleTableLayout'},
        'layout': { type: 'Boolean', declaredBy: 'org.apache.flex.html.beads.layouts.SimpleTableLayout'}
      };
    }
  };
};