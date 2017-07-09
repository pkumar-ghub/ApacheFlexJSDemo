/**
 * Generated by Apache Flex Cross-Compiler from org/apache/flex/utils/StringTrimmer.as
 * org.apache.flex.utils.StringTrimmer
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.flex.utils.StringTrimmer');



/**
 * @asprivate
 * @constructor
 */
org.apache.flex.utils.StringTrimmer = function() {
  throw new Error("StringTrimmer should not be instantiated.");
};


/**
 * @export
 * @param {string} str
 * @return {string}
 */
org.apache.flex.utils.StringTrimmer.trim = function(str) {
  if (str == null)
    return '';
  return str.trim();
};


/**
 *  Removes all whitespace characters from the beginning and end
 *  of each element in an Array, where the Array is stored as a String. 
 *
 *  @asparam value The String whose whitespace should be trimmed. 
 *
 *  @asparam separator The String that delimits each Array element in the string.
 *
 *  @asreturn Array where whitespace was removed from the 
 *  beginning and end of each element. 
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 * @export
 * @param {string} value
 * @param {string} delimiter
 * @return {Array}
 */
org.apache.flex.utils.StringTrimmer.splitAndTrim = function(value, delimiter) {
  if (value != "" && value != null) {
    var /** @type {Array} */ items = value.split(delimiter);
    var /** @type {number} */ len = items.length;
    for (var /** @type {number} */ i = 0; i < len; i++) {
      items[i] = org.apache.flex.utils.StringTrimmer.trim(items[i]);
    }
    return items;
  }
  return [];
};


/**
 *  Removes all whitespace characters from the beginning and end
 *  of each element in an Array, where the Array is stored as a String. 
 *
 *  @asparam value The String whose whitespace should be trimmed. 
 *
 *  @asparam separator The String that delimits each Array element in the string.
 *
 *  @asreturn Updated String where whitespace was removed from the 
 *  beginning and end of each element. 
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 * @export
 * @param {string} value
 * @param {string} delimiter
 * @return {string}
 */
org.apache.flex.utils.StringTrimmer.trimArrayElements = function(value, delimiter) {
  if (value != "" && value != null) {
    var /** @type {Array} */ items = org.apache.flex.utils.StringTrimmer.splitAndTrim(value, delimiter);
    if (items.length > 0) {
      value = items.join(delimiter);
    }
  }
  return value;
};


/**
 *  Returns <code>true</code> if the specified string is
 *  a single space, tab, carriage return, newline, or formfeed character.
 *
 *  @asparam str The String that is is being queried. 
 *
 *  @asreturn <code>true</code> if the specified string is
 *  a single space, tab, carriage return, newline, or formfeed character.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 * @export
 * @param {string} character
 * @return {boolean}
 */
org.apache.flex.utils.StringTrimmer.isWhitespace = function(character) {
  switch (character) {
    case " ":
    
    case "\t":
    
    case "\r":
    
    case "\n":
    
    case "\f":
    
    case " ":
    
    case "\u2028":
    
    case "\u2029":
    
    case "　":
      return true;
    default:
      return false;
  }
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.flex.utils.StringTrimmer.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'StringTrimmer', qName: 'org.apache.flex.utils.StringTrimmer', kind: 'class' }] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.flex.utils.StringTrimmer', org.apache.flex.utils.StringTrimmer);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.flex.utils.StringTrimmer.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {return {};},
    methods: function () {
      return {
        'StringTrimmer': { type: '', declaredBy: 'org.apache.flex.utils.StringTrimmer'},
        '|trim': { type: 'String', declaredBy: 'org.apache.flex.utils.StringTrimmer', parameters: function () { return [  { index: 1, type: 'String', optional: false } ]; }},
        '|splitAndTrim': { type: 'Array', declaredBy: 'org.apache.flex.utils.StringTrimmer', parameters: function () { return [  { index: 1, type: 'String', optional: false },{ index: 2, type: 'String', optional: false } ]; }},
        '|trimArrayElements': { type: 'String', declaredBy: 'org.apache.flex.utils.StringTrimmer', parameters: function () { return [  { index: 1, type: 'String', optional: false },{ index: 2, type: 'String', optional: false } ]; }},
        '|isWhitespace': { type: 'Boolean', declaredBy: 'org.apache.flex.utils.StringTrimmer', parameters: function () { return [  { index: 1, type: 'String', optional: false } ]; }}
      };
    }
  };
};