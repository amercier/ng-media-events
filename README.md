ng-media-events
===============

Angular directives for [HTML5 audio/video media events](http://www.w3.org/TR/html5/embedded-content-0.html#mediaevents).


Description
-----------

`ng-media-events` is an Angular 1.x module that adds directives that allow binding [HTML5 media events](http://www.w3.org/TR/html5/embedded-content-0.html#mediaevents)
to Angular [scope](https://docs.angularjs.org/guide/scope) methods.


Installation
------------

Using Bower:

    bower install ng-media-events --save

or, using NPM:

    npm install ng-media-events --save


Usage
-----

```html
<ANY
  ng-abort="expression"
  ng-canplay="expression"
  ng-canplaythrough="expression"
  ng-durationchange="expression"
  ng-emptied="expression"
  ng-ended="expression"
  ng-error="expression"
  ng-loadeddata="expression"
  ng-loadedmetadata="expression"
  ng-loadstart="expression"
  ng-pause="expression"
  ng-play="expression"
  ng-playing="expression"
  ng-progress="expression"
  ng-ratechange="expression"
  ng-resize="expression"
  ng-seeked="expression"
  ng-seeking="expression"
  ng-stalled="expression"
  ng-suspend="expression"
  ng-timeupdate="expression"
  ng-volumechange="expression"
  ng-waiting="expression"
>
...
</ANY>
```

| Argument | Type | Details |
|----------|------|---------|
| ngAbort<br>ngCanplay<br>ngCanplaythrough<br>ngDurationchange<br>ngEmptied<br>ngEnded<br>ngError<br>ngLoadeddata<br>ngLoadedmetadata<br>ngLoadstart<br>ngPause<br>ngPlay<br>ngPlaying<br>ngProgress<br>ngRatechange<br>ngResize<br>ngSeeked<br>ngSeeking<br>ngStalled<br>ngSuspend<br>ngTimeupdate<br>ngVolumechange<br>ngWaiting | Expression | [Expression](https://docs.angularjs.org/guide/expression) to evaluate upon click. ([Event object is available as $event](https://docs.angularjs.org/guide/expression#-event-)) |
