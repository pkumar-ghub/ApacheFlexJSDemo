/**
 * Generated by Apache Flex Cross-Compiler from org/apache/flex/core/UIBase.as
 * org.apache.flex.core.UIBase
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('org.apache.flex.core.UIBase');

goog.require('org.apache.flex.core.HTMLElementWrapper');
goog.require('org.apache.flex.core.IBead');
goog.require('org.apache.flex.core.IBeadController');
goog.require('org.apache.flex.core.IBeadModel');
goog.require('org.apache.flex.core.IBeadView');
goog.require('org.apache.flex.core.IMeasurementBead');
goog.require('org.apache.flex.core.ValuesManager');
goog.require('org.apache.flex.events.Event');
goog.require('org.apache.flex.events.IEventDispatcher');
goog.require('org.apache.flex.utils.StringUtil');
goog.require('org.apache.flex.core.IFlexJSElement');
goog.require('org.apache.flex.core.ILayoutChild');
goog.require('org.apache.flex.core.IParentIUIBase');
goog.require('org.apache.flex.core.IStrandWithModel');
goog.require('org.apache.flex.core.IStyleableObject');
goog.require('org.apache.flex.utils.Language');



/**
 *  Constructor.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 * @constructor
 * @extends {org.apache.flex.core.HTMLElementWrapper}
 * @implements {org.apache.flex.core.IStrandWithModel}
 * @implements {org.apache.flex.events.IEventDispatcher}
 * @implements {org.apache.flex.core.IParentIUIBase}
 * @implements {org.apache.flex.core.IStyleableObject}
 * @implements {org.apache.flex.core.ILayoutChild}
 * @implements {org.apache.flex.core.IFlexJSElement}
 */
org.apache.flex.core.UIBase = function() {
  org.apache.flex.core.UIBase.base(this, 'constructor');
  
  this.createElement();
};
goog.inherits(org.apache.flex.core.UIBase, org.apache.flex.core.HTMLElementWrapper);


/**
 * @private
 * @type {number}
 */
org.apache.flex.core.UIBase.prototype._explicitWidth;


/**
 * @private
 * @type {number}
 */
org.apache.flex.core.UIBase.prototype._explicitHeight;


/**
 * @private
 * @type {number}
 */
org.apache.flex.core.UIBase.prototype._percentWidth;


/**
 * @private
 * @type {number}
 */
org.apache.flex.core.UIBase.prototype._percentHeight;


/**
 * @private
 * @type {number}
 */
org.apache.flex.core.UIBase.prototype._width;


/**
 * @private
 * @type {number}
 */
org.apache.flex.core.UIBase.prototype._height;


/**
 *  @copy org.apache.flex.core.ILayoutChild#setHeight
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 * @export
 * @param {number} value
 * @param {boolean=} noEvent
 */
org.apache.flex.core.UIBase.prototype.setHeight = function(value, noEvent) {
  noEvent = typeof noEvent !== 'undefined' ? noEvent : false;
  if (this._height != value) {
    this._height = value;
    this.positioner.style.height = value.toString() + 'px';
    if (!noEvent)
      this.dispatchEvent(new org.apache.flex.events.Event("heightChanged"));
  }
};


/**
 *  @copy org.apache.flex.core.ILayoutChild#setWidth
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 * @export
 * @param {number} value
 * @param {boolean=} noEvent
 */
org.apache.flex.core.UIBase.prototype.setWidth = function(value, noEvent) {
  noEvent = typeof noEvent !== 'undefined' ? noEvent : false;
  if (this._width != value) {
    this._width = value;
    this.positioner.style.width = value.toString() + 'px';
    if (!noEvent)
      this.dispatchEvent(new org.apache.flex.events.Event("widthChanged"));
  }
};


/**
 *  @copy org.apache.flex.core.ILayoutChild#setWidthAndHeight
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 * @export
 * @param {number} newWidth
 * @param {number} newHeight
 * @param {boolean=} noEvent
 */
org.apache.flex.core.UIBase.prototype.setWidthAndHeight = function(newWidth, newHeight, noEvent) {
  noEvent = typeof noEvent !== 'undefined' ? noEvent : false;
  if (this._width != newWidth) {
    this._width = newWidth;
    this.positioner.style.width = newWidth.toString() + 'px';
    if (!noEvent)
      this.dispatchEvent(new org.apache.flex.events.Event("widthChanged"));
  }
  if (this._height != newHeight) {
    this._height = newHeight;
    this.positioner.style.height = newHeight.toString() + 'px';
    if (!noEvent)
      this.dispatchEvent(new org.apache.flex.events.Event("heightChanged"));
  }
  this.dispatchEvent(new org.apache.flex.events.Event("sizeChanged"));
};


