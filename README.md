# L'Arbre Intégral

This repository hosts the source code of [L'Arbre Intégral](http://arbre-integral.net) website, a digital poem by Donatien Garnier.

Made with [Cycle.js](http://cyclejs.org) with a [Wordpress](http://wordpress.org) backend.

Note: The text of the poem is not available in this repository and has been replaced by random Shakespeare verses.
A demo of this amended version, whithout the worpress backend administration, is available here : https://mmai.github.io/poemaze/

## Poem architecture 

### Navigation in the poem

The poem is composed of 127 fragments and follows a binary tree structure. The reader starts at the poem root and choose one of its two childrens. At each node, he can navigate to one of its neighbors until there is no more fragment to read.
A fragment already red is not available anymore as a possible navigation choice, it is replaced by the next neighbor in the same direction.
Neighbors can be childrens, "brothers" (nodes at the same level), or a "parent" node (a parent, could in fact be a node on the opposite side if all ancestors of the current node have already been visited).
The final node is fixed and cannot be visited unless all other nodes have been visited.

### Map of the path

The path followed by the reader is graphically rendered on a map of the poem tree. A small version is always visible on the top right of the screen and is updated live. Clicking on this mini-map opens a panel with a larger map on wich is replayed the path evolution since the panel was last open.

When the reader is on a node of the third level, the map may rotate so that the current node is displayed on the upper half of the tree.

## Code structure

* `src` javascript sources of the main app, a Cycle.js single page application for exploring the poem and its visualizations.
* `www`  wordpress site 
* `www/wp-content/themes/arbre-integral/` custom theme where the Cycle.js single page application build is copied 
* `www/wp-content/plugins/arbre-integral/` custom plugin wich allows management of the poem contents and the generation of the final PDF documents. 

Poem contents are stored in the `www/arbreintegral.json` JSON file (`shakespeare.json` on the gh-pages branch). The file name is defined in the src/setting.xxx.js file.

## Credits

* Design : Franck Tallon
* HTML/CSS : [Mathieu Bué](https://github.com/twikito)
* SVG, Javascript & PHP development : [Henri Bourcereau](https://github.com/mmai)

