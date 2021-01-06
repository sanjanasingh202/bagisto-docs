(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{523:function(t,e,s){"use strict";s.r(e);var a=s(28),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"create-a-store-theme"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-a-store-theme"}},[t._v("#")]),t._v(" Create a store theme")]),t._v(" "),s("p",[t._v("Please follow the steps mentioned below that how to create a custom theme in Bagisto.")]),t._v(" "),s("p",[t._v("Go to your project’s root directory and check for "),s("strong",[t._v("config")]),t._v(" folder."),s("br"),t._v("\nInside "),s("strong",[t._v("config")]),t._v(" folder, you will find a file called "),s("strong",[s("em",[t._v("themes.php")])]),t._v(" like directory below:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("    - app/\n    - bin/\n    - bootstrap/\n    - config/\n       - themes.php\n    - database/\n    - packages/Webkul\n")])])]),t._v(" "),s("p",[t._v("Check contents of "),s("strong",[s("em",[t._v("themes.php")])]),t._v(" file, it holds all necessary information of creating a custom theme.")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'default'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'default'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'themes'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'default'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'views_path'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'resources/themes/default/views'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'assets_path'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'public/themes/default/assets'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'name'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Default'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'bliss' => [")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     'views_path' => 'resources/themes/bliss/views',")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     'assets_path' => 'public/themes/bliss/assets',")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     'name' => 'Bliss',")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     'parent' => 'default'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),s("p",[t._v("Let’s go through the parameters of "),s("strong",[s("em",[t._v("themes.php")])]),t._v(" file. Because understanding those parameters will help you in creating a custom theme.")]),t._v(" "),s("h5",{attrs:{id:"an-explanation-for-these-parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#an-explanation-for-these-parameters"}},[t._v("#")]),t._v(" An Explanation For These Parameters:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("default: Declared at the top signifies the currently active or default theme in Bagisto. It is assigned with the value 'default’. The default(string) indicates the name of the currently active theme.")])]),t._v(" "),s("li",[s("p",[t._v("themes: This parameter is where you’ve to define all essentials for your own custom theme. Multiple themes can also be created and used at the same time in Bagisto.")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Inside 'themes’ there is another array by name 'default' which is your currently active theme containing some key-value pairs.")]),t._v(" "),s("ul",[s("li",[s("p",[s("b",[t._v("default:")]),t._v(" Inside array 'default', it holds few more key-value pairs. such as 'views_path', 'assets_path', 'name’ all those are explained below:")]),t._v(" "),s("ul",[s("li",[s("p",[s("b",[t._v("views_path:")]),t._v(" It’ll take the path of your views or blade files that you want to put up in your custom theme.")])]),t._v(" "),s("li",[s("p",[s("b",[t._v("assets_path:")]),t._v(" Responsible for your assets i.e. images, CSS and javascript files, etc.")])]),t._v(" "),s("li",[s("p",[s("b",[t._v("name:")]),t._v(" Defines a global name for your theme inside Bagisto.")])]),t._v(" "),s("li",[s("p",[s("b",[t._v("parent:")]),t._v(" This is a magic parameter that you can find in the commented code below the sub-array 'default'. Using            this parameter you can make use of existing themes inside Bagisto and just customize them even further. This        parameter will take the value of the 'name’ parameter listed in the 3rd point above.")])])])])])])])])]),t._v(" "),s("p",[t._v("Finally, define your own paths and name of your custom theme inside "),s("strong",[s("em",[t._v("themes.php")])]),t._v(" file, and start creating view files. Do not forget to cover all get routes of shop package having a parameter called 'view’. You can get route file of shop package located at "),s("code",[t._v("packages/Webkul/Shop/src/Http/routes.php")])]),t._v(" "),s("p",[t._v("Make sure the name of the blade file should be the same one as passed in this GET route file like this:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Store front header nav-menu fetch")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Route")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'/categories/{slug}'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Webkul\\Shop\\Http\\Controllers\\CategoryController@index'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("defaults")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'_config'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'view'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'shop::products.index'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'shop.categories.index'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),t._v(" "),s("p",[t._v("For all views check all GET routes as they hold a view parameter with the value of view to be used.")])])}),[],!1,null,null,null);e.default=n.exports}}]);