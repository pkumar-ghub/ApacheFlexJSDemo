/**
 * Generated by Apache Flex Cross-Compiler from org/apache/flex/html/beads/NumericStepperView.as
 * org.apache.flex.html.beads.NumericStepperView
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.flex.html.beads.NumericStepperView');

goog.require('org.apache.flex.core.BeadViewBase');
goog.require('org.apache.flex.core.IBead');
goog.require('org.apache.flex.core.IParent');
goog.require('org.apache.flex.core.IParentIUIBase');
goog.require('org.apache.flex.core.IRangeModel');
goog.require('org.apache.flex.core.IUIBase');
goog.require('org.apache.flex.core.UIBase');
goog.require('org.apache.flex.events.IEventDispatcher');
goog.require('org.apache.flex.events.ValueChangeEvent');
goog.require('org.apache.flex.html.Spinner');
goog.require('org.apache.flex.html.TextInput');
goog.require('org.apache.flex.core.IBeadView');
goog.require('org.apache.flex.utils.Language');



/**
 *  constructor.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 * @constructor
 * @extends {org.apache.flex.core.BeadViewBase}
 * @implements {org.apache.flex.core.IBeadView}
 */
org.apache.flex.html.beads.NumericStepperView = function() {
  org.apache.flex.html.beads.NumericStepperView.base(this, 'constructor');
};
goog.inherits(org.apache.flex.html.beads.NumericStepperView, org.apache.flex.core.BeadViewBase);


/**
 * @private
 * @type {org.apache.flex.html.Label}
 */
org.apache.flex.html.beads.NumericStepperView.prototype.label;


/**
 * @private
 * @type {org.apache.flex.html.TextInput}
 */
org.apache.flex.html.beads.NumericStepperView.prototype.input;


/**
 * @private
 * @type {org.apache.flex.html.Spinner}
 */
org.apache.flex.html.beads.NumericStepperView.prototype.spinner;


/**
 * @asprivate
 * @private
 * @param {org.apache.flex.events.Event} event
 */
org.apache.flex.html.beads.NumericStepperView.prototype.sizeChangeHandler = function(event) {
  this.spinner.height = this.input.height;
  this.spinner.width = this.input.height / 2;
  this.input.x = 0;
  this.input.y = 0;
  if (!org.apache.flex.utils.Language.as(this._strand, org.apache.flex.core.UIBase, true).isWidthSizedToContent())
    this.input.width = org.apache.flex.utils.Language.as(this._strand, org.apache.flex.core.UIBase, true).width - this.spinner.width - 2;
  
};


/**
 * @asprivate
 * @private
 * @param {org.apache.flex.events.ValueChangeEvent} event
 */
org.apache.flex.html.beads.NumericStepperView.prototype.spinnerValueChanged = function(event) {
  this.input.text = String(this.spinner.value);
  var /** @type {org.apache.flex.events.ValueChangeEvent} */ newEvent = org.apache.flex.events.ValueChangeEvent.createUpdateEvent(this._strand, "value", event.oldValue, event.newValue);
  org.apache.flex.utils.Language.as(this._strand, org.apache.flex.events.IEventDispatcher, true).dispatchEvent(newEvent);
};


/**
 * @asprivate
 * @private
 * @param {org.apache.flex.events.Event} event
 */
org.apache.flex.html.beads.NumericStepperView.prototype.inputChangeHandler = function(event) {
  var /** @type {number} */ newValue = Number(this.input.text);
  if (!isNaN(newValue)) {
    this.spinner.value = newValue;
  } else {
    this.input.text = String(this.spinner.value);
  }
};


/**
 * @asprivate
 * @private
 * @param {org.apache.flex.events.Event} event
 */
org.apache.flex.html.beads.NumericStepperView.prototype.modelChangeHandler = function(event) {
  var /** @type {number} */ n = org.apache.flex.utils.Language.as(org.apache.flex.utils.Language.as(this._strand, org.apache.flex.core.UIBase, true).model, org.apache.flex.core.IRangeModel, true).value;
  this.input.text = String(org.apache.flex.utils.Language.as(org.apache.flex.utils.Language.as(this._strand, org.apache.flex.core.UIBase, true).model, org.apache.flex.core.IRangeModel, true).value);
};


