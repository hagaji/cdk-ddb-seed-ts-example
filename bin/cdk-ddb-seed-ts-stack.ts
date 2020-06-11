#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import * as ddbSeed_Service from './ddb-seed';


export class CdkDdbSeedTsStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    
    new ddbSeed_Service.ddbSeed(this, 'ddbSeed');

  }
}
