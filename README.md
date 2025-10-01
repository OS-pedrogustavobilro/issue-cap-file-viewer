# Issue Cap File Viewer

This project is a minimal reproduction of an iOS issue with the [Capacitor FileViewer](https://capacitorjs.com/docs/apis/file-viewer) plugin.

## Purpose

The repository demonstrates a specific problem encountered when using [openDocumentFromLocalPath](https://capacitorjs.com/docs/apis/file-viewer#opendocumentfromlocalpath) on iOS devices. The `previewMediaContentFromLocalPath` was also found to have this issue

## Getting Started

1. Clone the repository:
  ```
  git clone https://github.com/marlon-ionic/issue-cap-file-viewer.git
  ```

2. Install dependencies:
  ```
  npm install
  ```

3. Build and run the app (alternatively you may run `build`+`cap sync` and open in Xcode and run from there):
  ```
  npm run cap ios
  ```

## Issue Description

Using an iOS simulator, and also an iPhone SE with iOS 26, I can confirm that the file path is being created correctly via the File Transfer plugin. It also opens correctly on Android. But on iOS, the pdf never opens when specific via a local path. Opening direct from the URL works ok on iOS. Same thing applies to the video file and trying to preview the media.

## Environment

- Ionic version: 8.6.5
- Capacitor version: 7.4.2
- Capacitor FileViewer version: 1.0.4

