/**
 * Generated by Apache Flex Cross-Compiler from Main.mxml
 * Main
 *
 * @fileoverview
 *
 * @suppress {checkTypes|accessControls}
 */

goog.provide('Main');

goog.require('org.apache.flex.express.Application');
goog.require('InitialView');
goog.require('org.apache.flex.html.beads.GroupView');
goog.require('org.apache.flex.html.beads.layouts.HorizontalLayout');
goog.require('org.apache.flex.html.beads.GroupView');
goog.require('org.apache.flex.html.beads.layouts.BasicLayout');
goog.require('org.apache.flex.utils.EffectTimer');
goog.require('org.apache.flex.core.StatesWithTransitionsImpl');
goog.require('org.apache.flex.html.beads.GroupView');
goog.require('org.apache.flex.html.beads.layouts.BasicLayout');



/**
 * @constructor
 * @extends {org.apache.flex.express.Application}
 */
Main = function() {
  Main.base(this, 'constructor');
  
  /**
   * @private
   * @type {InitialView}
   */
  this.$ID0_;
  
  /**
   * @private
   * @type {Array}
   */
  this.mxmldd;
  
  /**
   * @private
   * @type {Array}
   */
  this.mxmldp;

  this.generateMXMLAttributes
  ([1,
'initialView',
false,
[InitialView, 1, '_id', true, '$ID0', 0, 0, null],
0,
0
  ]);
  
};
goog.inherits(Main, org.apache.flex.express.Application);



/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
Main.prototype.FLEXJS_CLASS_INFO = { names: [{ name: 'Main', qName: 'Main', kind: 'class'  }] };


/**
 * Prevent renaming of class. Needed for reflection.
 */
goog.exportSymbol('Main', Main);



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
Main.prototype.FLEXJS_REFLECTION_INFO = function () {
  return {
    variables: function () {return {};},
    accessors: function () {return {};},
    methods: function () {
      return {
        'Main': { type: '', declaredBy: 'Main'}
      };
    }
  };
};


Main.prototype.info = function() {
  return { }};


Main.prototype.cssData = [0,
1,
"*",
function() {this["fontFamily"] = "Arial";
this["borderWidth"] = 1.0;
this["fontSize"] = 12.0},
0,
1,
".flexjs *",
function() {this["WebkitBoxSizing"] = "border-box";
this["boxSizing"] = "border-box";
this["MozBoxSizing"] = "border-box"},
0,
1,
".flexjs *:before",
function() {this["WebkitBoxSizing"] = "border-box";
this["boxSizing"] = "border-box";
this["MozBoxSizing"] = "border-box"},
0,
1,
".flexjs *:after",
function() {this["WebkitBoxSizing"] = "border-box";
this["boxSizing"] = "border-box";
this["MozBoxSizing"] = "border-box"},
0,
1,
".unselectable",
function() {this["MozUserSelect"] = "-moz-none";
this["OUserSelect"] = "none";
this["WebkitUserSelect"] = "none";
this["userSelect"] = "none";
this["KhtmlUserSelect"] = "none"},
0,
1,
"org.apache.flex.core.Application",
function() {this["padding"] = 0.0;
this["margin"] = 0.0},
0,
1,
"org.apache.flex.html.Button",
function() {this["border"] = [1.0, "solid", 8421504];
this["padding"] = 4.0;
this["backgroundColor"] = 16316664;
this["margin"] = 0.0;
this["borderRadius"] = 2.0},
0,
1,
"org.apache.flex.html.Button:hover",
function() {this["border"] = [1.0, "solid", 8421504];
this["padding"] = 4.0;
this["backgroundColor"] = 15263976},
0,
1,
"org.apache.flex.html.Button:active",
function() {this["border"] = [1.0, "solid", 8421504];
this["padding"] = 4.0;
this["backgroundColor"] = 14211288},
0,
1,
"org.apache.flex.html.Group",
function() {this["iBeadView"] = org.apache.flex.html.beads.GroupView},
0,
1,
"org.apache.flex.html.HGroup",
function() {this["iBeadLayout"] = org.apache.flex.html.beads.layouts.HorizontalLayout},
0,
1,
"Panel .TitleBar",
function() {this["borderBottom"] = [1.0, "solid", 3355443]},
0,
1,
".PanelContent",
function() {this["backgroundColor"] = 16777215},
0,
1,
".SpinnerButton",
function() {this["padding"] = 0.0;
this["margin"] = 0.0;
this["fontSize"] = 6.0},
0,
1,
".SpinnerButton:hover",
function() {this["padding"] = 0.0;
this["margin"] = 0.0;
this["fontSize"] = 6.0},
0,
1,
"org.apache.flex.html.TextInput",
function() {this["border"] = [1.0, "solid", 8421504];
this["padding"] = 4.0;
this["margin"] = 0.0;
this["borderRadius"] = 2.0},
0,
1,
"TitleBar .TitleBarCloseButton",
function() {this["margin"] = 0.0;
this["width"] = 16.0;
this["height"] = 16.0},
0,
1,
"TitleBar .TitleBarTitle",
function() {this["padding"] = 0.0;
this["margin"] = 0.0;
this["fontWeight"] = "bold"},
0,
1,
".toggleTextButton",
function() {this["border"] = [1.0, "solid", 8421504];
this["padding"] = 4.0;
this["backgroundColor"] = 16316664},
0,
1,
".toggleTextButton:hover",
function() {this["border"] = [1.0, "solid", 8421504];
this["padding"] = 4.0;
this["backgroundColor"] = 15263976},
0,
1,
".toggleTextButton_Selected",
function() {this["border"] = [1.0, "solid", 8421504];
this["padding"] = 4.0;
this["backgroundColor"] = 14211288},
0,
1,
".toggleTextButton_Selected:hover",
function() {this["border"] = [1.0, "solid", 8421504];
this["padding"] = 4.0;
this["backgroundColor"] = 15263976},
0,
1,
"org.apache.flex.html.ToolTip",
function() {this["backgroundColor"] = 16777164},
0,
1,
"org.apache.flex.core.View",
function() {this["iBeadView"] = org.apache.flex.html.beads.GroupView;
this["iBeadLayout"] = org.apache.flex.html.beads.layouts.BasicLayout},
0,
1,
"global",
function() {this["iEffectTimer"] = org.apache.flex.utils.EffectTimer;
this["effectTimerInterval"] = 10.0;
this["iStatesImpl"] = org.apache.flex.core.StatesWithTransitionsImpl},
0,
1,
"org.apache.flex.express.Application",
function() {this["padding"] = 0.0;
this["margin"] = 0.0},
0,
1,
"org.apache.flex.express.TextInput",
function() {this["border"] = [1.0, "solid", 8421504];
this["padding"] = 4.0;
this["margin"] = 0.0;
this["borderRadius"] = 2.0},
0,
1,
"org.apache.flex.express.View",
function() {this["iBeadView"] = org.apache.flex.html.beads.GroupView;
this["iBeadLayout"] = org.apache.flex.html.beads.layouts.BasicLayout}];