org.apache.flex.html.beads.NumericStepperView.prototype.set__strand = function(value) {
  org.apache.flex.html.beads.NumericStepperView.superClass_.set__strand.apply(this, [ value] );
  this.input = new org.apache.flex.html.TextInput();
  this.input.className = "NumericStepperInput";
  this.input.typeNames = "NumericStepperInput";
  org.apache.flex.utils.Language.as(value, org.apache.flex.core.IParent, true).addElement(this.input);
  this.input.positioner.style.display = 'inline-block';
  this.input.positioner.style.width = '100px';
  this.spinner = new org.apache.flex.html.Spinner();
  this.spinner.addBead(org.apache.flex.utils.Language.as(org.apache.flex.utils.Language.as(value, org.apache.flex.core.UIBase, true).model, org.apache.flex.core.IBead));
  org.apache.flex.utils.Language.as(value, org.apache.flex.core.IParent, true).addElement(this.spinner);
  this.spinner.height = this.input.height;
  this.spinner.width = this.input.height / 2;
  this.spinner.positioner.style.display = 'inline-block';
  this.input.addEventListener("change", org.apache.flex.utils.Language.closure(this.inputChangeHandler, this, 'inputChangeHandler'));
  this.spinner.addEventListener("valueChange", org.apache.flex.utils.Language.closure(this.spinnerValueChanged, this, 'spinnerValueChanged'));
  org.apache.flex.utils.Language.as(value, org.apache.flex.events.IEventDispatcher, true).addEventListener("widthChanged", org.apache.flex.utils.Language.closure(this.sizeChangeHandler, this, 'sizeChangeHandler'));
  org.apache.flex.utils.Language.as(value, org.apache.flex.events.IEventDispatcher, true).addEventListener("heightChanged", org.apache.flex.utils.Language.closure(this.sizeChangeHandler, this, 'sizeChangeHandler'));
  org.apache.flex.utils.Language.as(value, org.apache.flex.events.IEventDispatcher, true).addEventListener("sizeChanged", org.apache.flex.utils.Language.closure(this.sizeChangeHandler, this, 'sizeChangeHandler'));
  org.apache.flex.utils.Language.as(org.apache.flex.utils.Language.as(value, org.apache.flex.core.UIBase, true).model, org.apache.flex.events.IEventDispatcher, true).addEventListener("valueChange", org.apache.flex.utils.Language.closure(this.modelChangeHandler, this, 'modelChangeHandler'));
  org.apache.flex.utils.Language.as(org.apache.flex.utils.Language.as(value, org.apache.flex.core.UIBase, true).model, org.apache.flex.events.IEventDispatcher, true).addEventListener("minimumChange", org.apache.flex.utils.Language.closure(this.modelChangeHandler, this, 'modelChangeHandler'));
  org.apache.flex.utils.Language.as(org.apache.flex.utils.Language.as(value, org.apache.flex.core.UIBase, true).model, org.apache.flex.events.IEventDispatcher, true).addEventListener("maximumChange", org.apache.flex.utils.Language.closure(this.modelChangeHandler, this, 'modelChangeHandler'));
  org.apache.flex.utils.Language.as(org.apache.flex.utils.Language.as(value, org.apache.flex.core.UIBase, true).model, org.apache.flex.events.IEventDispatcher, true).addEventListener("stepSizeChange", org.apache.flex.utils.Language.closure(this.modelChangeHandler, this, 'modelChangeHandler'));
  org.apache.flex.utils.Language.as(org.apache.flex.utils.Language.as(value, org.apache.flex.core.UIBase, true).model, org.apache.flex.events.IEventDispatcher, true).addEventListener("snapIntervalChange", org.apache.flex.utils.Language.closure(this.modelChangeHandler, this, 'modelChangeHandler'));
  this.input.text = String(this.spinner.value);
  
  this.sizeChangeHandler(null);
};


org.apache.flex.html.beads.NumericStepperView.prototype.get__contentView = function() {
  return org.apache.flex.utils.Language.as(this._strand, org.apache.flex.core.IParentIUIBase);
};


org.apache.flex.html.beads.NumericStepperView.prototype.get__resizableView = function() {
  return org.apache.flex.utils.Language.as(this._strand, org.apache.flex.core.IUIBase);
};


Object.defineProperties(org.apache.flex.html.beads.NumericStepperView.prototype, /** @lends {org.apache.flex.html.beads.NumericStepperView.prototype} */ {
/** @export */
strand: {
set: org.apache.flex.html.beads.NumericStepperView.prototype.set__strand},
/** @export */
contentView: {
get: org.apache.flex.html.beads.NumericStepperView.prototype.get__contentView},
/** @export */
resizableView: {
get: org.apache.flex.html.beads.NumericStepperView.prototype.get__resizableView}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.flex.html.beads.NumericStepperView.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'NumericStepperView', qName: 'org.apache.flex.html.beads.NumericStepperView', kind: 'class' }], interfaces: [org.apache.flex.core.IBeadView] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.flex.html.beads.NumericStepperView', org.apache.flex.html.beads.NumericStepperView);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.flex.html.beads.NumericStepperView.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'strand': { type: 'org.apache.flex.core.IStrand', access: 'writeonly', declaredBy: 'org.apache.flex.html.beads.NumericStepperView'},
        'contentView': { type: 'org.apache.flex.core.IParentIUIBase', access: 'readonly', declaredBy: 'org.apache.flex.html.beads.NumericStepperView'},
        'resizableView': { type: 'org.apache.flex.core.IUIBase', access: 'readonly', declaredBy: 'org.apache.flex.html.beads.NumericStepperView'}
      };
    },
    methods: function () {
      return {
        'NumericStepperView': { type: '', declaredBy: 'org.apache.flex.html.beads.NumericStepperView'}
      };
    }
  };
};