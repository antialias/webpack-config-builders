"use strict";
const update = require('react-addons-update');
const addLoader = module.exports.addLoader = loader => config => {
    config = Object.assign({module:{}}, config);
    if (undefined === config.module.loaders) {
        config = update(config, {
            module: {
                $merge: {
                    loaders: []
                }
            }
        });
    }
    return update(config, {
        module: {
            loaders: {
                $push: [loader]
            }
        }
    });
};
const addPlugin = module.exports.addPlugin = plugin => config => update(
    Object.assign({
        plugins: []
    }, config),
    {
        plugins: {
            $push: [plugin]
        }
    }
);
const addExtension = module.exports.addExtension = extension => config => {
    config = Object.assign({resolve:{}}, config);
    if (undefined === config.resolve.extensions) {
        config = update(config, {
            resolve: {
                $merge: {
                    extensions: []
                }
            }
        });
    }
    return update(config, {
        resolve: {
            extensions: {
                $push: [extension]
            }
        }
    });
};
