/**
 * Generated by Apache Flex Cross-Compiler from org/apache/flex/html/accessories/TextPromptBead.as
 * org.apache.flex.html.accessories.TextPromptBead
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.flex.html.accessories.TextPromptBead');

goog.require('org.apache.flex.core.UIBase');
goog.require('org.apache.flex.core.IBead');
goog.require('org.apache.flex.utils.Language');



/**
 *  constructor.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 * @constructor
 * @implements {org.apache.flex.core.IBead}
 */
org.apache.flex.html.accessories.TextPromptBead = function() {
};


/**
 * @private
 * @type {string}
 */
org.apache.flex.html.accessories.TextPromptBead.prototype._prompt;


/**
 * @private
 * @type {org.apache.flex.core.IStrand}
 */
org.apache.flex.html.accessories.TextPromptBead.prototype._strand;


/**
 * @private
 * @type {boolean}
 */
org.apache.flex.html.accessories.TextPromptBead.prototype.promptAdded;


org.apache.flex.html.accessories.TextPromptBead.prototype.get__prompt = function() {
  return this._prompt;
};


org.apache.flex.html.accessories.TextPromptBead.prototype.set__prompt = function(value) {
  this._prompt = value;
};


org.apache.flex.html.accessories.TextPromptBead.prototype.set__strand = function(value) {
  this._strand = value;
  
  var /** @type {org.apache.flex.core.UIBase} */ host = org.apache.flex.utils.Language.as(value, org.apache.flex.core.UIBase);
  var /** @type {HTMLInputElement} */ e = host.element;
  e.placeholder = this.prompt;
};


Object.defineProperties(org.apache.flex.html.accessories.TextPromptBead.prototype, /** @lends {org.apache.flex.html.accessories.TextPromptBead.prototype} */ {
/** @export */
prompt: {
get: org.apache.flex.html.accessories.TextPromptBead.prototype.get__prompt,
set: org.apache.flex.html.accessories.TextPromptBead.prototype.set__prompt},
/** @export */
strand: {
set: org.apache.flex.html.accessories.TextPromptBead.prototype.set__strand}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.flex.html.accessories.TextPromptBead.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'TextPromptBead', qName: 'org.apache.flex.html.accessories.TextPromptBead', kind: 'class' }], interfaces: [org.apache.flex.core.IBead] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.flex.html.accessories.TextPromptBead', org.apache.flex.html.accessories.TextPromptBead);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.flex.html.accessories.TextPromptBead.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {
      return {
        'prompt': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.flex.html.accessories.TextPromptBead'},
        'strand': { type: 'org.apache.flex.core.IStrand', access: 'writeonly', declaredBy: 'org.apache.flex.html.accessories.TextPromptBead'}
      };
    },
    methods: function () {
      return {
        'TextPromptBead': { type: '', declaredBy: 'org.apache.flex.html.accessories.TextPromptBead'}
      };
    }
  };
};