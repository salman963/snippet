odoo.define('website.custom_dynamic_snippet_products', function (require) {
    'use strict';
    
    const config = require('web.config');
    const core = require('web.core');
    const publicWidget = require('web.public.widget');
    const DynamicSnippet = require('website.s_dynamic_snippet');
    
    const CustomDynamicSnippetProducts = DynamicSnippet.extend({
        selector: '.custom_dynamic_snippet_products',
        xmlDependencies: (DynamicSnippet.prototype.xmlDependencies || []).concat(
            ['/dynamic_product_snippet/static/src/xml/custom_dynamic_snippet_product.xml']
        ),
    
        /**
         *
         * @override
         */
        init: function () {
            this._super.apply(this, arguments);
            this.template_key = 'website.custom_dynamic_snippet.products';
        },
    
        //--------------------------------------------------------------------------
        // Private
        //--------------------------------------------------------------------------
    
      
      
    });
    publicWidget.registry.custom_dynamic_product_snippet = CustomDynamicSnippetProducts;
    
    return CustomDynamicSnippetProducts;
    });




