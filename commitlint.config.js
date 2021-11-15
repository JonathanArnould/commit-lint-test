module.exports = {
    extends: [
        "@commitlint/config-conventional"
    ],
    // create custom commit-lint rules, for example add a "button" type (ex: "button(ui): .....")
    // more informations here: https://commitlint.js.org/#/reference-rules
    rules: {
        "type-enum": [2, "always", ["build", "chore", "ci", "docs", "feat", "fix", "perf", "refactor", "revert", "style", "test", "button"]],
    }
}