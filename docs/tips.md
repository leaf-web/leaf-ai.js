# Tips

Here are five helpful tips when creating your AI bot.

## 1. Concat Libraries

Maintain the patterns in seperate files and concat them with `grunt-contrib-concat`.
    
    concat: {
      dest: {
        src:  'src/**/*.json',
        dest: 'build/assistant.json'
      },
      options: {
        banner: '[',
        footer: ']',
        separator: ',',
      }
    },
    
## 2. Compress Libraries

Use `grunt-json-minify` to improve the bot's performance.

    'json-minify': {
      dest: {
        files: 'build/assistant.json'
      }
    },
    
## 3. Load Libraries

You can use the `fetch` method to load your external JSON files.

    leaf.ai.PatternList.fetch('build/assistant.json', function() {
        //
        // Main code
        //
    });
    
## 4. Extend the Bot

You can use custom keywords to extend the bot's functionality.

    leaf.ai.respond('some question', function(response, model) {
        console.log(response);
        
        if(leaf.isDefined(model.get('custom-keyword'))) {
            //
            // If the keyword exists in the model, run this code.
            //
        });
    });

## 5. Use Handlebars

You can use a `leaf.Model` to replace strings between double brackets with values.
	
	var ReplacementsModel = new leaf.Model({
		"firstName": "John", 
		"lastName": "Doe"
	});
	
    leaf.ai.respond('some question', function(response, model) {
        console.log(ReplacementsModel.template(response));
    });
