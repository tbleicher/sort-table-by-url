# Sortable Table

This is a small programming excercise to show the sorting of a table according
to the URL of the page.

It is entirely based on React. The data for the table is loaded as a JS module
into the code base. 

### Installation

To install a local copy clone the repo, then from within the repo's folder type

```
$ yarn install
$ yarn start
```

This will start the development server on port 3000 and the page will load in your web browser.


### Features

You can click on any of the column headers to sort the table by the
corresponding column. You can also try to enter a column header as URL like so:

```
localhost:3000/All%20Buildings
```

As you can see you have to encode space in the column names as `%20`. The capitalization does not matter, though.

 
