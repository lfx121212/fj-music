module.exports={
    root: true, // // 告诉eslint找当前配置文件不能往父级查找
    env: { // 全局环境
        browser: true,
        es2021: true, // 例子：这样设置之后，就支持新的 ES6 全局变量和类型
        node: true, // 例子：这样设置之后，就支持新的 node 全局变量和类型
        // 添加
        jquery: true
    },
    parserOptions: {  // 优先级低于parse的语法解析配置
        ecmaVersion: 2020, // 允许使用ES语法
        sourceType: 'module', // 允许使用import
    },
    extends: [ // 让 ESlint 添加规则模块
        "eslint:recommended", // 启用 ESLint 核心规则，这些规则报告一些常见问题。
        "plugin:vue/essential", // 例子：让 ESlint 能检查vue相关代码语法
    ],
    plugins: [], // 使用第三方插件检查规则
    rules: { // 规则，手动自定义代码规范
        "generator-star-spacing": "off",
        "no-tabs":"off",
        "no-console":"off",
        "no-irregular-whitespace":"off",
        "no-debugger": "off",
        "vue/multi-word-component-names": 0,
        "@typescript-eslint/no-unused-vars": ["off"],
        "@typescript-eslint/no-explicit-any": ["off"],
        'no-undef': 0,
        "vue/no-multiple-template-root": "off",
        "vue/no-unused-components": "off", // 当存在定义而未使用的组件时，关闭报错
        "no-unused-vars":"off" // 当存在定义而未使用的变量时，关闭报错
    },
    globals: { // 全局变量
       // false、readable、readonly 这 3 个是等价的，表示变量只可读不可写
       // true、writeable、writable 这 3 个是等价的，表示变量可读可写；
    }
}
