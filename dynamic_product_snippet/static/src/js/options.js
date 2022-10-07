odoo.define('dynamic_product_snippet.s_dynamic_snippet_products_options', function (require) {
    'use strict';
    const options = require('web_editor.snippets.options');
    const dynamic_options = require('website.s_dynamic_snippet_options');

    const customdynamicSnippetOptions = dynamic_options.extend({
        /**
         *
         * @override
         */
        init: function () {
            this._super.apply(this, arguments);
            this.dynamicFilters = {};
            this.dynamicFilterTemplates = {};
        },
     
    });
    
    options.registry.custom_dynamic_snippet = customdynamicSnippetOptions;
    
    return customdynamicSnippetOptions;
    });
    