/**
 *  @copy org.apache.flex.core.ILayoutChild#isWidthSizedToContent
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 * @export
 * @return {boolean}
 */
org.apache.flex.core.UIBase.prototype.isWidthSizedToContent = function() {
  if (!isNaN(this._explicitWidth))
    return false;
  if (!isNaN(this._percentWidth))
    return false;
  var /** @type {*} */ left = org.apache.flex.core.ValuesManager["valuesImpl"].getValue(this, "left");
  var /** @type {*} */ right = org.apache.flex.core.ValuesManager["valuesImpl"].getValue(this, "right");
  return (left === undefined || right === undefined);
};


/**
 *  @copy org.apache.flex.core.ILayoutChild#isHeightSizedToContent
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 * @export
 * @return {boolean}
 */
org.apache.flex.core.UIBase.prototype.isHeightSizedToContent = function() {
  if (!isNaN(this._explicitHeight))
    return false;
  if (!isNaN(this._percentHeight))
    return false;
  var /** @type {*} */ top = org.apache.flex.core.ValuesManager["valuesImpl"].getValue(this, "top");
  var /** @type {*} */ bottom = org.apache.flex.core.ValuesManager["valuesImpl"].getValue(this, "bottom");
  return (top === undefined || bottom === undefined);
};


/**
 * @private
 * @type {number}
 */
org.apache.flex.core.UIBase.prototype._x;


/**
 *  @copy org.apache.flex.core.ILayoutChild#setX
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 * @export
 * @param {number} value
 */
org.apache.flex.core.UIBase.prototype.setX = function(value) {
  
  this.positioner.style.left = value.toString() + 'px';
};


/**
 * @private
 * @type {number}
 */
org.apache.flex.core.UIBase.prototype._y;


/**
 *  @copy org.apache.flex.core.ILayoutChild#setY
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 * @export
 * @param {number} value
 */
org.apache.flex.core.UIBase.prototype.setY = function(value) {
  
  this.positioner.style.top = value.toString() + 'px';
};


/**
 * @private
 * @type {string}
 */
org.apache.flex.core.UIBase.prototype.displayStyleForLayout;


/**
 *  The display style is used for both visible
 *  and layout so is managed as a special case.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 * @export
 * @param {string} value
 */
org.apache.flex.core.UIBase.prototype.setDisplayStyleForLayout = function(value) {
  if (this.positioner.style.display !== 'none')
    this.positioner.style.display = value;
  else
    this.displayStyleForLayout = value;
};


/**
 * @asreturn The array of children.
 * @flexjsignorecoercion Array
 * @export
 * @return {Array}
 */
org.apache.flex.core.UIBase.prototype.internalChildren = function() {
  return this.element.childNodes;
};


/**
 * @private
 * @type {org.apache.flex.core.IBeadView}
 */
org.apache.flex.core.UIBase.prototype._view;


/**
 * @private
 * @type {string}
 */
org.apache.flex.core.UIBase.prototype._id;


/**
 * @private
 * @type {Object}
 */
org.apache.flex.core.UIBase.prototype._style;


/**
 * @export
 * @type {string}
 */
org.apache.flex.core.UIBase.prototype.typeNames;


/**
 * @private
 * @type {string}
 */
org.apache.flex.core.UIBase.prototype._className;


/**
 * @protected
 * @param {string} value
 */
org.apache.flex.core.UIBase.prototype.setClassName = function(value) {
  this.element.className = value;
};


/**
 * @export
 * @type {Array}
 */
org.apache.flex.core.UIBase.prototype.beads;


/**
 *  @copy org.apache.flex.core.IStrand#addBead()
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 * @export
 * @override
 */
org.apache.flex.core.UIBase.prototype.addBead = function(bead) {
  if (!this._beads)
    this._beads = org.apache.flex.utils.Language.Vector();
  this._beads.push(bead);
  if (org.apache.flex.utils.Language.is(bead, org.apache.flex.core.IBeadModel))
    this._model = org.apache.flex.utils.Language.as(bead, org.apache.flex.core.IBeadModel);
  else if (org.apache.flex.utils.Language.is(bead, org.apache.flex.core.IBeadView))
    this._view = org.apache.flex.utils.Language.as(bead, org.apache.flex.core.IBeadView);
  bead.strand = this;
  if (org.apache.flex.utils.Language.is(bead, org.apache.flex.core.IBeadView)) {
    org.apache.flex.utils.Language.as(this, org.apache.flex.events.IEventDispatcher, true).dispatchEvent(new org.apache.flex.events.Event("viewChanged"));
  }
};


