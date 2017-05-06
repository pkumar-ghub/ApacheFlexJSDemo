/**
 * Generated by Apache Flex Cross-Compiler from org\apache\flex\core\IApplicationView.as
 * org.apache.flex.core.IApplicationView
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.flex.core.IApplicationView');

goog.require('org.apache.flex.core.IStatesObject');
goog.require('org.apache.flex.core.IUIBase');
goog.require('org.apache.flex.utils.Language');



/**
 * @interface
 * @extends {org.apache.flex.core.IUIBase}
 * @extends {org.apache.flex.core.IStatesObject}
 */
org.apache.flex.core.IApplicationView = function() {
};
/**  * @type {Object}
 */org.apache.flex.core.IApplicationView.prototype.applicationModel;


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.flex.core.IApplicationView.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'IApplicationView', qName: 'org.apache.flex.core.IApplicationView', kind: 'interface' }], interfaces: [org.apache.flex.core.IUIBase, org.apache.flex.core.IStatesObject] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.flex.core.IApplicationView', org.apache.flex.core.IApplicationView);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.flex.core.IApplicationView.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'applicationModel': { type: 'Object', access: 'writeonly', declaredBy: 'org.apache.flex.core.IApplicationView'}
      };
    },
    methods: function () {return {};}
  };
};