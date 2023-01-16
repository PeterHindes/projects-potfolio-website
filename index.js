var express = require('express');
var fs = require('fs');
var marked = require('marked');

const port = 3000;
var app = express();

// serve static files
app.use(express.static(__dirname + '/public'));

// serve rendered html generated from markdown files
// root/markdown/filename(without extension) is the html rendered version
// root/markdown/filename.md is the markdown file unrendered
app.get('/markdown/:file', function(req, res) {
	var file = req.params.file;
	var renderer = new marked.Renderer();
	var markdown = fs.readFileSync(__dirname + '/public/markdown/' + file + '.md', 'utf8');
	var html = marked(markdown, { renderer: renderer });
	res.send(html);
});

// get the first title and first image from the markdown file
app.get('/markdown-highlights/:file', function(req, res) {
	// Get the content of the markdown file
	var file = req.params.file;
	var markdown = fs.readFileSync(__dirname + '/public/markdown/' + file + '.md', 'utf8');
	// Get the first image in the markdown file
	var imgSerch = "<img src=";
	var imgposition = markdown.search(imgSerch);
	var img = markdown.substring(imgposition, markdown.search(">", imgposition));
	// remove everyting arround the src attribute
	img = img.substring(img.search("src=") + 5, img.search("\" "));
	// Get the title of the project
	var titleposition = markdown.search("# ");
	var title = markdown.substring(titleposition+2, markdown.search("\n", titleposition));
	console.log(img);
	console.log(title);

	// turn the title and image url into a json object
	var json = {
		"title": title,
		"img": img
	};
	res.send(JSON.stringify(json));
});

// generate index.html from all the markdown files
app.get('/', function(req, res) {
	var files = fs.readdirSync(__dirname + '/public/markdown');
	var html = '<html><head><title>Peters Projects</title><link rel="stylesheet" href="main.css"></link><script src="main.js"></script></head><body><ul style="width: 100%; list-style: none;padding: 0; margin: 0; border: 0;">';
	for (var i = 0; i < files.length; i++) {
		var file = files[i];
		var name = file.substring(0, file.length - 3); // only works with .md files
		console.log(name);
		html += '<li><iframe src="/markdown/' + name + '" class="project-card" onclick="toggleActive()"></iframe></li>';
	}
	html += '</ul></body></html>';
	console.log(html);
	res.send(html);
});

// start the server
var server = app.listen(port, function() {
	var host = server.address().address;
	console.log('Example app listening on %s', port);
});