/**
 *  @copy org.apache.flex.core.IParent#addElement()
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 *  @flexjsignorecoercion org.apache.flex.core.IUIBase
 * @export
 * @param {org.apache.flex.core.IChild} c
 * @param {boolean=} dispatchEvent
 */
org.apache.flex.core.UIBase.prototype.addElement = function(c, dispatchEvent) {
  dispatchEvent = typeof dispatchEvent !== 'undefined' ? dispatchEvent : true;
  
  this.element.appendChild(c.positioner);
  c.addedToParent();
};


/**
 *  @copy org.apache.flex.core.IParent#addElementAt()
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 *  @flexjsignorecoercion org.apache.flex.core.IUIBase
 * @export
 * @param {org.apache.flex.core.IChild} c
 * @param {number} index
 * @param {boolean=} dispatchEvent
 */
org.apache.flex.core.UIBase.prototype.addElementAt = function(c, index, dispatchEvent) {
  dispatchEvent = typeof dispatchEvent !== 'undefined' ? dispatchEvent : true;
  
  var /** @type {Array} */ children = this.internalChildren();
  if (index >= children.length)
    this.addElement(c); else {
    this.element.insertBefore(c.positioner, children[index]);
    c.addedToParent();
  }
};


/**
 *  @copy org.apache.flex.core.IParent#getElementAt()
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 * @export
 * @param {number} index
 * @return {org.apache.flex.core.IChild}
 */
org.apache.flex.core.UIBase.prototype.getElementAt = function(index) {
  
  var /** @type {Array} */ children = this.internalChildren();
  if (children.length == 0) {
    return null;
  }
  return children[index].flexjs_wrapper;
};


/**
 *  @copy org.apache.flex.core.IParent#getElementIndex()
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 * @export
 * @param {org.apache.flex.core.IChild} c
 * @return {number}
 */
org.apache.flex.core.UIBase.prototype.getElementIndex = function(c) {
  
  var /** @type {Array} */ children = this.internalChildren();
  var /** @type {number} */ n = children.length;
  for (var /** @type {number} */ i = 0; i < n; i++) {
    if (children[i] == c.element)
      return i;
  }
  return -1;
};


/**
 *  @copy org.apache.flex.core.IParent#removeElement()
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 *  @flexjsignorecoercion HTMLElement
 * @export
 * @param {org.apache.flex.core.IChild} c
 * @param {boolean=} dispatchEvent
 */
org.apache.flex.core.UIBase.prototype.removeElement = function(c, dispatchEvent) {
  dispatchEvent = typeof dispatchEvent !== 'undefined' ? dispatchEvent : true;
  
  this.element.removeChild(c.element);
};


/**
 *  The method called when added to a parent.  This is a good
 *  time to set up beads.
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion FlexJS 0.0
 *  @flexjsignorecoercion Class
 *  @flexjsignorecoercion Number
 * @export
 */
