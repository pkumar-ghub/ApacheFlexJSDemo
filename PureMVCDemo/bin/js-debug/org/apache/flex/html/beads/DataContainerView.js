/**
 * Generated by Apache Flex Cross-Compiler from org\apache\flex\html\beads\DataContainerView.as
 * org.apache.flex.html.beads.DataContainerView
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.flex.html.beads.DataContainerView');

goog.require('org.apache.flex.core.IDataProviderModel');
goog.require('org.apache.flex.events.Event');
goog.require('org.apache.flex.html.beads.ContainerView');
goog.require('org.apache.flex.html.beads.IListView');
goog.require('org.apache.flex.utils.Language');



/**
 * @constructor
 * @extends {org.apache.flex.html.beads.ContainerView}
 * @implements {org.apache.flex.html.beads.IListView}
 */
org.apache.flex.html.beads.DataContainerView = function() {
  org.apache.flex.html.beads.DataContainerView.base(this, 'constructor');
};
goog.inherits(org.apache.flex.html.beads.DataContainerView, org.apache.flex.html.beads.ContainerView);


/**
 * @protected
 * @type {org.apache.flex.core.IDataProviderModel}
 */
org.apache.flex.html.beads.DataContainerView.prototype.dataModel;


/**
 * @protected
 * @param {org.apache.flex.events.Event} event
 */
org.apache.flex.html.beads.DataContainerView.prototype.beadsAddedHandler = function(event) {
  this.dataModel = org.apache.flex.utils.Language.as(this._strand.getBeadByType(org.apache.flex.core.IDataProviderModel), org.apache.flex.core.IDataProviderModel);
  this.host.addEventListener("itemsCreated", org.apache.flex.utils.Language.closure(this.itemsCreatedHandler, this, 'itemsCreatedHandler'));
  this.dataModel.addEventListener("dataProviderChanged", org.apache.flex.utils.Language.closure(this.dataProviderChangeHandler, this, 'dataProviderChangeHandler'));
};


/**
 * @asprivate
 * @protected
 * @override
 */
org.apache.flex.html.beads.DataContainerView.prototype.handleInitComplete = function(event) {
  org.apache.flex.html.beads.DataContainerView.superClass_.handleInitComplete.apply(this, [ event] );
};


/**
 * @asprivate
 * @protected
 * @param {org.apache.flex.events.Event} event
 */
org.apache.flex.html.beads.DataContainerView.prototype.itemsCreatedHandler = function(event) {
  org.apache.flex.utils.Language.trace("DataContainerView: itemsCreatedHandler");
  this.host.dispatchEvent(new org.apache.flex.events.Event("layoutNeeded"));
};


/**
 * @asprivate
 * @protected
 * @param {org.apache.flex.events.Event} event
 */
org.apache.flex.html.beads.DataContainerView.prototype.dataProviderChangeHandler = function(event) {
  org.apache.flex.utils.Language.trace("DataContainerView: dataProviderChangeHandler");
  this.performLayout(event);
};


org.apache.flex.html.beads.DataContainerView.prototype.set__strand = function(value) {
  this._strand = value;
  org.apache.flex.html.beads.DataContainerView.superClass_.set__strand.apply(this, [ value] );
  this.host.addEventListener("beadsAdded", org.apache.flex.utils.Language.closure(this.beadsAddedHandler, this, 'beadsAddedHandler'));
};


org.apache.flex.html.beads.DataContainerView.prototype.get__dataGroup = function() {
  return org.apache.flex.html.beads.DataContainerView.superClass_.get__contentView.apply(this);
};


Object.defineProperties(org.apache.flex.html.beads.DataContainerView.prototype, /** @lends {org.apache.flex.html.beads.DataContainerView.prototype} */ {
/** @export */
strand: {
set: org.apache.flex.html.beads.DataContainerView.prototype.set__strand},
/** @export */
dataGroup: {
get: org.apache.flex.html.beads.DataContainerView.prototype.get__dataGroup}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.flex.html.beads.DataContainerView.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'DataContainerView', qName: 'org.apache.flex.html.beads.DataContainerView', kind: 'class' }], interfaces: [org.apache.flex.html.beads.IListView] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.flex.html.beads.DataContainerView', org.apache.flex.html.beads.DataContainerView);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.flex.html.beads.DataContainerView.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'strand': { type: 'org.apache.flex.core.IStrand', access: 'writeonly', declaredBy: 'org.apache.flex.html.beads.DataContainerView'},
        'dataGroup': { type: 'org.apache.flex.core.IItemRendererParent', access: 'readonly', declaredBy: 'org.apache.flex.html.beads.DataContainerView'}
      };
    },
    methods: function () {
      return {
        'DataContainerView': { type: '', declaredBy: 'org.apache.flex.html.beads.DataContainerView'}
      };
    }
  };
};