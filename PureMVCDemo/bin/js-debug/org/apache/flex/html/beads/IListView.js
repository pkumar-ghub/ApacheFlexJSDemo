/**
 * Generated by Apache Flex Cross-Compiler from org\apache\flex\html\beads\IListView.as
 * org.apache.flex.html.beads.IListView
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.flex.html.beads.IListView');

goog.require('org.apache.flex.core.IBeadView');
goog.require('org.apache.flex.utils.Language');



/**
 * @interface
 * @extends {org.apache.flex.core.IBeadView}
 */
org.apache.flex.html.beads.IListView = function() {
};
/**  * @type {org.apache.flex.core.IItemRendererParent}
 */org.apache.flex.html.beads.IListView.prototype.dataGroup;


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.flex.html.beads.IListView.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'IListView', qName: 'org.apache.flex.html.beads.IListView', kind: 'interface' }], interfaces: [org.apache.flex.core.IBeadView] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.flex.html.beads.IListView', org.apache.flex.html.beads.IListView);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.flex.html.beads.IListView.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'dataGroup': { type: 'org.apache.flex.core.IItemRendererParent', access: 'readonly', declaredBy: 'org.apache.flex.html.beads.IListView'}
      };
    },
    methods: function () {return {};}
  };
};