org.apache.flex.core.UIBase.prototype.addedToParent = function() {
  var /** @type {Object} */ c;
  if (!this._className && this.typeNames)
    this.setClassName(this.typeNames);
  if (this.style)
    org.apache.flex.core.ValuesManager["valuesImpl"].applyStyles(this, this.style);
  if (isNaN(this._explicitWidth) && isNaN(this._percentWidth)) {
    var /** @type {*} */ value = org.apache.flex.core.ValuesManager["valuesImpl"].getValue(this, "width");
    if (value !== undefined) {
      if (org.apache.flex.utils.Language.is(value, String)) {
        var /** @type {string} */ s = String(value);
        if (s.indexOf("%") != -1)
          this._percentWidth = Number(s.substring(0, s.length - 1)); else {
          if (s.indexOf("px") != -1)
            s = s.substring(0, s.length - 2);
          this._width = this._explicitWidth = Number(s);
        }
      }
      else
        this._width = this._explicitWidth = value;
    }
  }
  if (isNaN(this._explicitHeight) && isNaN(this._percentHeight)) {
    value = org.apache.flex.core.ValuesManager["valuesImpl"].getValue(this, "height");
    if (value !== undefined) {
      if (org.apache.flex.utils.Language.is(value, String)) {
        s = String(value);
        if (s.indexOf("%") != -1)
          this._percentHeight = Number(s.substring(0, s.length - 1)); else {
          if (s.indexOf("px") != -1)
            s = s.substring(0, s.length - 2);
          this._height = this._explicitHeight = Number(s);
        }
      }
      else
        this._height = this._explicitHeight = value;
    }
  }
  var foreachiter0_target = this.beads;
  for (var foreachiter0 in foreachiter0_target) 
  {
  var bead = foreachiter0_target[foreachiter0];
  
    this.addBead(bead);}
  
  if (this.getBeadByType(org.apache.flex.core.IBeadModel) == null) {
    c = org.apache.flex.core.ValuesManager["valuesImpl"].getValue(this, "iBeadModel");
    if (c) {
      var /** @type {org.apache.flex.core.IBeadModel} */ model = org.apache.flex.utils.Language.as(new c(), org.apache.flex.core.IBeadModel);
      if (model)
        this.addBead(model);
    }
  }
  if (this._view == null && this.getBeadByType(org.apache.flex.core.IBeadView) == null) {
    c = org.apache.flex.core.ValuesManager["valuesImpl"].getValue(this, "iBeadView");
    if (c) {
      var /** @type {org.apache.flex.core.IBeadView} */ view = org.apache.flex.utils.Language.as(new c(), org.apache.flex.core.IBeadView);
      if (view)
        this.addBead(view);
    }
  }
  if (this.getBeadByType(org.apache.flex.core.IBeadController) == null) {
    c = org.apache.flex.core.ValuesManager["valuesImpl"].getValue(this, "iBeadController");
    if (c) {
      var /** @type {org.apache.flex.core.IBeadController} */ controller = org.apache.flex.utils.Language.as(new c(), org.apache.flex.core.IBeadController);
      if (controller)
        this.addBead(controller);
    }
  }
  this.dispatchEvent(new org.apache.flex.events.Event("beadsAdded"));
};


/**
 * Rebroadcast an event from a sub component from the component.
 * @protected
 * @param {org.apache.flex.events.Event} event
 */
org.apache.flex.core.UIBase.prototype.repeaterListener = function(event) {
  this.dispatchEvent(event);
};


/**
 * @private
 * @type {org.apache.flex.core.WrappedHTMLElement}
 */
org.apache.flex.core.UIBase.prototype._positioner;


/**
 * @asreturn The actual element to be parented.
 * @flexjsignorecoercion org.apache.flex.core.WrappedHTMLElement
 * @protected
 * @return {Object}
 */
org.apache.flex.core.UIBase.prototype.createElement = function() {
  if (this.element == null)
    this.element = document.createElement('div');
  if (this.positioner == null)
    this.positioner = this.element;
  this.positioner.style.display = 'block';
  this.element.flexjs_wrapper = this;
  return this.positioner;
};


/**
 * @asparam value The event containing new style properties.
 * @protected
 * @param {org.apache.flex.events.ValueChangeEvent} value
 */
org.apache.flex.core.UIBase.prototype.styleChangeHandler = function(value) {
  var /** @type {Object} */ newStyle = {};
  newStyle[value.propertyName] = value.newValue;
  org.apache.flex.core.ValuesManager["valuesImpl"].applyStyles(this, newStyle);
};


org.apache.flex.core.UIBase.prototype.get__flexjs_wrapper = function() {
  return this;
};


org.apache.flex.core.UIBase.prototype.set__flexjs_wrapper = function(value) {
};


org.apache.flex.core.UIBase.prototype.get__explicitWidth = function() {
  return this._explicitWidth;
};


org.apache.flex.core.UIBase.prototype.set__explicitWidth = function(value) {
  if (this._explicitWidth == value)
    return;
  if (!isNaN(value))
    this._percentWidth = NaN;
  this._explicitWidth = value;
  this.dispatchEvent(new org.apache.flex.events.Event("explicitWidthChanged"));
};


org.apache.flex.core.UIBase.prototype.get__explicitHeight = function() {
  return this._explicitHeight;
};


org.apache.flex.core.UIBase.prototype.set__explicitHeight = function(value) {
  if (this._explicitHeight == value)
    return;
  if (!isNaN(value))
    this._percentHeight = NaN;
  this._explicitHeight = value;
  this.dispatchEvent(new org.apache.flex.events.Event("explicitHeightChanged"));
};


org.apache.flex.core.UIBase.prototype.get__percentWidth = function() {
  return this._percentWidth;
};


