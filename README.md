# Data Grid Table Editor and Data Generator

A simple Data Table Editor that generates Markdown, CSV or JSON. It can also be used to interchange data between the formats, supporting editing in the grid.

- Grid interface
- drag and drop rows to re-order
- drag and drop columns to re-order
- import csv from file
- import csv, markdown, and json from editor
- generate csv, markdown, json and javascript from grid
- export csv, markdown and json files
- add and delete columns
- add and delete rows
- randomly fill data with Test Data


---

## Use The Editor

- [Use on gitPages](https://eviltester.github.io/grid-table-editor/)
- [Edit on StackBlitz ⚡️](https://stackblitz.com/edit/grid-table-editor)
- Or clone and run locally by opening index.html in a browser

## To Generate Test Data

Expand the "> Test Data" section.

Enter a spec.

The spec is a paragraph of text where each line is either a 'name' or a 'rule':

```
name
rule
name
rule
```

- `name` will be used as a column name
- `rule` will be used to generate the data

A `rule` can be a regex string e.g. 

- `(connie|bob)` which would generate 'connie' or 'bob'
- `[1-9][0-9]{0,4}` which would generate number between 1 and 99999

A `rule` can also be a faker API call.

Faker API can be found here: http://marak.github.io/faker.js/

e.g.

- `faker.name.firstName`
- `faker.hacker.noun`

The `fake` method is also supporter, which takes a mustache template style string combining api methods e.g.

- `faker.fake {{name.lastName}}, {{name.firstName}}`

So a sample test data spec might look like:

```
name
faker.fake {{name.lastName}}, {{name.firstName}}
desc
faker.lorem.paragraph
collects
faker.hacker.noun
prefers
(Connie|Bob)
```

## Similar Apps

Looking for similar apps to compare features sets and functionality?

- https://truben.no/table/
- https://www.tablesgenerator.com/markdown_table
- https://tableconvert.com/
- atom plugin https://atom.io/packages/markdown-table-editor
- https://jakebathman.github.io/Markdown-Table-Generator/
- https://susisu.github.io/mte-demo/
- https://tabletomarkdown.com/
- https://www.convertcsv.com/csv-to-markdown.htm

For Test Data Generation, you might want to look at:

- https://www.mockaroo.com/

## References

- [Markdown Tables Extended Syntax](https://www.markdownguide.org/extended-syntax/#tables)

## Libraries Used

- [Faker.js](http://marak.github.io/faker.js) for domain api
    - http://marak.github.io/faker.js
- [RandExp.js](http://fent.github.io/randexp.js/) for regular expression based random data generation
    - http://fent.github.io/randexp.js/
- [AG Grid](https://ag-grid.com) for the data table
- [PapaParse](https://www.papaparse.com/) for csv processing