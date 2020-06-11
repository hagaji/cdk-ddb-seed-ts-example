#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkDdbSeedTsStack } from './cdk-ddb-seed-ts-stack';

const app = new cdk.App();
new CdkDdbSeedTsStack(app, 'CdkDdbSeedTsStack',
  {
    env: {
      account: process.env.CDK_DEFAULT_ACCOUNT,
      region: process.env.CDK_DEFAULT_REGION
      }
  }
);