org.apache.flex.core.UIBase.prototype.set__percentWidth = function(value) {
  
  this._percentWidth = value;
  this.positioner.style.width = value.toString() + '%';
  if (!isNaN(value))
    this._explicitWidth = NaN;
  this.dispatchEvent(new org.apache.flex.events.Event("percentWidthChanged"));
};


org.apache.flex.core.UIBase.prototype.get__percentHeight = function() {
  return this._percentHeight;
};


org.apache.flex.core.UIBase.prototype.set__percentHeight = function(value) {
  
  this._percentHeight = value;
  this.positioner.style.height = value.toString() + '%';
  if (!isNaN(value))
    this._explicitHeight = NaN;
  this.dispatchEvent(new org.apache.flex.events.Event("percentHeightChanged"));
};


org.apache.flex.core.UIBase.prototype.get__width = function() {
  var /** @type {number} */ pixels;
  var /** @type {string} */ strpixels = this.positioner.style.width;
  if (strpixels !== null && strpixels.indexOf('%') != -1)
    pixels = NaN;
  else if (strpixels === "")
    pixels = NaN;
  else
    pixels = parseFloat(strpixels);
  if (isNaN(pixels)) {
    pixels = this.positioner.offsetWidth;
    if (pixels === 0 && this.positioner.scrollWidth !== 0) {
      pixels = this.positioner.scrollWidth;
    }
  }
  return pixels;
};


org.apache.flex.core.UIBase.prototype.set__width = function(value) {
  if (this.explicitWidth != value) {
    this.explicitWidth = value;
  }
  this.setWidth(value);
};


org.apache.flex.core.UIBase.prototype.get__height = function() {
  var /** @type {number} */ pixels;
  var /** @type {string} */ strpixels = this.positioner.style.height;
  if (strpixels !== null && strpixels.indexOf('%') != -1)
    pixels = NaN;
  else if (strpixels === "")
    pixels = NaN;
  else
    pixels = parseFloat(strpixels);
  if (isNaN(pixels)) {
    pixels = this.positioner.offsetHeight;
    if (pixels === 0 && this.positioner.scrollHeight !== 0) {
      pixels = this.positioner.scrollHeight;
    }
  }
  return pixels;
};


org.apache.flex.core.UIBase.prototype.set__height = function(value) {
  if (this.explicitHeight != value) {
    this.explicitHeight = value;
  }
  this.setHeight(value);
};


org.apache.flex.core.UIBase.prototype.get__x = function() {
  var /** @type {string} */ strpixels = this.positioner.style.left;
  var /** @type {number} */ pixels = parseFloat(strpixels);
  if (isNaN(pixels))
    pixels = this.positioner.offsetLeft;
  return pixels;
};


org.apache.flex.core.UIBase.prototype.set__x = function(value) {
  this.positioner.style.left = value.toString() + 'px';
};


org.apache.flex.core.UIBase.prototype.get__y = function() {
  var /** @type {string} */ strpixels = this.positioner.style.top;
  var /** @type {number} */ pixels = parseFloat(strpixels);
  if (isNaN(pixels))
    pixels = this.positioner.offsetTop;
  return pixels;
};


org.apache.flex.core.UIBase.prototype.set__y = function(value) {
  this.positioner.style.top = value.toString() + 'px';
};


org.apache.flex.core.UIBase.prototype.get__visible = function() {
  return this.positioner.style.display !== 'none';
};


org.apache.flex.core.UIBase.prototype.set__visible = function(value) {
  var /** @type {boolean} */ oldValue = this.positioner.style.display !== 'none';
  if (value !== oldValue) {
    if (!value) {
      this.displayStyleForLayout = this.positioner.style.display;
      this.positioner.style.display = 'none';
      this.dispatchEvent(new org.apache.flex.events.Event('hide'));
    } else {
      if (this.displayStyleForLayout != null)
        this.positioner.style.display = this.displayStyleForLayout;
      this.dispatchEvent(new org.apache.flex.events.Event('show'));
    }
    this.dispatchEvent(new org.apache.flex.events.Event('visibleChanged'));
  }
};


org.apache.flex.core.UIBase.prototype.get__view = function() {
  if (this._view == null) {
    var /** @type {Object} */ c = org.apache.flex.core.ValuesManager["valuesImpl"].getValue(this, "iBeadView");
    if (c) {
      if (c) {
        this._view = org.apache.flex.utils.Language.as(new c(), org.apache.flex.core.IBeadView);
        this.addBead(this._view);
      }
    }
  }
  return this._view;
};


