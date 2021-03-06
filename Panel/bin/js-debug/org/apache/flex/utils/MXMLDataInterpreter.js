/**
 * Generated by Apache Flex Cross-Compiler from org/apache/flex/utils/MXMLDataInterpreter.as
 * org.apache.flex.utils.MXMLDataInterpreter
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.flex.utils.MXMLDataInterpreter');

goog.require('org.apache.flex.core.IBead');
goog.require('org.apache.flex.core.IChild');
goog.require('org.apache.flex.core.IContainer');
goog.require('org.apache.flex.core.IDocument');
goog.require('org.apache.flex.core.IMXMLDocument');
goog.require('org.apache.flex.core.IParent');
goog.require('org.apache.flex.core.IStrand');
goog.require('org.apache.flex.utils.Language');



/**
 *  Constructor.  All methods are static so should not be instantiated.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 * @constructor
 */
org.apache.flex.utils.MXMLDataInterpreter = function() {
  ;
};


/**
 *  Generates an object based on the encoded data.
 *  
 *  @asparam document The MXML document.  If the object has an id
 *  it will be assigned in this document in this method.
 *  @asparam data The encoded data.
 *  @asreturn The object.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 * @export
 * @param {Object} document
 * @param {Array} data
 * @return {Object}
 */
org.apache.flex.utils.MXMLDataInterpreter.generateMXMLObject = function(document, data) {
  var /** @type {number} */ i = 0;
  var /** @type {Object} */ cls = data[i++];
  var /** @type {Object} */ comp = new cls();
  if (org.apache.flex.utils.Language.is(comp, org.apache.flex.core.IStrand))
    org.apache.flex.utils.MXMLDataInterpreter.initializeStrandBasedObject(document, null, comp, data, i); else {
    var /** @type {number} */ m = 0;
    var /** @type {number} */ j = 0;
    var /** @type {string} */ name;
    var /** @type {*} */ simple;
    var /** @type {Object} */ value;
    var /** @type {string} */ id;
    m = Number(data[i++]);
    for (j = 0; j < m; j++) {
      name = org.apache.flex.utils.Language.string(data[i++]);
      simple = data[i++];
      value = data[i++];
      if (simple == null)
        value = org.apache.flex.utils.MXMLDataInterpreter.generateMXMLArray(document, null, org.apache.flex.utils.Language.as(value, Array));
      else if (simple == false)
        value = org.apache.flex.utils.MXMLDataInterpreter.generateMXMLObject(document, org.apache.flex.utils.Language.as(value, Array));
      if (name == "id")
        id = org.apache.flex.utils.Language.as(value, String);
      if (name == "document" && !comp.document)
        comp.document = document;
      else if (name == "_id")
        id = org.apache.flex.utils.Language.as(value, String); else if (name == "id") {
        try {
          comp["id"] = value;
        } catch (e) {
        }
      }
      else
        comp[name] = value;
    }
    if (id)
      document[id] = comp;
    if (org.apache.flex.utils.Language.is(comp, org.apache.flex.core.IDocument))
      comp.setDocument(document, id);
  }
  return comp;
};


/**
 *  Generates an Array of objects based on the encoded data.
 *  
 *  @asparam document The MXML document.  If the object has an id
 *  it will be assigned in this document in this method.
 *  @asparam parent The parent for any display objects encoded in the array.
 *  @asparam data The encoded data.
 *  @asreturn The Array.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 * @export
 * @param {Object} document
 * @param {org.apache.flex.core.IParent} parent
 * @param {Array} data
 * @return {Array}
 */
org.apache.flex.utils.MXMLDataInterpreter.generateMXMLArray = function(document, parent, data) {
  var /** @type {Array} */ comps = [];
  var /** @type {number} */ n = data.length;
  var /** @type {number} */ i = 0;
  while (i < n) {
    var /** @type {Object} */ cls = data[i++];
    var /** @type {Object} */ comp = new cls();
    i = org.apache.flex.utils.MXMLDataInterpreter.initializeStrandBasedObject(document, parent, comp, data, i);
    comps.push(comp);
  }
  return comps;
};


/**
 * @flexjsignorecoercion Function 
 * @flexjsignorecoercion org.apache.flex.core.IChild 
 * @private
 * @param {Object} document
 * @param {org.apache.flex.core.IParent} parent
 * @param {Object} comp
 * @param {Array} data
 * @param {number} i
 * @return {number}
 */
