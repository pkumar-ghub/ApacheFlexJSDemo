/**
 * Generated by Apache Flex Cross-Compiler from org\apache\flex\html\beads\ITextItemRenderer.as
 * org.apache.flex.html.beads.ITextItemRenderer
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.flex.html.beads.ITextItemRenderer');

goog.require('org.apache.flex.core.ISelectableItemRenderer');
goog.require('org.apache.flex.utils.Language');



/**
 * @interface
 * @extends {org.apache.flex.core.ISelectableItemRenderer}
 */
org.apache.flex.html.beads.ITextItemRenderer = function() {
};
/**  * @type {string}
 */org.apache.flex.html.beads.ITextItemRenderer.prototype.text;


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.flex.html.beads.ITextItemRenderer.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'ITextItemRenderer', qName: 'org.apache.flex.html.beads.ITextItemRenderer', kind: 'interface' }], interfaces: [org.apache.flex.core.ISelectableItemRenderer] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.flex.html.beads.ITextItemRenderer', org.apache.flex.html.beads.ITextItemRenderer);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.flex.html.beads.ITextItemRenderer.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'text': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.flex.html.beads.ITextItemRenderer'}
      };
    },
    methods: function () {return {};}
  };
};