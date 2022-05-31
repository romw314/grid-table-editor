"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[517],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),u=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,g=p["".concat(d,".").concat(m)]||p[m]||s[m]||a;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=p;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6930:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return s}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),l=["components"],o={sidebar_position:1,title:"Editable Data Grid",description:"Learn to use the Editable Data Grid"},d="Edit Data in The Grid",u={unversionedId:"editing-data/editable-grid",id:"editing-data/editable-grid",title:"Editable Data Grid",description:"Learn to use the Editable Data Grid",source:"@site/docs/editing-data/010-editable-grid.md",sourceDirName:"editing-data",slug:"/editing-data/editable-grid",permalink:"/grid-table-editor/docs/editing-data/editable-grid",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Editable Data Grid",description:"Learn to use the Editable Data Grid"},sidebar:"tutorialSidebar",previous:{title:"Editing Data",permalink:"/grid-table-editor/docs/category/editing-data"},next:{title:"Import From File",permalink:"/grid-table-editor/docs/editing-data/import-from-file"}},c={},s=[{value:"Adding and Removing Rows",id:"adding-and-removing-rows",level:2},{value:"Adding and Removing Columns",id:"adding-and-removing-columns",level:2},{value:"Filtering Data",id:"filtering-data",level:2},{value:"Ordering Columns and Rows",id:"ordering-columns-and-rows",level:2},{value:"Clearing The Grid",id:"clearing-the-grid",level:2}],p={toc:s};function m(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"edit-data-in-the-grid"},"Edit Data in The Grid"),(0,a.kt)("p",null,"The main data grid is where you can edit the data."),(0,a.kt)("p",null,"Initially it is populated by scraping the summary instructions and adding them to the grid. This is just to show some data and help get started."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Edit data in any cell by double clicking on the cell.")),(0,a.kt)("p",null,'Data in the grid is not automatically converted to the text area data. To see the data in the grid formatted as per the tab title either"'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"click the ",(0,a.kt)("inlineCode",{parentName:"li"},"v Set Text From Grid v")," button"),(0,a.kt)("li",{parentName:"ul"},"select a new format tab")),(0,a.kt)("h2",{id:"adding-and-removing-rows"},"Adding and Removing Rows"),(0,a.kt)("p",null,"The buttons above the grid allow you to edit the rows."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add Row - adds a row at the bottom of the grid")),(0,a.kt)("p",null,"If you have selected one or more rows then you can:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add Rows Above"),(0,a.kt)("li",{parentName:"ul"},"Add Rows Below"),(0,a.kt)("li",{parentName:"ul"},"Delete Selected Rows")),(0,a.kt)("h2",{id:"adding-and-removing-columns"},"Adding and Removing Columns"),(0,a.kt)("p",null,"Each column has a set of buttons in the header."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[<+]")," will add a new column to the left of this column"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[~]")," allows you to rename the column"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[x]")," allows you to delete the column"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[+=]")," allows you to duplicate the column"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[+>]")," will add a new column to the right of this column")),(0,a.kt)("h2",{id:"filtering-data"},"Filtering Data"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Filter:")," text area above the grid can be used to globally search and filter the data in the grid."),(0,a.kt)("p",null,"Any text entered here will be matched in the grid an only rows that have the entered text will be shown."),(0,a.kt)("p",null,"Pressing the ",(0,a.kt)("inlineCode",{parentName:"p"},"[Clear Filter]")," button will clear the global filter."),(0,a.kt)("p",null,"Each column can be filtered by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"filter")," symbol to show a filter menu for the column."),(0,a.kt)("h2",{id:"ordering-columns-and-rows"},"Ordering Columns and Rows"),(0,a.kt)("p",null,"You can drag and drop both rows and columns to re-order them."),(0,a.kt)("h2",{id:"clearing-the-grid"},"Clearing The Grid"),(0,a.kt)("p",null,"All data in the grid can be deleted by pressing the ",(0,a.kt)("inlineCode",{parentName:"p"},"[Reset Table]")," button."))}m.isMDXComponent=!0}}]);