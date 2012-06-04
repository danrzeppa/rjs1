({
	appDir:  "../website/",
	baseUrl: "./",
	dir:     "./output",
	optimize:"none",
	paths:   {
		"domReady":"shared/requirejs/domReady"
	},
	modules: [
		{
			name:   "index",
			include:["domReady"]
		}
	]
})
