// Copyright IBM Corp. 2014,2019. All Rights Reserved.
// Node module: loopback-boot
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

'use strict';

const fs = require('fs-extra');
const path = require('path');

const sandbox = exports;
sandbox.PATH = path.join(__dirname, '..', 'sandbox');

sandbox.reset = function() {
  fs.removeSync(sandbox.PATH);
  fs.mkdirsSync(sandbox.PATH);
};

sandbox.resolve = function() {
  const args = Array.prototype.slice.apply(arguments);
  args.unshift(sandbox.PATH);
  return path.resolve.apply(path.resolve, args);
};
