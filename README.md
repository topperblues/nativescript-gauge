# NativeScript-Gauge
XML widget to create native Gauge for Android and Ios in NativeScript apps.
A fork of nativescript-progressbar by sebawita

## Works with
Android and Ios

## Installation
`npm install nativescript-gauge`


## Usage

### CircleProgressBar

```XML
<page xmlns:pb="nativescript-progressbar">
    <pb:CircleProgressBar
        progress="{{progress}}"
        text="{{message}}"
        textSize="50"
        widthProgressBackground="20"
        widthProgressBarLine="50"
        backgroundColor="red"
        progressColor="blue"
        linearGradient="false"
        width="200"
    />
</page>
```



## Attributes

| Property                | Description                                     | Values       |
|-------------------------|-------------------------------------------------|--------------|
| progress                | Sets the progress value                         | number 0-100 |
| text                    | Sets the text in the middle of the progress bar | text         |
| textSize                | Sets the size of the text                       | number       |
| textColor               | Sets the color of the text                      | color        |
| textStyle               | Sets the weight of the text                     | string       |
| widthProgressBackground | Sets the size of the progress background        | number       |
| widthProgressBarLine    | Sets the size of the progress bar               | number       |
| backgroundColor         | Sets the color of the progress background       | color        |
| progressColor           | Sets the color of the progress bar              | color        |

               

## Notes
- We're using [Android-ProgressViewsLib](https://android-arsenal.com/details/1/3186) by [natasam](https://android-arsenal.com/user/natasam)
- We're using [Ios-GaugeView](https://github.com/BelkaLab/GaugeView) by [BelkaLab](https://github.com/BelkaLab)
