# SlideTabApp

Ionic SlideTabApp
===

coffeescriptを使ったIonicのアプリのサンプルです

プロジェクトの動かし方
---

以下のコマンドでプロジェクトを初期化します

```
$ npm install
```

iOSとAndroidのプラットフォームを追加します

```
$ ionic platform add ios
$ ionic platform add android
```

必要なプラグインを追加します

```
$ gulp ionic-plugin-install
```

AndroidでブラウザのレンダリングエンジンをCrosswalkに変更します

```
$ ionic browser add crosswalk@10.39.235.15
```

iOSは実行前に以下のコマンドをインストールします

`$ sudo npm install -g ios-sim`

Androidは事前にAndroidSdkを入れておいて下さい

それぞれ実機をつなげた状態で以下のコマンドで実行します

コマンドラインからの実行

iOS

`$ ionic run ios`

Android

`$ ionic run android`

IDEを使って実行

iOS

**Xcode起動 → Open → projectroot/platforms/ios/project-name.xcodeprojを選択 → Run**

Android

**AndroidStudio起動 → File → importProject → projectroot/platforms/android/build.gradleを選択 → Run**

エミュレータの場合は以下のようになります

iOS

`$ ionic emulate ios`

Android

`$ ionic emulate android`

Base Project
---

CoffeeScript Ionic Starter

https://github.com/StephenGrider/CoffeeScript-Ionic-Starter

