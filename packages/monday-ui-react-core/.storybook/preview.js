import { addParameters } from "@storybook/react";
import { DocsContainer, DocsPage } from "@storybook/addon-docs";
import { withPerformance } from "storybook-addon-performance";
import "monday-ui-style/dist/index.min.css";
import { ComponentNameDecorator, RelatedComponentsDecorator } from "../src/storybook";
import {
  AnchorListItem,
  AlphaWarning,
  ComponentRules,
  DocFooter,
  Frame,
  FunctionArgument,
  FunctionArguments,
  Link,
  MultipleStoryElementsWrapper,
  Paragraph,
  SectionName,
  Tip,
  Title,
  UnstyledList,
  UnstyledListItem,
  UsageGuidelines,
  withMemoryStats
} from "vibe-storybook-components";
import "vibe-storybook-components/index.css";

addParameters({
  controls: {
    expanded: true,
    sort: "requiredFirst"
  },
  docs: {
    inlineStories: true,
    container: ({ children, context }) => (
      <DocsContainer context={context}>
        {children}
        {<DocFooter feedbackFormLink="https://forms.monday.com/forms/213ebddcb0d423ae5b6178fb6e8f7b3d?r=use1" />}
      </DocsContainer>
    ),
    page: DocsPage,
    components: {
      h1: ComponentNameDecorator,
      h2: SectionName,
      h3: Title,
      li: AnchorListItem,
      p: Paragraph,
      AlphaWarning,
      Tip,
      Link,
      ComponentName: ComponentNameDecorator,
      ComponentRules,
      UsageGuidelines,
      FunctionArguments,
      FunctionArgument,
      RelatedComponents: RelatedComponentsDecorator,
      Frame,
      UnstyledList,
      UnstyledListItem
    }
  },
  viewMode: "docs",
  previewTabs: {
    "storybook/docs/panel": {
      index: -1
    },
    canvas: { title: "Sandbox" }
  },
  themes: {
    default: "Light",
    list: [
      { name: "Light", class: "light-app-theme", color: "#ffffff" },
      { name: "Dark", class: "dark-app-theme", color: "#1C1F3B" },
      { name: "Black", class: "black-app-theme", color: "#111111" }
    ]
  },
  options: {
    storySort: {
      order: [
        "Welcome",
        "Catalog",
        "Change Log",
        "Foundations",
        "Buttons",
        "Inputs",
        "Data display",
        "Media",
        "Popover",
        "Pickers",
        "*",
        "Accessibility",
        "Hooks"
      ]
    }
  }
});

export const globalTypes = {
  memoryStats: {
    name: "Memory Stats",
    description: "Add Memory Stat tracker",
    defaultValue: "no",
    toolbar: {
      icon: "memory",
      items: [
        { value: "no", right: "🚫", title: "Hide Memory Stat" },
        { value: "yes", right: "✅", title: "Show Memory Stat" }
      ]
    }
  }
};

export const decorators = [
  withPerformance,
  (Story, { className }) => {
    return (
      <MultipleStoryElementsWrapper className={className}>
        <Story />
      </MultipleStoryElementsWrapper>
    );
  },
  withMemoryStats
];
