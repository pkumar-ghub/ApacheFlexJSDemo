/**
 * Generated by Apache Flex Cross-Compiler from org\apache\flex\utils\UIUtils.as
 * org.apache.flex.utils.UIUtils
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.flex.utils.UIUtils');

goog.require('org.apache.flex.core.IChild');
goog.require('org.apache.flex.core.IPopUpHost');
goog.require('org.apache.flex.core.IUIBase');
goog.require('org.apache.flex.utils.Language');



/**
 * @asprivate
 * @constructor
 */
org.apache.flex.utils.UIUtils = function() {
  throw new Error("UIUtils should not be instantiated.");
};


/**
 *  Centers the given item relative to another item. Typically the item being centered is
 *  a child or sibling of the second item. 
 * 
 *  @asparam item The component item being centered.
 *  @asparam relativeTo The component used as reference for the centering.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 * @export
 * @param {org.apache.flex.core.IUIBase} item
 * @param {org.apache.flex.core.IUIBase} relativeTo
 */
org.apache.flex.utils.UIUtils.center = function(item, relativeTo) {
  var /** @type {number} */ xpos = (relativeTo.width - item.width) / 2;
  var /** @type {number} */ ypos = (relativeTo.height - item.height) / 2;
  item.x = xpos;
  item.y = ypos;
};


/**
 *  Given a component starting point, this function walks up the parent chain
 *  looking for a component that implements the IPopUpHost interface. The function
 *  either returns that component or null if no IPopUpHost can be found. 
 * 
 *  @asparam start A component to start the search.
 *  @asreturn A component that implements IPopUpHost or null.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 * @export
 * @param {org.apache.flex.core.IUIBase} start
 * @return {org.apache.flex.core.IPopUpHost}
 */
org.apache.flex.utils.UIUtils.findPopUpHost = function(start) {
  while (start != null && !org.apache.flex.utils.Language.is(start, org.apache.flex.core.IPopUpHost) && org.apache.flex.utils.Language.is(start, org.apache.flex.core.IChild)) {
    start = org.apache.flex.utils.Language.as(org.apache.flex.utils.Language.as(start, org.apache.flex.core.IChild, true).parent, org.apache.flex.core.IUIBase);
  }
  return org.apache.flex.utils.Language.as(start, org.apache.flex.core.IPopUpHost);
};


/**
 *  Removes the given component from the IPopUpHost. 
 * 
 *  @asparam start A component to start the search.
 *  @asreturn A component that implements IPopUpHost or null.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 * @export
 * @param {org.apache.flex.core.IChild} popUp
 */
org.apache.flex.utils.UIUtils.removePopUp = function(popUp) {
  var /** @type {org.apache.flex.core.IParent} */ start = popUp.parent;
  while (start != null && !org.apache.flex.utils.Language.is(start, org.apache.flex.core.IPopUpHost) && org.apache.flex.utils.Language.is(start, org.apache.flex.core.IChild)) {
    start = org.apache.flex.utils.Language.as(start, org.apache.flex.core.IChild, true).parent;
  }
  org.apache.flex.utils.Language.as(start, org.apache.flex.core.IPopUpHost).removeElement(popUp);
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.flex.utils.UIUtils.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'UIUtils', qName: 'org.apache.flex.utils.UIUtils', kind: 'class' }] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.flex.utils.UIUtils', org.apache.flex.utils.UIUtils);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.flex.utils.UIUtils.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {return {};},
    methods: function () {
      return {
        'UIUtils': { type: '', declaredBy: 'org.apache.flex.utils.UIUtils'},
        '|center': { type: 'void', declaredBy: 'org.apache.flex.utils.UIUtils', parameters: function () { return [  { index: 1, type: 'org.apache.flex.core.IUIBase', optional: false },{ index: 2, type: 'org.apache.flex.core.IUIBase', optional: false } ]; }},
        '|findPopUpHost': { type: 'org.apache.flex.core.IPopUpHost', declaredBy: 'org.apache.flex.utils.UIUtils', parameters: function () { return [  { index: 1, type: 'org.apache.flex.core.IUIBase', optional: false } ]; }},
        '|removePopUp': { type: 'void', declaredBy: 'org.apache.flex.utils.UIUtils', parameters: function () { return [  { index: 1, type: 'org.apache.flex.core.IChild', optional: false } ]; }}
      };
    }
  };
};