org.apache.flex.core.UIBase.prototype.set__view = function(value) {
  if (this._view != value) {
    this.addBead(org.apache.flex.utils.Language.as(value, org.apache.flex.core.IBead));
    this.dispatchEvent(new org.apache.flex.events.Event("viewChanged"));
  }
};


org.apache.flex.core.UIBase.prototype.get__id = function() {
  return this._id;
};


org.apache.flex.core.UIBase.prototype.set__id = function(value) {
  if (this._id != value) {
    this._id = value;
    this.dispatchEvent(new org.apache.flex.events.Event("idChanged"));
  }
  this.element.id = this._id;
};


org.apache.flex.core.UIBase.prototype.get__style = function() {
  return this._style;
};


org.apache.flex.core.UIBase.prototype.set__style = function(value) {
  if (this._style != value) {
    if (org.apache.flex.utils.Language.is(value, String)) {
      this._style = org.apache.flex.core.ValuesManager["valuesImpl"].parseStyles(value);
    }
    else
      this._style = value;
    if (!isNaN(this._y))
      this._style.top = this._y;
    if (!isNaN(this._x))
      this._style.left = this._x;
    if (this.parent)
      org.apache.flex.core.ValuesManager["valuesImpl"].applyStyles(this, this._style);
    this.dispatchEvent(new org.apache.flex.events.Event("stylesChanged"));
  }
};


org.apache.flex.core.UIBase.prototype.get__className = function() {
  return this._className;
};


org.apache.flex.core.UIBase.prototype.set__className = function(value) {
  if (this._className != value) {
    this.setClassName(this.typeNames ? org.apache.flex.utils.StringUtil.trim(value + ' ' + this.typeNames) : value);
    this._className = value;
    this.dispatchEvent(new org.apache.flex.events.Event("classNameChanged"));
  }
};


org.apache.flex.core.UIBase.prototype.get__numElements = function() {
  
  var /** @type {Array} */ children = this.internalChildren();
  return children.length;
};


org.apache.flex.core.UIBase.prototype.get__measurementBead = function() {
  var /** @type {org.apache.flex.core.IMeasurementBead} */ measurementBead = org.apache.flex.utils.Language.as(this.getBeadByType(org.apache.flex.core.IMeasurementBead), org.apache.flex.core.IMeasurementBead);
  if (measurementBead == null) {
    this.addBead(measurementBead = org.apache.flex.utils.Language.as(new (org.apache.flex.core.ValuesManager["valuesImpl"].getValue(this, "iMeasurementBead"))(), org.apache.flex.core.IMeasurementBead));
  }
  return measurementBead;
};


org.apache.flex.core.UIBase.prototype.get__topMostEventDispatcher = function() {
  
  var /** @type {org.apache.flex.core.WrappedHTMLElement} */ e = document.body;
  return e.flexjs_wrapper;
};


org.apache.flex.core.UIBase.prototype.get__positioner = function() {
  return this._positioner;
};


org.apache.flex.core.UIBase.prototype.set__positioner = function(value) {
  this._positioner = value;
};


org.apache.flex.core.UIBase.prototype.get__alpha = function() {
  var /** @type {string} */ stralpha = this.positioner.style.opacity;
  var /** @type {number} */ alpha = parseFloat(stralpha);
  return alpha;
};


org.apache.flex.core.UIBase.prototype.set__alpha = function(value) {
  this.positioner.style.opacity = value;
};


org.apache.flex.core.UIBase.prototype.get__parent = function() {
  var /** @type {org.apache.flex.core.WrappedHTMLElement} */ p = this.positioner.parentNode;
  var /** @type {org.apache.flex.core.IParent} */ wrapper = p ? p.flexjs_wrapper : null;
  return wrapper;
};


org.apache.flex.core.UIBase.prototype.get__transformElement = function() {
  return this.element;
};


