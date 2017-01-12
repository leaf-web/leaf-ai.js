/**
 * @namespace leaf.ai
 * @property {Object} PatternList The List of Patterns
 */
leaf.ai = {
    PatternList: new leaf.List(),
    /**
     * Executes a success callback if a match if found, and passes in the response and Model.
     * @memberOf leaf.ai
     * @param {string} The pattern.
     * @param {Function} success The callback callback
     * @param {Function} failure The failure callback
     * @returns {string} The response.
     */
    respond: function(pattern, success, failure) {
        var result;
        /**
        * Determines if a pattern exist.
        * @private
        * @param {Object} model The Model.
        * @returns {Boolean} True if the pattern exists in the Model.
        */
        function contains(model) {
            /**
             * Handle a string pattern
             */
            if(leaf.isString(model.get('pattern'))) {
                return pattern.indexOf(filter(model.get('pattern'))) != -1;
            }
            /**
             * Handle an Array pattern
             */
            if(leaf.isArray(model.get('pattern'))) {
                for (var index = 0; index < model.get('pattern').length; index++) {
                    if(pattern.indexOf(filter(model.get('pattern')[index])) != -1) {
                        return true;
                    }
                }
            }

            return false;
        }
        /**
        * Return the response if a pattern exists.
        * @private
        * @param {Object} model The Model.
        * @returns {string} The response.
        */
        function respond(model) {
        	var header = "", content = "", footer = "";

            /**
             * Handle a string header
             */
            if(leaf.isDefined(model.get('header')) && leaf.isString(model.get('header')) ) {
                header = model.get('header');
            }

            /**
             * Handle an Array header
             */
            if(leaf.isDefined(model.get('header')) && leaf.isArray(model.get('header')) ) {
                header = random(model.get('header'));
            }

            /**
             * Handle a string content
             */
            if(leaf.isDefined(model.get('content')) && leaf.isString(model.get('content'))) {
                content = model.get('content');
            }

            /**
             * Handle an Array content
             */
            if(leaf.isDefined(model.get('content')) && leaf.isArray(model.get('content'))) {
                content = random(model.get('content'));
            }

            /**
             * Handle a string footer
             */
            if(leaf.isDefined(model.get('footer')) && leaf.isString(model.get('footer')) ) {
                footer = model.get('footer');
            }

            /**
             * Handle an Array footer
             */
            if(leaf.isDefined(model.get('footer')) && leaf.isArray(model.get('footer')) ) {
                footer = random(model.get('footer'));
            }

            return header + content + footer;
        }
        /**
        * Returns a random response if multiple responses are given.
        * @private
        * @param {Object} data The Array.
        * @returns {string} The response.
        */
        function random(data) {
            return data[Math.floor(Math.random() * data.length)];
        }
        /**
         * Removes punctuation and lower cases a value for better string
         * comparisons.
         * @private
         * @param {string} value The value.
         * @returns {string} The filtered value.
         */
        function filter(value) {
            return value.toLowerCase().replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");
        }
        /**
         * Filter the pattern.
         */
        pattern = filter(pattern);
        /**
         * Iterate through the List and look for a match. If a match was found,
         * assign result to it.
         */
        this.PatternList.each(function(model) {
            if(contains(model) === true) {
                result = model;
            }
        });
        /**
         * Execute the appropriate callback Function. If the result is a Model, pass
         * the response and the result to the success callback.
         */
        if (leaf.isDefined(result)) {
            success(respond(result), result);
        }
        else {
            failure();
        }
    }
};
