BIN = node_modules/.bin

s:
	open out/index.html
	$(BIN)/jade src/index.jade -o out/ -w