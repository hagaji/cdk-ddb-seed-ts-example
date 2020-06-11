# Welcome to your CDK TypeScript project!

## Overview

このサンプルは `aws-cdk-dynamodb-seeder` を利用して作成されたDynamoDBテーブルへサンプルデータを注入します。  

## `aws-cdk-dynamodb-seeder` とは

* CDKスクリプトでLambdaとS3バケットを作成し、指示されたDynamoDBテーブルへサンプルデータを注入します。
* テストデータは、`./testdata` へ格納されているJSONファイルです。
* サンプルでは、DynamoDBテーブルも作成されます。テーブルは、`MyTable` です。

## Notes

1. cdkバージョンは、1.44.0 です  
2. node / npm が利用可能な環境が必要です
3. 作成するテーブル名、読み込ませるデータファイル名は、 ./bin/ddb-seed.ts で指定しています

## Usage

* `npm i` で必要なnode modulesをインストールしてください
* `cdk synth` でCFnテンプレートへコンパイルされることを確認してください
* `cdk deploy` でデプロイしてください
* CFnテンプレートでLambdaが作成され、JSONファイルがDynamoDBへ注入されます
