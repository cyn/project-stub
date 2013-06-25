({
    block: 'b-page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '_index.css', ie: false },
        { elem: 'css', url: '_index', ie: true },
        { elem: 'meta', attrs: { name: 'description', content: '' }},
        { elem: 'meta', attrs: { name: 'keywords', content: '' }}
    ],
    content:[
        {
            block: 'b-examples',
            content: [
                {
                    block: 'b-example',
                    title: 'Первый пример',
                    content: [
{
    block: 'example',
    js: true,
    content: [
        {
            elem: 'link-wrapper',
            content: {
                elem: 'link',
                content: 'Ссылка'
            }
        }
    ]
}
                    ]
                },
                {
                    block: 'b-example',
                    mods: { position: '02' },
                    title: 'Работа с элементами',
                    content: [
                        {
                            block: 'e-bind',
                            content: 'Примерчичик с DOM-ом'
                        }
                    ]
                }
            ]
        },
        {
            block: 'i-jquery',
            url: '/desktop.blocks/i-jquery/jquery.js',
            mods: { version: '1.8.3' }
        },
        { elem: 'js', url: '_index.js' }
    ]
})
