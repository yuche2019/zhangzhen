(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{689:function(s,n,a){"use strict";a.r(n);var e=a(41),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"typescript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typescript"}},[s._v("#")]),s._v(" TypeScript")]),s._v(" "),a("p",[s._v("https://ts.xcatliu.com/introduction/hello-typescript")]),s._v(" "),a("h4",{attrs:{id:"tsconfig-json-官方中文版"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tsconfig-json-官方中文版"}},[s._v("#")]),s._v(" tsconfig.json（官方中文版）")]),s._v(" "),a("p",[s._v("https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/tsconfig.json.html")]),s._v(" "),a("h4",{attrs:{id:"vscode-中配置保存-ts文件自动编译成-js文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vscode-中配置保存-ts文件自动编译成-js文件"}},[s._v("#")]),s._v(" Vscode 中配置保存*.ts文件自动编译成 *.js文件")]),s._v(" "),a("p",[s._v("前提是已安装ts")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("npm i -g typescript\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("第一步，创建tsconfig.json文件")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("tsc -init\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("第二步，修改tsconfig.json文件")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('{\n  "compilerOptions": {\n   "target": "es5",\n   "noImplicitAny": false,\n   "module": "amd",\n   "removeComments": false,\n   "sourceMap": false,\n   "outDir": "js"//你要生成js的目录\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("第三步，进入该目录，按下ctrl+shift+B进行编译，初次编译会选择编译模式。监视模式：每当TS文件有变动就会自动编译。构建模式：手动命令编译时才会去编译。")]),s._v(" "),a("h2",{attrs:{id:"基础"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础"}},[s._v("#")]),s._v(" 基础")]),s._v(" "),a("h3",{attrs:{id:"原始数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原始数据类型"}},[s._v("#")]),s._v(" 原始数据类型")]),s._v(" "),a("p",[a("strong",[s._v("布尔值：boolean")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("let isDone: boolean = false;\n\nlet createdByBoolean: boolean = Boolean(1);\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("strong",[s._v("数值：number")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("let decLiteral: number = 6;\nlet hexLiteral: number = 0xf00d;\n// ES6 中的二进制表示法\nlet binaryLiteral: number = 0b1010;\n// ES6 中的八进制表示法\nlet octalLiteral: number = 0o744;\nlet notANumber: number = NaN;\nlet infinityNumber: number = Infinity;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[a("strong",[s._v("字符串：string")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("let myName: string = 'Tom';\nlet myAge: number = 25;\n\n// 模板字符串\nlet sentence: string = `Hello, my name is ${myName}.\nI'll be ${myAge + 1} years old next month.`;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("blockquote",[a("p",[s._v("其中 ```用来定义 "),a("a",{attrs:{href:"http://es6.ruanyifeng.com/#docs/string#%E6%A8%A1%E6%9D%BF%E5%AD%97%E7%AC%A6%E4%B8%B2",target:"_blank",rel:"noopener noreferrer"}},[s._v("ES6 中的模板字符串"),a("OutboundLink")],1),s._v("，"),a("code",[s._v("${expr}")]),s._v("用来在模板字符串中嵌入表达式。")])]),s._v(" "),a("p",[a("strong",[s._v("空值：void")])]),s._v(" "),a("blockquote",[a("p",[s._v("JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 "),a("code",[s._v("void")]),s._v("表示没有任何返回值的函数：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("function alertName(): void {\n    alert('My name is Tom');\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("strong",[s._v("Null和Undefined：使用null 和 undefined 来定义")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("let u: undefined = undefined;\nlet n: null = null;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("blockquote",[a("p",[s._v("与 "),a("code",[s._v("void")]),s._v("的区别是，"),a("code",[s._v("undefined")]),s._v("和 "),a("code",[s._v("null")]),s._v("是所有类型的子类型。也就是说 "),a("code",[s._v("undefined")]),s._v("类型的变量，可以赋值给 "),a("code",[s._v("number")]),s._v("类型的变量：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// 这样不会报错\nlet num: number = undefined;\n\n// 这样也不会报错\nlet u: undefined;\nlet num: number = u;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("blockquote",[a("p",[s._v("而 "),a("code",[s._v("void")]),s._v("类型的变量不能赋值给 "),a("code",[s._v("number")]),s._v("类型的变量：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("let u: void;\nlet num: number = u;\n\n// Type 'void' is not assignable to type 'number'.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"任意值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#任意值"}},[s._v("#")]),s._v(" 任意值")]),s._v(" "),a("blockquote",[a("p",[s._v("任意值（any）用来表示允许赋值为任意类型")])]),s._v(" "),a("p",[s._v("普通类型在声明之后是不允许再改变类型的，任意值类型则允许。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("let myFavoriteNumber: string = 'seven';\nmyFavoriteNumber = 7;\n\n// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.\n\nlet myFavoriteNumber: any = 'seven';\nmyFavoriteNumber = 7;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("未指定类型的变量会被识别为任意值类型")]),s._v(" "),a("h3",{attrs:{id:"类型推论"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型推论"}},[s._v("#")]),s._v(" 类型推论")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("let myFavoriteNumber = 'seven';\nmyFavoriteNumber = 7;\n\n// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("按顺序优先考虑")]),s._v(" "),a("h3",{attrs:{id:"联合类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#联合类型"}},[s._v("#")]),s._v(" 联合类型")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("let myFavoriteNumber: string | number;\nmyFavoriteNumber = 'seven';\nmyFavoriteNumber = 7;\n\nlet myFavoriteNumber: string | number;\nmyFavoriteNumber = true;\n\n// index.ts(2,1): error TS2322: Type 'boolean' is not assignable to type 'string | number'.\n//   Type 'boolean' is not assignable to type 'number'.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("blockquote",[a("p",[s._v("联合类型使用 "),a("code",[s._v("|")]),s._v("分隔每个类型。")]),s._v(" "),a("p",[s._v("这里的 "),a("code",[s._v("let myFavoriteNumber: string | number")]),s._v("的含义是，允许 "),a("code",[s._v("myFavoriteNumber")]),s._v("的类型是 "),a("code",[s._v("string")]),s._v("或者 "),a("code",[s._v("number")]),s._v("，但是不能是其他类型。")]),s._v(" "),a("p",[s._v("当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们"),a("strong",[s._v("只能访问此联合类型的所有类型里共有的属性或方法")])])]),s._v(" "),a("h3",{attrs:{id:"对象的类型-接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对象的类型-接口"}},[s._v("#")]),s._v(" 对象的类型--接口")]),s._v(" "),a("blockquote",[a("p",[s._v("使用接口（interfaces）来定义对象的类型")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("interface Person {\n    name: string;\n    age: number;\n}\n\nlet tom: Person = {\n    name: 'Tom',\n    age: 25\n};\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("blockquote",[a("p",[s._v("赋值的时候，变量的形状必须和接口的形状保持一致，不能添加属性，也不能减少属性。")])]),s._v(" "),a("p",[a("strong",[s._v("可选属性：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("interface Person {\n    name: string;\n    age?: number;\n}\n\nlet tom: Person = {\n    name: 'Tom'\n};\n\n// age可有也可无\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[a("strong",[s._v("任意属性：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("interface Person {\n    name: string;\n    age?: number;\n    [propName: string]: any;\n}\n\nlet tom: Person = {\n    name: 'Tom',\n    gender: 'male'\n};\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("blockquote",[a("p",[s._v("使用 "),a("code",[s._v("[propName: string]")]),s._v("定义了任意属性取 "),a("code",[s._v("string")]),s._v("类型的值。")]),s._v(" "),a("p",[s._v("需要注意的是，"),a("strong",[s._v("一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集")])])]),s._v(" "),a("p",[a("strong",[s._v("只读属性：readonly")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("interface Person {\n    readonly id: number;\n    name: string;\n    age?: number;\n    [propName: string]: any;\n}\n\nlet tom: Person = {\n    id: 89757,\n    name: 'Tom',\n    gender: 'male'\n};\n\ntom.id = 9527;\n\n// index.ts(14,5): error TS2540: Cannot assign to 'id' because it is a constant or a read-only property.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("blockquote",[a("p",[s._v("上例中，使用 "),a("code",[s._v("readonly")]),s._v("定义的属性 "),a("code",[s._v("id")]),s._v("初始化后，又被赋值了，所以报错了。")]),s._v(" "),a("p",[a("strong",[s._v("注意，只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候")])])]),s._v(" "),a("h3",{attrs:{id:"数组的类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数组的类型"}},[s._v("#")]),s._v(" 数组的类型")]),s._v(" "),a("p",[a("strong",[s._v("类型 + 方括号 表示")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("let fibonacci: number[] = [1, 1, 2, 3, 5];\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("blockquote",[a("p",[s._v("数组的项中"),a("strong",[s._v("不允许")]),s._v("出现其他的类型：")]),s._v(" "),a("p",[s._v("数组的一些方法的参数也会根据数组在定义时约定的类型进行限制")])]),s._v(" "),a("p",[a("strong",[s._v("数组泛型")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("let fibonacci: Array<number> = [1, 1, 2, 3, 5];\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("用接口表示数组")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("interface NumberArray {\n    [index: number]: number;\n}\nlet fibonacci: NumberArray = [1, 1, 2, 3, 5];\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[a("strong",[s._v("类数组")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("function sum() {\n    let args: IArguments = arguments;\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("blockquote",[a("p",[s._v("其中 "),a("code",[s._v("IArguments")]),s._v("是 TypeScript 中定义好了的类型，它实际上就是：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("interface IArguments {\n    [index: number]: any;\n    length: number;\n    callee: Function;\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[a("strong",[s._v("any在数组中的应用")])]),s._v(" "),a("blockquote",[a("p",[s._v("一个比较常见的做法是，用 "),a("code",[s._v("any")]),s._v("表示数组中允许出现任意类型：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("let list: any[] = ['xcatliu', 25, { website: 'http://xcatliu.com' }];\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"函数的类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数的类型"}},[s._v("#")]),s._v(" 函数的类型")]),s._v(" "),a("h4",{attrs:{id:"函数声明-声明式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数声明-声明式"}},[s._v("#")]),s._v(" 函数声明（声明式）")]),s._v(" "),a("blockquote",[a("p",[s._v("一个函数有输入和输出，要在ts中对其进行约束，需要把输入和输出都考虑到")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("function sum(x: number, y: number): number {\n    return x + y;\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("blockquote",[a("p",[s._v("输入多余或少于要求的参数，是不被允许的")])]),s._v(" "),a("h4",{attrs:{id:"函数表达式-匿名函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数表达式-匿名函数"}},[s._v("#")]),s._v(" 函数表达式（匿名函数）")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("let mySum: (x: number, y: number) => number = function (x: number, y: number): number {\n    return x + y;\n};\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("blockquote",[a("p",[s._v("注意这里的"),a("code",[s._v("=>")]),s._v("是TypeScript中的，不是es6的。表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。")])]),s._v(" "),a("p",[a("strong",[s._v("用接口定义函数的形状")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("interface SearchFunc {\n    (source: string, subString: string): boolean;\n}\n\nlet mySearch: SearchFunc;\nmySearch = function(source: string, subString: string) {\n    return source.search(subString) !== -1;\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[a("strong",[s._v("可选参数：使用"),a("code",[s._v("？")])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("function buildName(firstName: string, lastName?: string) {\n    if (lastName) {\n        return firstName + ' ' + lastName;\n    } else {\n        return firstName;\n    }\n}\nlet tomcat = buildName('Tom', 'Cat');\nlet tom = buildName('Tom');\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("blockquote",[a("p",[s._v("需要注意的是，可选参数必须接在必需参数后面。换句话说，"),a("strong",[s._v("可选参数后面不允许再出现必需参数了")])])]),s._v(" "),a("p",[a("strong",[s._v("参数默认值：TS会将添加了默认值的参数识别为可选参数")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("function buildName(firstName: string, lastName: string = 'Cat') {\n    return firstName + ' ' + lastName;\n}\nlet tomcat = buildName('Tom', 'Cat');\nlet tom = buildName('Tom');\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"类型断言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型断言"}},[s._v("#")]),s._v(" 类型断言")]),s._v(" "),a("blockquote",[a("p",[s._v("将一个联合类型的变量指定为一个更加具体的类型，在需要断言的变量前加上"),a("code",[s._v("<type>")]),s._v("即可。类型断言必须是联合类型内的。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("function getLength(something: string | number): number {\n    if ((<string>something).length) {\n        return (<string>something).length;\n    } else {\n        return something.toString().length;\n    }\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"声明文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#声明文件"}},[s._v("#")]),s._v(" 声明文件")]),s._v(" "),a("p",[a("strong",[s._v("声明语句：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// 全局声明jQuery\ndeclare var jQuery: (selector: string) => any;\n\njQuery('#foo');\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[a("strong",[s._v("声明文件")])]),s._v(" "),a("blockquote",[a("p",[s._v("通常会把声明语句放到一个单独的文件（jQuery.d.ts）中，这就是声明文件。声明文件必须以"),a("code",[s._v(".d.ts")]),s._v("为后缀")])]),s._v(" "),a("p",[a("strong",[s._v("第三方声明文件")])]),s._v(" "),a("blockquote",[a("p",[s._v("使用@types管理，以jQuery为例")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("npm install @types/jquery --save-dev\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"内置对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内置对象"}},[s._v("#")]),s._v(" 内置对象")]),s._v(" "),a("p",[a("strong",[s._v("ECMAScript的内置对象")])]),s._v(" "),a("blockquote",[a("p",[a("code",[s._v("Boolean")]),s._v("、"),a("code",[s._v("Error")]),s._v("、"),a("code",[s._v("Date")]),s._v("、"),a("code",[s._v("RegExp")]),s._v("等。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("let b: Boolean = new Boolean(1);\nlet e: Error = new Error('Error occurred');\nlet d: Date = new Date();\nlet r: RegExp = /[a-z]/;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[a("strong",[s._v("DOM和BOM的内置对象")])]),s._v(" "),a("blockquote",[a("p",[a("code",[s._v("Document")]),s._v("、"),a("code",[s._v("HTMLElement")]),s._v("、"),a("code",[s._v("Event")]),s._v("、"),a("code",[s._v("NodeList")]),s._v("等。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("let body: HTMLElement = document.body;\nlet allDiv: NodeList = document.querySelectorAll('div');\ndocument.addEventListener('click', function(e: MouseEvent) {\n  // Do something\n});\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"进阶"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进阶"}},[s._v("#")]),s._v(" 进阶")]),s._v(" "),a("h3",{attrs:{id:"类型别名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型别名"}},[s._v("#")]),s._v(" 类型别名")]),s._v(" "),a("p",[s._v("通过type修改类型的别名：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("type Name = string;\ntype NameResolver = () => string;\ntype NameOrResolver = Name | NameResolver;\nfunction getName(n: NameOrResolver): Name {\n    if (typeof n === 'string') {\n        return n;\n    } else {\n        return n();\n    }\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("blockquote",[a("p",[s._v("enum 用来枚举，同时也会将枚举值和枚举名进行反向映射")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};\n\nconsole.log(Days["Sun"] === 0); // true\nconsole.log(Days["Mon"] === 1); // true\nconsole.log(Days["Tue"] === 2); // true\nconsole.log(Days["Sat"] === 6); // true\n\nconsole.log(Days[0] === "Sun"); // true\nconsole.log(Days[1] === "Mon"); // true\nconsole.log(Days[2] === "Tue"); // true\nconsole.log(Days[6] === "Sat"); // true\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h3",{attrs:{id:"类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类"}},[s._v("#")]),s._v(" 类")]),s._v(" "),a("h4",{attrs:{id:"实例属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实例属性"}},[s._v("#")]),s._v(" 实例属性")]),s._v(" "),a("blockquote",[a("p",[s._v("ES6 中实例的属性只能通过构造函数中的 "),a("code",[s._v("this.xxx")]),s._v("来定义，ES7 提案中可以直接在类里面定义：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("class Animal {\n    name = 'Jack';\n\n    constructor() {\n        // ...\n    }\n}\n\nlet a = new Animal();\nconsole.log(a.name); // Jack\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h4",{attrs:{id:"静态属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#静态属性"}},[s._v("#")]),s._v(" 静态属性")]),s._v(" "),a("blockquote",[a("p",[s._v("使用 "),a("code",[s._v("static")]),s._v("修饰符修饰的方法称为静态方法（静态属性同理），它们不需要实例化，而是直接通过类来调用：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("class Animal {\n    static num = 42;\n\n    constructor() {\n        // ...\n    }\n}\n\nconsole.log(Animal.num); // 42\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h4",{attrs:{id:"ts中类的用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ts中类的用法"}},[s._v("#")]),s._v(" TS中类的用法")]),s._v(" "),a("p",[s._v("https://ts.xcatliu.com/advanced/class#public-private-he-protected")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("public")]),s._v("修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 "),a("code",[s._v("public")]),s._v("的")]),s._v(" "),a("li",[a("code",[s._v("private")]),s._v("修饰的属性或方法是私有的，不能在声明它的类的外部访问")]),s._v(" "),a("li",[a("code",[s._v("protected")]),s._v("修饰的属性或方法是受保护的，它和 "),a("code",[s._v("private")]),s._v("类似，区别是它在子类中也是允许被访问的")])]),s._v(" "),a("p",[a("strong",[s._v("readonly")])]),s._v(" "),a("blockquote",[a("p",[s._v("只读属性关键字，只允许出现在属性声明或索引签名中，如果"),a("code",[s._v("readonly")]),s._v("和其他访问修饰符同时存在的话，需要写在其后面。")])]),s._v(" "),a("p",[a("strong",[s._v("抽象类")])]),s._v(" "),a("blockquote",[a("p",[a("code",[s._v("abstract")]),s._v("用于定义抽象类和其中的抽象方法")])]),s._v(" "),a("p",[s._v("首先，抽象类是不允许被实例化的：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("abstract class Animal {\n    public name;\n    public constructor(name) {\n        this.name = name;\n    }\n    public abstract sayHi();\n}\n\nlet a = new Animal('Jack');\n\n// index.ts(9,11): error TS2511: Cannot create an instance of the abstract class 'Animal'.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("其次，抽象类中的抽象方法必须被子类实现：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("abstract class Animal {\n    public name;\n    public constructor(name) {\n        this.name = name;\n    }\n    public abstract sayHi();\n}\n\nclass Cat extends Animal {\n    public sayHi() {\n        console.log(`Meow, My name is ${this.name}`);\n    }\n}\n\nlet cat = new Cat('Tom');\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("h3",{attrs:{id:"类与接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类与接口"}},[s._v("#")]),s._v(" 类与接口")]),s._v(" "),a("p",[a("strong",[s._v("类实现接口")])]),s._v(" "),a("blockquote",[a("p",[s._v("使用"),a("code",[s._v("implements")]),s._v("关键字实现")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("interface Alarm {\n    alert();\n}\n\ninterface Light {\n    lightOn();\n    lightOff();\n}\n\nclass Car implements Alarm, Light {\n    alert() {\n        console.log('Car alert');\n    }\n    lightOn() {\n        console.log('Car light on');\n    }\n    lightOff() {\n        console.log('Car light off');\n    }\n}\n// 注意：在类中调用接口，必须把类中定义的所有方法都调用\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("h3",{attrs:{id:"泛型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#泛型"}},[s._v("#")]),s._v(" 泛型")]),s._v(" "),a("blockquote",[a("p",[s._v("在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("function createArray<T>(length: number, value: T): Array<T> {\n    let result: T[] = [];\n    for (let i = 0; i < length; i++) {\n        result[i] = value;\n    }\n    return result;\n}\n\ncreateArray(3, 'x'); // ['x', 'x', 'x']\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h2",{attrs:{id:"代码检查"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码检查"}},[s._v("#")]),s._v(" 代码检查")]),s._v(" "),a("p",[s._v("代码检查：发现代码错误，统一代码风格")])])}),[],!1,null,null,null);n.default=t.exports}}]);