org.apache.flex.utils.MXMLDataInterpreter.initializeStrandBasedObject = function(document, parent, comp, data, i) {
  var /** @type {number} */ m = 0;
  var /** @type {number} */ j = 0;
  var /** @type {string} */ name;
  var /** @type {*} */ simple;
  var /** @type {Object} */ value;
  var /** @type {string} */ id = null;
  m = Number(data[i++]);
  if (m > 0 && data[0] == "model") {
    m--;
    name = org.apache.flex.utils.Language.string(data[i++]);
    simple = data[i++];
    value = data[i++];
    if (simple == null)
      value = org.apache.flex.utils.MXMLDataInterpreter.generateMXMLArray(document, parent, org.apache.flex.utils.Language.as(value, Array));
    else if (simple == false)
      value = org.apache.flex.utils.MXMLDataInterpreter.generateMXMLObject(document, org.apache.flex.utils.Language.as(value, Array));
    comp[name] = value;
    if (org.apache.flex.utils.Language.is(value, org.apache.flex.core.IBead) && org.apache.flex.utils.Language.is(comp, org.apache.flex.core.IStrand))
      org.apache.flex.utils.Language.as(comp, org.apache.flex.core.IStrand, true).addBead(org.apache.flex.utils.Language.as(value, org.apache.flex.core.IBead));
  }
  var /** @type {number} */ beadOffset = i + (m - 1) * 3;
  if (m > 0 && data[beadOffset] == "beads") {
    m--;
  }
  else
    beadOffset = -1;
  for (j = 0; j < m; j++) {
    name = org.apache.flex.utils.Language.string(data[i++]);
    simple = data[i++];
    value = data[i++];
    if (simple == null)
      value = org.apache.flex.utils.MXMLDataInterpreter.generateMXMLArray(document, null, org.apache.flex.utils.Language.as(value, Array));
    else if (simple == false)
      value = org.apache.flex.utils.MXMLDataInterpreter.generateMXMLObject(document, org.apache.flex.utils.Language.as(value, Array));
    if (name == "id")
      id = org.apache.flex.utils.Language.as(value, String);
    if (name == "document" && !comp.document)
      comp.document = document;
    else if (name == "_id")
      id = org.apache.flex.utils.Language.as(value, String); else if (name == "id") {
      try {
        comp["id"] = value;
      } catch (e) {
      }
    }
    else
      comp[name] = value;
  }
  if (beadOffset > -1) {
    name = org.apache.flex.utils.Language.string(data[i++]);
    simple = data[i++];
    value = data[i++];
    if (simple == null)
      value = org.apache.flex.utils.MXMLDataInterpreter.generateMXMLArray(document, null, org.apache.flex.utils.Language.as(value, Array));
    else if (simple == false)
      value = org.apache.flex.utils.MXMLDataInterpreter.generateMXMLObject(document, org.apache.flex.utils.Language.as(value, Array));
    comp[name] = value;
  }
  m = Number(data[i++]);
  for (j = 0; j < m; j++) {
    name = org.apache.flex.utils.Language.string(data[i++]);
    simple = data[i++];
    value = data[i++];
    if (simple == null)
      value = org.apache.flex.utils.MXMLDataInterpreter.generateMXMLArray(document, null, org.apache.flex.utils.Language.as(value, Array));
    else if (simple == false)
      value = org.apache.flex.utils.MXMLDataInterpreter.generateMXMLObject(document, org.apache.flex.utils.Language.as(value, Array));
    comp.setStyle(name, value);
  }
  
  m = Number(data[i++]);
  for (j = 0; j < m; j++) {
    name = org.apache.flex.utils.Language.string(data[i++]);
    value = data[i++];
    
    comp.addEventListener(name, goog.bind(value, document));
  }
  var /** @type {Array} */ children = data[i++];
  if (children && org.apache.flex.utils.Language.is(comp, org.apache.flex.core.IMXMLDocument)) {
    comp.setMXMLDescriptor(document, children);
  }
  
  if (parent && org.apache.flex.utils.Language.is(comp, org.apache.flex.core.IChild))
    parent.addElement(comp, !org.apache.flex.utils.Language.is(parent, org.apache.flex.core.IContainer));
  if (children) {
    if (!org.apache.flex.utils.Language.is(comp, org.apache.flex.core.IMXMLDocument)) {
      org.apache.flex.utils.MXMLDataInterpreter.generateMXMLInstances(document, org.apache.flex.utils.Language.as(comp, org.apache.flex.core.IParent), children);
    }
  }
  if (id)
    document[id] = comp;
  if (org.apache.flex.utils.Language.is(comp, org.apache.flex.core.IDocument))
    comp.setDocument(document, id);
  return i;
};


/**
 *  Generates the instances of objects in an MXML document based on the encoded data.
 *  
 *  @asparam document The MXML document.  If the object has an id
 *  it will be assigned in this document in this method.
 *  @asparam parent The parent for any display objects encoded in the array.
 *  @asparam data The encoded data.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 * @export
 * @param {Object} document
 * @param {org.apache.flex.core.IParent} parent
 * @param {Array} data
 */
org.apache.flex.utils.MXMLDataInterpreter.generateMXMLInstances = function(document, parent, data) {
  if (data != null) {
    org.apache.flex.utils.MXMLDataInterpreter.generateMXMLArray(document, parent, data);
  }
  if (org.apache.flex.utils.Language.is(parent, org.apache.flex.core.IContainer)) {
    org.apache.flex.utils.Language.as(parent, org.apache.flex.core.IContainer, true).childrenAdded();
  }
};


