// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    // 'generator-star-spacing': 'off',
    // // allow debugger during development
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' :
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0, // 生成器函数*的前后空格
    "default-case": 2,
    "camelcase": 0,//强制驼峰法命名
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'semi': [0, 'always'],//分号
    // 'indent':0
    "space-before-blocks": [1, "always"], //代码块前的空格
    "space-before-function-paren": [1, "always"],//函数定义时，function关键字后面的小括号前是否需要加空格
    "quotes": [0, "always"],
    "comma-dangle": [1, "never"],
    "no-return-assign": [0, 'never'],//return 语句中不能有赋值表达式
    "no-sequences": [0, 'never'] //禁止使用逗号运算符
  }
}
