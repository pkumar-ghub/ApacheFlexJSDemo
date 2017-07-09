/**
 * Generated by Apache Flex Cross-Compiler from org/apache/flex/html/beads/controllers/DateChooserMouseController.as
 * org.apache.flex.html.beads.controllers.DateChooserMouseController
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.flex.html.beads.controllers.DateChooserMouseController');

goog.require('org.apache.flex.core.IBeadModel');
goog.require('org.apache.flex.core.IBeadView');
goog.require('org.apache.flex.events.Event');
goog.require('org.apache.flex.events.IEventDispatcher');
goog.require('org.apache.flex.html.beads.DateChooserView');
goog.require('org.apache.flex.html.beads.models.DateChooserModel');
goog.require('org.apache.flex.html.supportClasses.DateChooserList');
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
org.apache.flex.html.beads.controllers.DateChooserMouseController = function() {
};


/**
 * @private
 * @type {org.apache.flex.core.IStrand}
 */
org.apache.flex.html.beads.controllers.DateChooserMouseController.prototype._strand;


/**
 * @private
 * @param {org.apache.flex.events.Event} event
 */
org.apache.flex.html.beads.controllers.DateChooserMouseController.prototype.listHandler = function(event) {
  var /** @type {org.apache.flex.html.supportClasses.DateChooserList} */ list = org.apache.flex.utils.Language.as(event.target, org.apache.flex.html.supportClasses.DateChooserList);
  var /** @type {org.apache.flex.html.beads.models.DateChooserModel} */ model = org.apache.flex.utils.Language.as(this._strand.getBeadByType(org.apache.flex.core.IBeadModel), org.apache.flex.html.beads.models.DateChooserModel);
  model.selectedDate = org.apache.flex.utils.Language.as(list.selectedItem, Date);
  org.apache.flex.utils.Language.as(this._strand, org.apache.flex.events.IEventDispatcher, true).dispatchEvent(new org.apache.flex.events.Event("change"));
};


/**
 * @asprivate
 * @private
 * @param {org.apache.flex.events.MouseEvent} event
 */
org.apache.flex.html.beads.controllers.DateChooserMouseController.prototype.prevMonthClickHandler = function(event) {
  event.preventDefault();
  var /** @type {org.apache.flex.html.beads.models.DateChooserModel} */ model = org.apache.flex.utils.Language.as(this._strand.getBeadByType(org.apache.flex.core.IBeadModel), org.apache.flex.html.beads.models.DateChooserModel);
  var /** @type {number} */ month = model.displayedMonth - 1;
  var /** @type {number} */ year = model.displayedYear;
  if (month < 0) {
    month = 11;
    year--;
  }
  model.displayedMonth = month;
  model.displayedYear = year;
};


/**
 * @asprivate
 * @private
 * @param {org.apache.flex.events.MouseEvent} event
 */
org.apache.flex.html.beads.controllers.DateChooserMouseController.prototype.nextMonthClickHandler = function(event) {
  event.preventDefault();
  var /** @type {org.apache.flex.html.beads.models.DateChooserModel} */ model = org.apache.flex.utils.Language.as(this._strand.getBeadByType(org.apache.flex.core.IBeadModel), org.apache.flex.html.beads.models.DateChooserModel);
  var /** @type {number} */ month = model.displayedMonth + 1;
  var /** @type {number} */ year = model.displayedYear;
  if (month >= 12) {
    month = 0;
    year++;
  }
  model.displayedMonth = month;
  model.displayedYear = year;
};


org.apache.flex.html.beads.controllers.DateChooserMouseController.prototype.set__strand = function(value) {
  this._strand = value;
  var /** @type {org.apache.flex.html.beads.DateChooserView} */ view = org.apache.flex.utils.Language.as(value.getBeadByType(org.apache.flex.core.IBeadView), org.apache.flex.html.beads.DateChooserView);
  view.prevMonthButton.addEventListener("click", org.apache.flex.utils.Language.closure(this.prevMonthClickHandler, this, 'prevMonthClickHandler'));
  view.nextMonthButton.addEventListener("click", org.apache.flex.utils.Language.closure(this.nextMonthClickHandler, this, 'nextMonthClickHandler'));
  org.apache.flex.utils.Language.as(view.dayList, org.apache.flex.events.IEventDispatcher, true).addEventListener("change", org.apache.flex.utils.Language.closure(this.listHandler, this, 'listHandler'));
};


Object.defineProperties(org.apache.flex.html.beads.controllers.DateChooserMouseController.prototype, /** @lends {org.apache.flex.html.beads.controllers.DateChooserMouseController.prototype} */ {
/** @export */
strand: {
set: org.apache.flex.html.beads.controllers.DateChooserMouseController.prototype.set__strand}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.flex.html.beads.controllers.DateChooserMouseController.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'DateChooserMouseController', qName: 'org.apache.flex.html.beads.controllers.DateChooserMouseController', kind: 'class' }], interfaces: [org.apache.flex.core.IBeadController] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.flex.html.beads.controllers.DateChooserMouseController', org.apache.flex.html.beads.controllers.DateChooserMouseController);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.flex.html.beads.controllers.DateChooserMouseController.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'strand': { type: 'org.apache.flex.core.IStrand', access: 'writeonly', declaredBy: 'org.apache.flex.html.beads.controllers.DateChooserMouseController'}
      };
    },
    methods: function () {
      return {
        'DateChooserMouseController': { type: '', declaredBy: 'org.apache.flex.html.beads.controllers.DateChooserMouseController'}
      };
    }
  };
};