"use strict";
var color = require("color");
var common = require("./circleProgressBar-common");
global.moduleMerge(common, exports);
var CircleProgressBar = (function (_super) {
    __extends(CircleProgressBar, _super);
    function CircleProgressBar(context) {
        _super.call(this);
        this._ios = new GaugeView();

    }
    Object.defineProperty(CircleProgressBar.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        enumerable: true,
        configurable: true
    });
    return CircleProgressBar;
}(common.CircleProgressBar));
exports.CircleProgressBar = CircleProgressBar;
//progress property
function onProgressPropertyChanged(data) {
    var mycomponent = data.object;
    mycomponent.ios.percentage = data.newValue;
}
common.CircleProgressBar.progressProperty.metadata.onSetNativeValue = onProgressPropertyChanged;
//text property
function onTextPropertyChanged(data) {
    var mycomponent = data.object;
    mycomponent.ios.labelText = data.newValue;
}
common.CircleProgressBar.textProperty.metadata.onSetNativeValue = onTextPropertyChanged;
//textSize property
function onTextSizePropertyChanged(data) {
    var mycomponent = data.object;
    mycomponent.ios.labelFont = UIFont.systemFontOfSize(data.newValue);
}
common.CircleProgressBar.textSizeProperty.metadata.onSetNativeValue = onTextSizePropertyChanged;
//textColor property
function onTextColorPropertyChanged(data) {
    var mycomponent = data.object;
    var droidColor = new color.Color(data.newValue).ios;
    mycomponent.ios.labelColor = droidColor;
}
common.CircleProgressBar.textColorProperty.metadata.onSetNativeValue = onTextColorPropertyChanged;
//textStyle property
function onTextStylePropertyChanged(data) {
    var mycomponent = data.object;
    var fontSize = mycomponent.ios.labelFont.pointSize;
    var color = mycomponent.ios.labelColor;
    switch (data.newValue){
        case "thin":
            mycomponent.ios.labelFont = UIFont.systemFontOfSizeWeight(fontSize, UIFontWeightThin);
            break;
        case "light":
            mycomponent.ios.labelFont = UIFont.systemFontOfSizeWeight(fontSize, UIFontWeightLight);
            break;
        case "regular":
            mycomponent.ios.labelFont = UIFont.systemFontOfSizeWeight(fontSize, UIFontWeightRegular);
            break;
        case "medium":
            mycomponent.ios.labelFont = UIFont.systemFontOfSizeWeight(fontSize, UIFontWeightMedium);
            break;
        case "semibold":
            mycomponent.ios.labelFont = UIFont.systemFontOfSizeWeight(fontSize, UIFontWeightSemibold);
            break;
        case "bold":
            mycomponent.ios.labelFont = UIFont.systemFontOfSizeWeight(fontSize, UIFontWeightBold);
    }
    mycomponent.ios.labelColor = color;
}
common.CircleProgressBar.textStyleProperty.metadata.onSetNativeValue = onTextStylePropertyChanged;
//widthProgressBackground property
function onWidthProgressBackgroundPropertyChanged(data) {
    var mycomponent = data.object;
    mycomponent.ios.thickness = data.newValue;
}
common.CircleProgressBar.widthProgressBackgroundProperty.metadata.onSetNativeValue = onWidthProgressBackgroundPropertyChanged;
//widthProgressBarLine property
function onWidthProgressBarLinePropertyPropertyChanged(data) {
    var mycomponent = data.object;
    mycomponent.ios.thickness = data.newValue;
}
common.CircleProgressBar.widthProgressBarLineProperty.metadata.onSetNativeValue = onWidthProgressBarLinePropertyPropertyChanged;
//backgroundColor property
function onBackgroundColorPropertyPropertyChanged(data) {
    if (color.Color.isValid(data.newValue)) {
        var mycomponent = data.object;
        var droidColor = new color.Color(data.newValue).ios;
        mycomponent.ios.gaugeBackgroundColor = droidColor;
    }
    else {
        console.log("The background color: " + data.newValue + " is invalid.");
    }
}
common.CircleProgressBar.backgroundColorProperty.metadata.onSetNativeValue = onBackgroundColorPropertyPropertyChanged;
//progressColor property
function onProgressColorPropertyPropertyChanged(data) {
    if (color.Color.isValid(data.newValue)) {
        var mycomponent = data.object;
        var droidColor = new color.Color(data.newValue).ios;
        mycomponent.ios.gaugeColor = droidColor;
    }
    else {
        console.log("The progress color: " + data.newValue + " is invalid.");
    }
}
common.CircleProgressBar.progressColorProperty.metadata.onSetNativeValue = onProgressColorPropertyPropertyChanged;
//linearGradient property
function onLinearGradientPropertyPropertyChanged(data) {
    var mycomponent = data.object;
}
common.CircleProgressBar.linearGradientProperty.metadata.onSetNativeValue = onLinearGradientPropertyPropertyChanged;
//# sourceMappingURL=circleProgressBar.ios.js.map

