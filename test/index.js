"use strict";
const assert = require('assert');
const helpers = require('..');
describe.only('webpack helpers', () => {
    describe('addLoader', () => {
        it('should extend the config when other module.loaders are defined', () => {
            assert.deepEqual(
                helpers.addLoader('def')({module:{loaders:['abc']}}),
                {module:{loaders: ['abc', 'def']}}
            );
        });
        it('should extend the config when module is defined, but no loaders', () => {
            assert.deepEqual(
                helpers.addLoader('def')({module:{}}),
                {module:{loaders: ['def']}}
            );
        });
        it('should extend the config when module is undefined', () => {
            assert.deepEqual(
                helpers.addLoader('def')({}),
                {module:{loaders: ['def']}}
            );
        });
        it('should extend the config when the config is undefined', () => {
            assert.deepEqual(
                helpers.addLoader('def')(),
                {module:{loaders: ['def']}}
            );
        });
        it('should not modify the original config', () => {
            let config = {module:{loaders: ['def']}};
            const originalConfig = JSON.parse(JSON.stringify(config));
            helpers.addLoader('abc')(config),
            assert.deepEqual(originalConfig, config);
        });
    });
    describe('addPlugin', () => {
        it('should add a plugin to an undefined config', () => {
            assert.deepEqual(helpers.addPlugin('abc')({}), {
                plugins: ['abc']
            });
        });
        it('should add a plugin if no plugin property is set', () => {
            assert.deepEqual(helpers.addPlugin('abc')({}), {
                plugins: ['abc']
            });
        });
        it('should add a plugin if the plugins array is empty', () => {
            assert.deepEqual(helpers.addPlugin('abc')({plugins: []}), {
                plugins: ['abc']
            });
        });
        it('should push plugins onto the end of the plugins array', () => {
            assert.deepEqual(helpers.addPlugin('abc')({plugins: ['xyz']}), {
                plugins: ['xyz', 'abc']
            });
        });
    });
    describe('addExtension', () => {
        it('should extend the config when other resolve.extensions are defined', () => {
            assert.deepEqual(
                helpers.addExtension('def')({resolve:{extensions: ['abc']}}),
                {resolve:{extensions: ['abc', 'def']}}
            );
        });
        it('should extend the config when resolve is defined, but no loaders', () => {
            assert.deepEqual(
                helpers.addExtension('def')({resolve:{}}),
                {resolve:{extensions: ['def']}}
            );
        });
        it('should extend the config when resolve is undefined', () => {
            assert.deepEqual(
                helpers.addExtension('def')({}),
                {resolve:{extensions: ['def']}}
            );
        });
        it('should extend the config when the config is undefined', () => {
            assert.deepEqual(
                helpers.addExtension('def')(),
                {resolve:{extensions: ['def']}}
            );
        });
        it('should not modify the original config', () => {
            let config = {resolve:{extensions: ['def']}};
            const originalConfig = JSON.parse(JSON.stringify(config));
            helpers.addExtension('abc')(config),
            assert.deepEqual(originalConfig, config);
        });
    });
});
