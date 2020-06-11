#!/usr/bin/env node
import * as core from "@aws-cdk/core";
import cdk = require("@aws-cdk/core");
import * as dynamodb from '@aws-cdk/aws-dynamodb';
import { Seeder } from 'aws-cdk-dynamodb-seeder';

export class ddbSeed extends core.Construct  {
  constructor(scope: cdk.Construct, id: string) {
    super(scope, id);

    this.setup();
    this.createResource();

  }

  private setup(): void {
    // Lambdaで利用するリソースの事前作成があれば
  }

  private createResource(): void {

    // The code that defines your stack goes here
    const myTable = new dynamodb.Table(this, "MyTable", {
      tableName: "MyTable",
      partitionKey: { name: "id", type: dynamodb.AttributeType.STRING },
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST
    });
    new Seeder(this, "MySeeder", {
      table: myTable,
      setup: require("../testdata/items-to-put.json"),
      teardown: require("../testdata/keys-to-delete.json"),
      refreshOnUpdate: true  // runs setup and teardown on every update, default false
    });

  }
}