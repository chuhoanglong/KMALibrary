module.exports = {
    parser: "babel-eslint",
    extends: [
        "plugin:react-hooks/recommended",
        "babel-plugin-styled-components"
    ],
    plugins: [
        [
            "babel-plugin-styled-components",
            {
                "ssr": false
            }
        ],
        "react-hooks"
    ],
    rules: {
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn"
    }
};