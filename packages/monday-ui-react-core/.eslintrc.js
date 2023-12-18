const mondayUiReactCoreSpecificRules = {
  "jsx-a11y/anchor-is-valid": ["error"],
  "jsx-a11y/no-static-element-interactions": "off",
  "jsx-a11y/alt-text": "error",
  "jsx-a11y/no-noninteractive-element-interactions": [
    "error",
    {
      required: {
        some: ["nesting", "id"]
      },
      handlers: ["onClick", "onMouseDown", "onMouseUp", "onKeyPress", "onKeyDown", "onKeyUp"]
    }
  ],
  "jsx-a11y/role-has-required-aria-props": "error",
  "jsx-a11y/click-events-have-key-events": "error",
  "jsx-a11y/label-has-associated-control": "off",
  "jsx-a11y/aria-activedescendant-has-tabindex": "error",
  "react/button-has-type": "error",
  "jsx-a11y/interactive-supports-focus": "error",
  "jsx-a11y/no-noninteractive-tabindex": "error",
  "lodash/import-scope": [2, "member"]
};
const mondayUiReactCoreSpecificPlugins = ["lodash", "jsx-a11y"];
const mondayUiReactCoreSpecificExtends = ["plugin:react-hooks/recommended"];

module.exports = {
  extends: ["../../.eslintrc.js", ...mondayUiReactCoreSpecificExtends],
  plugins: [...mondayUiReactCoreSpecificPlugins],
  rules: {
    ...mondayUiReactCoreSpecificRules
  }
};
