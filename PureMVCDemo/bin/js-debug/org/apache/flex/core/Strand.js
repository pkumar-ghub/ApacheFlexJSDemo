/**
 * Generated by Apache Flex Cross-Compiler from org\apache\flex\core\Strand.as
 * org.apache.flex.core.Strand
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.flex.core.Strand');

goog.require('org.apache.flex.core.IBead');
goog.require('org.apache.flex.core.IBeadModel');
goog.require('org.apache.flex.core.ValuesManager');
goog.require('org.apache.flex.events.Event');
goog.require('org.apache.flex.events.EventDispatcher');
goog.require('org.apache.flex.core.IStrand');
goog.require('org.apache.flex.utils.Language');



/**
 *  Constructor.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 * @constructor
 * @extends {org.apache.flex.events.EventDispatcher}
 * @implements {org.apache.flex.core.IStrand}
 */
org.apache.flex.core.Strand = function() {
  org.apache.flex.core.Strand.base(this, 'constructor');
};
goog.inherits(org.apache.flex.core.Strand, org.apache.flex.events.EventDispatcher);


/**
 * @private
 * @type {org.apache.flex.core.IBeadModel}
 */
org.apache.flex.core.Strand.prototype._model;


/**
 * @private
 * @type {string}
 */
org.apache.flex.core.Strand.prototype._id;


/**
 * @export
 * @type {Array}
 */
org.apache.flex.core.Strand.prototype.beads;


/**
 * @private
 * @type {Array}
 */
org.apache.flex.core.Strand.prototype._beads;


/**
 *  @copy org.apache.flex.core.IStrand#addBead()
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 * @export
 * @param {org.apache.flex.core.IBead} bead
 */
org.apache.flex.core.Strand.prototype.addBead = function(bead) {
  if (!this._beads)
    this._beads = org.apache.flex.utils.Language.Vector();
  this._beads.push(bead);
  if (org.apache.flex.utils.Language.is(bead, org.apache.flex.core.IBeadModel))
    this._model = org.apache.flex.utils.Language.as(bead, org.apache.flex.core.IBeadModel);
  bead.strand = this;
};


/**
 *  @copy org.apache.flex.core.IStrand#getBeadByType()
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 * @export
 * @param {Object} classOrInterface
 * @return {org.apache.flex.core.IBead}
 */
org.apache.flex.core.Strand.prototype.getBeadByType = function(classOrInterface) {
  var foreachiter0_target = this._beads;
  for (var foreachiter0 in foreachiter0_target) 
  {
  var bead = foreachiter0_target[foreachiter0];
  {
    if (org.apache.flex.utils.Language.is(bead, classOrInterface))
      return bead;
  }}
  
  return null;
};


/**
 *  @copy org.apache.flex.core.IStrand#removeBead()
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 * @export
 * @param {org.apache.flex.core.IBead} value
 * @return {org.apache.flex.core.IBead}
 */
org.apache.flex.core.Strand.prototype.removeBead = function(value) {
  var /** @type {number} */ n = this._beads.length;
  for (var /** @type {number} */ i = 0; i < n; i++) {
    var /** @type {org.apache.flex.core.IBead} */ bead = this._beads[i];
    if (bead == value) {
      this._beads.splice(i, 1);
      return bead;
    }
  }
  return null;
};


org.apache.flex.core.Strand.prototype.get__model = function() {
  if (this._model == null) {
    this.addBead(org.apache.flex.utils.Language.as(new (org.apache.flex.core.ValuesManager["valuesImpl"].getValue(this, "iBeadModel"))(), org.apache.flex.core.IBead));
  }
  return this._model;
};


org.apache.flex.core.Strand.prototype.set__model = function(value) {
  if (this._model != value) {
    this.addBead(org.apache.flex.utils.Language.as(value, org.apache.flex.core.IBead));
    this.dispatchEvent(new org.apache.flex.events.Event("modelChanged"));
  }
};


org.apache.flex.core.Strand.prototype.get__id = function() {
  return this._id;
};


org.apache.flex.core.Strand.prototype.set__id = function(value) {
  if (this._id != value) {
    this._id = value;
    this.dispatchEvent(new org.apache.flex.events.Event("idChanged"));
  }
};


Object.defineProperties(org.apache.flex.core.Strand.prototype, /** @lends {org.apache.flex.core.Strand.prototype} */ {
/** @export */
model: {
get: org.apache.flex.core.Strand.prototype.get__model,
set: org.apache.flex.core.Strand.prototype.set__model},
/** @export */
id: {
get: org.apache.flex.core.Strand.prototype.get__id,
set: org.apache.flex.core.Strand.prototype.set__id}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.flex.core.Strand.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'Strand', qName: 'org.apache.flex.core.Strand', kind: 'class' }], interfaces: [org.apache.flex.core.IStrand] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.flex.core.Strand', org.apache.flex.core.Strand);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.flex.core.Strand.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'beads': { type: 'Array'}
      };
    },
    accessors: function () {
      return {
        'model': { type: 'org.apache.flex.core.IBeadModel', access: 'readwrite', declaredBy: 'org.apache.flex.core.Strand'},
        'id': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.flex.core.Strand'}
      };
    },
    methods: function () {
      return {
        'Strand': { type: '', declaredBy: 'org.apache.flex.core.Strand'},
        'addBead': { type: 'void', declaredBy: 'org.apache.flex.core.Strand', parameters: function () { return [  { index: 1, type: 'org.apache.flex.core.IBead', optional: false } ]; }},
        'getBeadByType': { type: 'org.apache.flex.core.IBead', declaredBy: 'org.apache.flex.core.Strand', parameters: function () { return [  { index: 1, type: 'Class', optional: false } ]; }},
        'removeBead': { type: 'org.apache.flex.core.IBead', declaredBy: 'org.apache.flex.core.Strand', parameters: function () { return [  { index: 1, type: 'org.apache.flex.core.IBead', optional: false } ]; }}
      };
    }
  };
};