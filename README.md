# vue-scrollclass
スクロールして画面内に入ったらclassを付与するカスタムディレクティブ

[DEMO](https://mattune.github.io/vue-scrollclass/)

## 導入方法
1. src/directive/scrollClass.jsを使用するプロジェクトフォルダに追加する。
2. 使用したい.vueや.jsにimportする

```javascript
import './directives/scrollClass';
```

## 使用方法
```html
<div v-scrollClass></div>
```
初期値でclass名には'**target**'、付与class名には'**action**'が入る。

### オプション
```html
<div v-scrollClass="{hitOffset:500}"></div>
```
→画面下からのヒット位置を調整（px）

```html
<div v-scrollClass="{addClass:'hoge'}"></div>
```
→付与するclass名を変更

```html
<div v-scrollClass="{targetClass:'fuga'}"></div>
```
→初期値のclass名を変更