Object.defineProperties(org.apache.flex.core.UIBase.prototype, /** @lends {org.apache.flex.core.UIBase.prototype} */ {
/** @export */
flexjs_wrapper: {
get: org.apache.flex.core.UIBase.prototype.get__flexjs_wrapper,
set: org.apache.flex.core.UIBase.prototype.set__flexjs_wrapper},
/** @export */
explicitWidth: {
get: org.apache.flex.core.UIBase.prototype.get__explicitWidth,
set: org.apache.flex.core.UIBase.prototype.set__explicitWidth},
/** @export */
explicitHeight: {
get: org.apache.flex.core.UIBase.prototype.get__explicitHeight,
set: org.apache.flex.core.UIBase.prototype.set__explicitHeight},
/** @export */
percentWidth: {
get: org.apache.flex.core.UIBase.prototype.get__percentWidth,
set: org.apache.flex.core.UIBase.prototype.set__percentWidth},
/** @export */
percentHeight: {
get: org.apache.flex.core.UIBase.prototype.get__percentHeight,
set: org.apache.flex.core.UIBase.prototype.set__percentHeight},
/** @export */
width: {
get: org.apache.flex.core.UIBase.prototype.get__width,
set: org.apache.flex.core.UIBase.prototype.set__width},
/** @export */
height: {
get: org.apache.flex.core.UIBase.prototype.get__height,
set: org.apache.flex.core.UIBase.prototype.set__height},
/** @export */
x: {
get: org.apache.flex.core.UIBase.prototype.get__x,
set: org.apache.flex.core.UIBase.prototype.set__x},
/** @export */
y: {
get: org.apache.flex.core.UIBase.prototype.get__y,
set: org.apache.flex.core.UIBase.prototype.set__y},
/** @export */
visible: {
get: org.apache.flex.core.UIBase.prototype.get__visible,
set: org.apache.flex.core.UIBase.prototype.set__visible},
/** @export */
view: {
get: org.apache.flex.core.UIBase.prototype.get__view,
set: org.apache.flex.core.UIBase.prototype.set__view},
/** @export */
id: {
get: org.apache.flex.core.UIBase.prototype.get__id,
set: org.apache.flex.core.UIBase.prototype.set__id},
/** @export */
style: {
get: org.apache.flex.core.UIBase.prototype.get__style,
set: org.apache.flex.core.UIBase.prototype.set__style},
/** @export */
className: {
get: org.apache.flex.core.UIBase.prototype.get__className,
set: org.apache.flex.core.UIBase.prototype.set__className},
/** @export */
numElements: {
get: org.apache.flex.core.UIBase.prototype.get__numElements},
/** @export */
measurementBead: {
get: org.apache.flex.core.UIBase.prototype.get__measurementBead},
/** @export */
topMostEventDispatcher: {
get: org.apache.flex.core.UIBase.prototype.get__topMostEventDispatcher},
/** @export */
positioner: {
get: org.apache.flex.core.UIBase.prototype.get__positioner,
set: org.apache.flex.core.UIBase.prototype.set__positioner},
/** @export */
alpha: {
get: org.apache.flex.core.UIBase.prototype.get__alpha,
set: org.apache.flex.core.UIBase.prototype.set__alpha},
/** @export */
parent: {
get: org.apache.flex.core.UIBase.prototype.get__parent},
/** @export */
transformElement: {
get: org.apache.flex.core.UIBase.prototype.get__transformElement}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.flex.core.UIBase.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'UIBase', qName: 'org.apache.flex.core.UIBase', kind: 'class' }], interfaces: [org.apache.flex.core.IStrandWithModel, org.apache.flex.events.IEventDispatcher, org.apache.flex.core.IParentIUIBase, org.apache.flex.core.IStyleableObject, org.apache.flex.core.ILayoutChild, org.apache.flex.core.IFlexJSElement] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('org.apache.flex.core.UIBase', org.apache.flex.core.UIBase);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.flex.core.UIBase.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    variables: function () {
      return {
        'typeNames': { type: 'String'},
        'beads': { type: 'Array'}
      };
    },
    accessors: function () {
      return {
        'flexjs_wrapper': { type: 'Object', access: 'readwrite', declaredBy: 'org.apache.flex.core.UIBase'},
        'explicitWidth': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.flex.core.UIBase'},
        'explicitHeight': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.flex.core.UIBase'},
        'percentWidth': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.flex.core.UIBase'},
        'percentHeight': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.flex.core.UIBase'},
        'width': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.flex.core.UIBase', metadata: function () { return [ { name: 'Bindable', args: [ { key: '', value: 'widthChanged' } ] } ]; }},
        'height': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.flex.core.UIBase', metadata: function () { return [ { name: 'Bindable', args: [ { key: '', value: 'heightChanged' } ] } ]; }},
        'x': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.flex.core.UIBase'},
        'y': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.flex.core.UIBase'},
        'visible': { type: 'Boolean', access: 'readwrite', declaredBy: 'org.apache.flex.core.UIBase', metadata: function () { return [ { name: 'Bindable', args: [ { key: '', value: 'visibleChanged' } ] } ]; }},
        'view': { type: 'org.apache.flex.core.IBeadView', access: 'readwrite', declaredBy: 'org.apache.flex.core.UIBase'},
        'id': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.flex.core.UIBase'},
        'style': { type: 'Object', access: 'readwrite', declaredBy: 'org.apache.flex.core.UIBase'},
        'className': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.flex.core.UIBase'},
        'numElements': { type: 'int', access: 'readonly', declaredBy: 'org.apache.flex.core.UIBase'},
        'measurementBead': { type: 'org.apache.flex.core.IMeasurementBead', access: 'readonly', declaredBy: 'org.apache.flex.core.UIBase'},
        'topMostEventDispatcher': { type: 'org.apache.flex.events.IEventDispatcher', access: 'readonly', declaredBy: 'org.apache.flex.core.UIBase'},
        'positioner': { type: 'org.apache.flex.core.WrappedHTMLElement', access: 'readwrite', declaredBy: 'org.apache.flex.core.UIBase'},
        'alpha': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.flex.core.UIBase'},
        'parent': { type: 'org.apache.flex.core.IParent', access: 'readonly', declaredBy: 'org.apache.flex.core.UIBase'},
        'transformElement': { type: 'org.apache.flex.core.WrappedHTMLElement', access: 'readonly', declaredBy: 'org.apache.flex.core.UIBase'}
      };
    },
    methods: function () {
      return {
        'UIBase': { type: '', declaredBy: 'org.apache.flex.core.UIBase'},
        'setHeight': { type: 'void', declaredBy: 'org.apache.flex.core.UIBase', parameters: function () { return [  { index: 1, type: 'Number', optional: false },{ index: 2, type: 'Boolean', optional: true } ]; }},
        'setWidth': { type: 'void', declaredBy: 'org.apache.flex.core.UIBase', parameters: function () { return [  { index: 1, type: 'Number', optional: false },{ index: 2, type: 'Boolean', optional: true } ]; }},
        'setWidthAndHeight': { type: 'void', declaredBy: 'org.apache.flex.core.UIBase', parameters: function () { return [  { index: 1, type: 'Number', optional: false },{ index: 2, type: 'Number', optional: false },{ index: 3, type: 'Boolean', optional: true } ]; }},
        'isWidthSizedToContent': { type: 'Boolean', declaredBy: 'org.apache.flex.core.UIBase'},
        'isHeightSizedToContent': { type: 'Boolean', declaredBy: 'org.apache.flex.core.UIBase'},
        'setX': { type: 'void', declaredBy: 'org.apache.flex.core.UIBase', parameters: function () { return [  { index: 1, type: 'Number', optional: false } ]; }},
        'setY': { type: 'void', declaredBy: 'org.apache.flex.core.UIBase', parameters: function () { return [  { index: 1, type: 'Number', optional: false } ]; }},
        'setDisplayStyleForLayout': { type: 'void', declaredBy: 'org.apache.flex.core.UIBase', parameters: function () { return [  { index: 1, type: 'String', optional: false } ]; }},
        'internalChildren': { type: 'Array', declaredBy: 'org.apache.flex.core.UIBase'},
        'addBead': { type: 'void', declaredBy: 'org.apache.flex.core.UIBase', parameters: function () { return [  { index: 1, type: 'org.apache.flex.core.IBead', optional: false } ]; }},
        'addElement': { type: 'void', declaredBy: 'org.apache.flex.core.UIBase', parameters: function () { return [  { index: 1, type: 'org.apache.flex.core.IChild', optional: false },{ index: 2, type: 'Boolean', optional: true } ]; }},
        'addElementAt': { type: 'void', declaredBy: 'org.apache.flex.core.UIBase', parameters: function () { return [  { index: 1, type: 'org.apache.flex.core.IChild', optional: false },{ index: 2, type: 'int', optional: false },{ index: 3, type: 'Boolean', optional: true } ]; }},
        'getElementAt': { type: 'org.apache.flex.core.IChild', declaredBy: 'org.apache.flex.core.UIBase', parameters: function () { return [  { index: 1, type: 'int', optional: false } ]; }},
        'getElementIndex': { type: 'int', declaredBy: 'org.apache.flex.core.UIBase', parameters: function () { return [  { index: 1, type: 'org.apache.flex.core.IChild', optional: false } ]; }},
        'removeElement': { type: 'void', declaredBy: 'org.apache.flex.core.UIBase', parameters: function () { return [  { index: 1, type: 'org.apache.flex.core.IChild', optional: false },{ index: 2, type: 'Boolean', optional: true } ]; }},
        'addedToParent': { type: 'void', declaredBy: 'org.apache.flex.core.UIBase'}
      };
    },
    metadata: function () { return [  ]; }
  };
};