/**
 *  Generates the properties of the top-level object in an MXML document 
 *  based on the encoded data.  This basically means setting the attributes
 *  found on the tag and child tags that aren't in the default property.
 *  
 *  @asparam host The MXML document.  If the object has an id
 *  it will be assigned in this document in this method.
 *  @asparam data The encoded data.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 *  @flexjsignorecoercion Function
 * @export
 * @param {Object} host
 * @param {Array} data
 */
org.apache.flex.utils.MXMLDataInterpreter.generateMXMLProperties = function(host, data) {
  if (!data)
    return;
  var /** @type {number} */ i = 0;
  var /** @type {number} */ m = 0;
  var /** @type {number} */ j = 0;
  var /** @type {string} */ name;
  var /** @type {*} */ simple;
  var /** @type {Object} */ value;
  var /** @type {string} */ id = null;
  m = Number(data[i++]);
  var /** @type {number} */ beadOffset = i + (m - 1) * 3;
  if (m > 0 && data[beadOffset] == "beads") {
    m--;
  }
  else
    beadOffset = -1;
  for (j = 0; j < m; j++) {
    name = org.apache.flex.utils.Language.string(data[i++]);
    simple = data[i++];
    value = data[i++];
    if (simple == null)
      value = org.apache.flex.utils.MXMLDataInterpreter.generateMXMLArray(host, null, org.apache.flex.utils.Language.as(value, Array));
    else if (simple == false)
      value = org.apache.flex.utils.MXMLDataInterpreter.generateMXMLObject(host, org.apache.flex.utils.Language.as(value, Array));
    if (name == "id")
      id = org.apache.flex.utils.Language.as(value, String);
    if (name == "_id")
      id = org.apache.flex.utils.Language.as(value, String);
    else
      host[name] = value;
  }
  if (beadOffset > -1) {
    name = org.apache.flex.utils.Language.string(data[i++]);
    simple = data[i++];
    value = data[i++];
    if (simple == null)
      value = org.apache.flex.utils.MXMLDataInterpreter.generateMXMLArray(host, null, org.apache.flex.utils.Language.as(value, Array));
    else if (simple == false)
      value = org.apache.flex.utils.MXMLDataInterpreter.generateMXMLObject(host, org.apache.flex.utils.Language.as(value, Array));
    host[name] = value;
  }
  m = Number(data[i++]);
  for (j = 0; j < m; j++) {
    name = org.apache.flex.utils.Language.string(data[i++]);
    simple = data[i++];
    value = data[i++];
    if (simple == null)
      value = org.apache.flex.utils.MXMLDataInterpreter.generateMXMLArray(host, null, org.apache.flex.utils.Language.as(value, Array));
    else if (simple == false)
      value = org.apache.flex.utils.MXMLDataInterpreter.generateMXMLObject(host, org.apache.flex.utils.Language.as(value, Array));
    host[name] = value;
  }
  
  m = Number(data[i++]);
  for (j = 0; j < m; j++) {
    name = org.apache.flex.utils.Language.string(data[i++]);
    value = data[i++];
    
    host.addEventListener(name, goog.bind(value, host));
  }
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.flex.utils.MXMLDataInterpreter.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'MXMLDataInterpreter', qName: 'org.apache.flex.utils.MXMLDataInterpreter', kind: 'class' }] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.flex.utils.MXMLDataInterpreter', org.apache.flex.utils.MXMLDataInterpreter);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.flex.utils.MXMLDataInterpreter.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {return {};},
    methods: function () {
      return {
        'MXMLDataInterpreter': { type: '', declaredBy: 'org.apache.flex.utils.MXMLDataInterpreter'},
        '|generateMXMLObject': { type: 'Object', declaredBy: 'org.apache.flex.utils.MXMLDataInterpreter', parameters: function () { return [  { index: 1, type: 'Object', optional: false },{ index: 2, type: 'Array', optional: false } ]; }},
        '|generateMXMLArray': { type: 'Array', declaredBy: 'org.apache.flex.utils.MXMLDataInterpreter', parameters: function () { return [  { index: 1, type: 'Object', optional: false },{ index: 2, type: 'org.apache.flex.core.IParent', optional: false },{ index: 3, type: 'Array', optional: false } ]; }},
        '|generateMXMLInstances': { type: 'void', declaredBy: 'org.apache.flex.utils.MXMLDataInterpreter', parameters: function () { return [  { index: 1, type: 'Object', optional: false },{ index: 2, type: 'org.apache.flex.core.IParent', optional: false },{ index: 3, type: 'Array', optional: false } ]; }},
        '|generateMXMLProperties': { type: 'void', declaredBy: 'org.apache.flex.utils.MXMLDataInterpreter', parameters: function () { return [  { index: 1, type: 'Object', optional: false },{ index: 2, type: 'Array', optional: false } ]; }}
      };
    }
  };
};