var BEM = require('bem');

exports.baseLevelPath = require.resolve('../../.bem/levels/bundles.js');

exports.getConfig = function() {

    return BEM.util.extend(this.__base() || {}, {
        bundleBuildLevels: this.resolvePaths([
            '../../bem-bl/blocks-common',
            '../../bem-bl/blocks-desktop',
            '../../bemhtml/common.blocks',
            '../../bem-controls/common.blocks',
            '../../bem-controls/desktop.blocks',
            '../../islands-controls/common.blocks',
            '../../islands-controls/desktop.blocks',
            '../../islands-popups/common.blocks',
            '../../islands-popups/desktop.blocks',
            '../../common.blocks',
            '../../desktop.blocks'
        ])
    });

};
