/**
 * Generated by Apache Flex Cross-Compiler from org/apache/flex/html/TableRow.as
 * org.apache.flex.html.TableRow
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.flex.html.TableRow');

goog.require('org.apache.flex.html.Group');



/**
 *  constructor.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 * @constructor
 * @extends {org.apache.flex.html.Group}
 */
org.apache.flex.html.TableRow = function() {
  org.apache.flex.html.TableRow.base(this, 'constructor');
  this.className = "TableRow";
};
goog.inherits(org.apache.flex.html.TableRow, org.apache.flex.html.Group);


/**
 * @flexjsignorecoercion org.apache.flex.core.WrappedHTMLElement
 * @protected
 * @override
 */
org.apache.flex.html.TableRow.prototype.createElement = function() {
  this.element = document.createElement('tr');
  this.positioner = this.element;
  this.element.flexjs_wrapper = this;
  return this.element;
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.flex.html.TableRow.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'TableRow', qName: 'org.apache.flex.html.TableRow', kind: 'class' }] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.flex.html.TableRow', org.apache.flex.html.TableRow);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.flex.html.TableRow.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {return {};},
    methods: function () {
      return {
        'TableRow': { type: '', declaredBy: 'org.apache.flex.html.TableRow'}
      };
    }
  };
};