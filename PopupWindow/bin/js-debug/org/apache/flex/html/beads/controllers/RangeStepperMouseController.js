/**
 * Generated by Apache Flex Cross-Compiler from org/apache/flex/html/beads/controllers/RangeStepperMouseController.as
 * org.apache.flex.html.beads.controllers.RangeStepperMouseController
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.flex.html.beads.controllers.RangeStepperMouseController');

goog.require('org.apache.flex.core.UIBase');
goog.require('org.apache.flex.events.MouseEvent');
goog.require('org.apache.flex.html.beads.RangeStepperView');
goog.require('org.apache.flex.html.beads.models.RangeModel');
goog.require('org.apache.flex.core.IBeadController');
goog.require('org.apache.flex.utils.Language');



/**
 *  constructor.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 * @constructor
 * @implements {org.apache.flex.core.IBeadController}
 */
org.apache.flex.html.beads.controllers.RangeStepperMouseController = function() {
};


/**
 * @private
 * @type {org.apache.flex.core.IStrand}
 */
org.apache.flex.html.beads.controllers.RangeStepperMouseController.prototype._strand;


/**
 * @private
 * @type {org.apache.flex.html.ImageButton}
 */
org.apache.flex.html.beads.controllers.RangeStepperMouseController.prototype._incrButton;


/**
 * @private
 * @type {org.apache.flex.html.ImageButton}
 */
org.apache.flex.html.beads.controllers.RangeStepperMouseController.prototype._decrButton;


/**
 * @private
 * @param {org.apache.flex.events.MouseEvent} event
 */
org.apache.flex.html.beads.controllers.RangeStepperMouseController.prototype.handleIncrClick = function(event) {
  var /** @type {org.apache.flex.html.beads.models.RangeModel} */ model = org.apache.flex.utils.Language.as(org.apache.flex.utils.Language.as(this._strand, org.apache.flex.core.UIBase).model, org.apache.flex.html.beads.models.RangeModel);
  var /** @type {number} */ nextValue = model.value + 1;
  if (nextValue >= model.maximum)
    nextValue = model.maximum;
  model.value = nextValue;
};


/**
 * @private
 * @param {org.apache.flex.events.MouseEvent} event
 */
org.apache.flex.html.beads.controllers.RangeStepperMouseController.prototype.handleDecrClick = function(event) {
  var /** @type {org.apache.flex.html.beads.models.RangeModel} */ model = org.apache.flex.utils.Language.as(org.apache.flex.utils.Language.as(this._strand, org.apache.flex.core.UIBase).model, org.apache.flex.html.beads.models.RangeModel);
  var /** @type {number} */ nextValue = model.value - 1;
  if (nextValue < model.minimum)
    nextValue = model.minimum;
  model.value = nextValue;
};


org.apache.flex.html.beads.controllers.RangeStepperMouseController.prototype.set__strand = function(value) {
  this._strand = value;
  var /** @type {org.apache.flex.html.beads.RangeStepperView} */ stepperView = org.apache.flex.utils.Language.as(this._strand.getBeadByType(org.apache.flex.html.beads.RangeStepperView), org.apache.flex.html.beads.RangeStepperView);
  this._incrButton = stepperView.incrementButton;
  this._incrButton.addEventListener(org.apache.flex.events.MouseEvent.CLICK, org.apache.flex.utils.Language.closure(this.handleIncrClick, this, 'handleIncrClick'));
  this._decrButton = stepperView.decrementButton;
  this._decrButton.addEventListener(org.apache.flex.events.MouseEvent.CLICK, org.apache.flex.utils.Language.closure(this.handleDecrClick, this, 'handleDecrClick'));
};


Object.defineProperties(org.apache.flex.html.beads.controllers.RangeStepperMouseController.prototype, /** @lends {org.apache.flex.html.beads.controllers.RangeStepperMouseController.prototype} */ {
/** @export */
strand: {
set: org.apache.flex.html.beads.controllers.RangeStepperMouseController.prototype.set__strand}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.flex.html.beads.controllers.RangeStepperMouseController.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'RangeStepperMouseController', qName: 'org.apache.flex.html.beads.controllers.RangeStepperMouseController', kind: 'class' }], interfaces: [org.apache.flex.core.IBeadController] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.flex.html.beads.controllers.RangeStepperMouseController', org.apache.flex.html.beads.controllers.RangeStepperMouseController);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.flex.html.beads.controllers.RangeStepperMouseController.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'strand': { type: 'org.apache.flex.core.IStrand', access: 'writeonly', declaredBy: 'org.apache.flex.html.beads.controllers.RangeStepperMouseController'}
      };
    },
    methods: function () {
      return {
        'RangeStepperMouseController': { type: '', declaredBy: 'org.apache.flex.html.beads.controllers.RangeStepperMouseController'}
      };
    }
  };
};