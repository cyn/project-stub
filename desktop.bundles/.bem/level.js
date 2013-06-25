var BEM = require('bem');

exports.baseLevelPath = require.resolve('../../.bem/levels/bundles.js');

exports.getConfig = function() {

    return BEM.util.extend(this.__base() || {}, {
        bundleBuildLevels: this.resolvePaths([
            '../../bem-bl/blocks-common',
            '../../bem-bl/blocks-desktop',
            '../../lego/blocks-common',
            '../../lego/blocks-desktop',
            '../../bemhtml/common.blocks',
            '../../bem-controls/common.blocks',
            '../../bem-controls/desktop.blocks',
            '../../islands-components/common.blocks',
            '../../islands-components/desktop.blocks',
            '../../common.blocks',
            '../../desktop.blocks'
        ])
    });

};
