WEBPACK_RUNNING := $(shell pgrep -f webpack-dev-server)
SASS_RUNNING := $(shell pgrep -f sass)

size:
	NODE_ENV=prod webpack --json | analyze-bundle-size
dev:
ifndef SASS_RUNNING
	#due to a bug in sass, we must go to the scss directory to launch the command and have instant file updates detection (instead of ~20s )
	cd src/scss; sass --watch main.scss:css/main.css &
	cd ../..
endif
ifndef WEBPACK_RUNNING
	  NODE_ENV=demo webpack-dev-server -d --progress --colors 
endif

build: 
	modernizr -c modernizr-config.json
	sass src/scss/main.scss:css/main.css
	postcss --use autoprefixer --autoprefixer.browser "last 4 version" -o css/main.css css/main.css
	NODE_ENV=demo webpack -p

testunit:
	./node_modules/.bin/mocha --compilers js:babel-core/register

teste2e: dev 
	# phantomjs doesn't support vdom-parser (and slimerjs is not supported by mocha-casperjs...)
	# ./node_modules/.bin/mocha-casperjs test/e2e/*
	# ./node_modules/.bin/mocha-casperjs --engine=slimerjs test/e2e/*
	./node_modules/.bin/casperjs --engine=slimerjs test test/e2e/*

test:testunit teste2e
