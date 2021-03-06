/**
 * Generated by Apache Flex Cross-Compiler from org/apache/flex/core/ILayoutHost.as
 * org.apache.flex.core.ILayoutHost
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.flex.core.ILayoutHost');




/**
 * @interface
 */
org.apache.flex.core.ILayoutHost = function() {
};
/**  * @type {org.apache.flex.core.ILayoutView}
 */org.apache.flex.core.ILayoutHost.prototype.contentView;
org.apache.flex.core.ILayoutHost.prototype.beforeLayout = function() {
};
org.apache.flex.core.ILayoutHost.prototype.afterLayout = function() {
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.flex.core.ILayoutHost.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'ILayoutHost', qName: 'org.apache.flex.core.ILayoutHost', kind: 'interface' }] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.flex.core.ILayoutHost', org.apache.flex.core.ILayoutHost);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.flex.core.ILayoutHost.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'contentView': { type: 'org.apache.flex.core.ILayoutView', access: 'readonly', declaredBy: 'org.apache.flex.core.ILayoutHost'}
      };
    },
    methods: function () {
      return {
        'beforeLayout': { type: 'void', declaredBy: 'org.apache.flex.core.ILayoutHost'},
        'afterLayout': { type: 'void', declaredBy: 'org.apache.flex.core.ILayoutHost'}
      };
    }
  };
};