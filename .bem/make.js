/*global MAKE:true */
var PATH = require('path');

"use strict";

//process.env.YENV = 'production';

MAKE.decl('Arch', {

    blocksLevelsRegexp: /^.+?\.blocks/,
    bundlesLevelsRegexp: /^.+?\.bundles$/,

    getLibraries: function() {

        return {
            'bem-bl': {
                type: 'git',
                url: 'git://github.com/bem/bem-bl.git',
                treeish: '0.3'
            },
            'bem-controls' : {
                type     : 'git',
                url      : 'git://github.com/bem/bem-controls.git',
                npmPackages : false,
                treeish: 'v1.0.0'
            },
            'islands-components' : {
                type     : 'git',
                url      : 'git://github.yandex-team.ru/lego/islands-components.git',
                npmPackages : false,
                treeish: 'v1.0.0'
            },
            'lego' : {
                type     : 'git',
                url      : 'git://github.yandex-team.ru/lego/romochka.git',
                npmPackages: [ 'tools/package.json' ],
                paths: [
                    'blocks-common',
                    'blocks-desktop',
                    'tools'
                ]
            }
        };

    }

});


MAKE.decl('BundleNode', {

    getTechs: function() {

        if (PATH.basename(this.level.dir) === 'benchmark.bundles')  {
            return [
                'bemjson.js',
                'bemdecl.js',
                'deps.js',
                'bemhtml'
            ];
        }

        return [
            'bemjson.js',
            'bemdecl.js',
            'deps.js',
            'i18n',
            'bemhtml',
            'i18n.js+bemhtml',
            'js',
            'css',
            'ie.css',
            'ie6.css',
            'ie7.css',
            'ie8.css',
            'ie9.css',
            'html'
        ];

    },

    getLevels: function(tech) {

        if (PATH.basename(this.level.dir) === 'benchmark.bundles') {
            return ['../bem-bl/blocks-common',
                    '../bem-bl/blocks-desktop',
                    '../common.blocks',
                    '../desktop.blocks']
                .map(PATH.resolve.bind(PATH, __dirname));
        }

        return this.__base(tech);

    },

    'create-i18n.js-optimizer-node': function() {
        return this['create-js-optimizer-node'].apply(this, arguments);
    },

    'create-i18n.js+bemhtml-optimizer-node': function(tech, sourceNode, bundleNode) {
        return this['create-js-optimizer-node'].apply(this, arguments);
    },

    'create-i18n.html-node': function() {
        return this['create-html-node'].apply(this, arguments);
    }

});
