leaf.ai = {
	PatternList: new leaf.List(),
	TopicList: undefined,

    /**
     * Executes a callback based on the the success of a match.
     * @memberOf leaf.ai
     * @param {string} The pattern.
     * @param {Function} success The callback callback
     * @param {Function} failure The failure callback
     * @returns {string} The response.
     */
	chat: function(message, success, failure) {
		var result; // = undefined
		/**
		 * Return a value without punctuation, spacing, and capitalization.
		 * @name getFiltered
		 * @private
		 * @param {string} value The value
		 * @return {string} The value
		 */
		function getFiltered(value) {
			return value.replace(/[^a-z0-9*]/gi,"").toLowerCase();
		}
		/**
		 * Return a random value from an Array containing possible responses.
		 * @name getRandom
		 * @private
		 * @param {Array} data The array
		 * @return {string} The value
		 */
		function getRandom(data) {
			return data[Math.floor(Math.random() * data.length)];
		}
		/**
		 * Return a concatenated string composed of the response's header,
		 * content, and footer.
		 * @name getRandom
		 * @private
		 * @param  {Object} model The model
		 * @return {string} The response
		 */
		function getResponse(model) {
			var response = "";
			/**
			 * Append the header
			 */
			if (leaf.isDefined(model.get('header'))) {
				response += getRandom(model.get('header')) + " ";
			}
			/**
			 * Append the content
			 */
			if (leaf.isDefined(model.get('content'))) {
				response += getRandom(model.get('content')) + " ";
			}
			/**
			 * Append the footer
			 */
			if (leaf.isDefined(model.get('footer'))) {
				response += getRandom(model.get('footer'));
			}
			/**
			 * Return the response.
			 */
			return response;
		}
		/**
		 * Determines if the value is matched against a pattern.
		 * @name getResponse
		 * @private
		 * @param {string} pattern The pattern
		 * @param {string} value The value
		 * @return {Boolean} True if the value is matched against a pattern.
		 */
		function isMatch(pattern, value) {
			/**
			 * Normalize the data.
			 */
			pattern = getFiltered(pattern);
			  value = getFiltered(value);
			/**
			 * Return the response.
			 */
		  	return new RegExp("^" + pattern.split("*").join(".*") + "$").test(value);
		}
		/**
		 * Return a model if it's pattern matches the message.
		 * @name getResult
		 * @private
		 * @param  {Object} list The List.
		 * @return {Object} The Model.
		 */
		function getResult(list) {
			var result;

			list.each(function(model) {
				model.get('pattern').forEach(function(item) {
					if(isMatch(item, message)) {
						result = model;
					}
				});
			});

			return result;
		}
		/**
		 * Get the result
		 */
		if(leaf.isUndefined(this.TopicList)) {
			result = getResult(this.PatternList);
		}
		else {
			result = getResult(this.TopicList);
		}
		/**
		 * Execute the proper callback depending on the success of finding a
		 * match.
		 */
		if(leaf.isDefined(result)) {
			if (leaf.isFunction(success)) {
				/**
				 * Execute success()
				 */
				this.TopicList = new leaf.List(result.get("topic")) || undefined;
				/**
				 * Execute success()
				 */
				success(getResponse(result), result);
			}
		}
		else {
			if(leaf.isFunction(failure)) {
				failure();
			}
		}
		return message;
	}
};
