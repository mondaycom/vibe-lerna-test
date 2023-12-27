import React from "react";
import { Preview } from "@storybook/react";
import isChromatic from "chromatic/isChromatic";
import { DocsContainer, DocsPage, Unstyled } from "@storybook/blocks";
import { withThemeByClassName } from "@storybook/addon-themes";
import {
  AnchorListItem,
  AlphaWarning,
  DeprecatedWarning,
  ComponentRules,
  DocFooter,
  Frame,
  FunctionArgument,
  FunctionArguments,
  Link,
  Paragraph,
  SectionName,
  Tip,
  Title,
  UnstyledList,
  UnstyledListItem,
  UsageGuidelines,
  withMemoryStats,
  RelatedComponent,
  MultipleStoryElementsWrapper,
  StorybookLink,
} from "vibe-storybook-components";
import { ComponentNameDecorator, PropsTable, RelatedComponentsDecorator } from "../src/storybook";
import "monday-ui-style/dist/index.min.css";
import "vibe-storybook-components/dist/index.css";

const fontLoader = async () => ({
  fonts: await document.fonts.ready, // Fixing Chromatic tests flakiness - taking snapshots after fonts are loaded
});

const preview: Preview = {
  parameters: {
    controls: {
      sort: "alpha",
    },
    docs: {
      container: ({ children, context }: { children: any; context: any }) => (
        <DocsContainer context={context}>
          <Unstyled>
            {children}
            {<DocFooter feedbackFormLink="https://forms.monday.com/forms/213ebddcb0d423ae5b6178fb6e8f7b3d?r=use1" />}
          </Unstyled>
        </DocsContainer>
      ),
      page: DocsPage,
      components: {
        Controls: PropsTable,
        PropsTable,
        h1: ComponentNameDecorator,
        ComponentName: ComponentNameDecorator,
        h2: SectionName,
        h3: Title,
        li: AnchorListItem,
        p: Paragraph,
        AlphaWarning,
        DeprecatedWarning,
        SectionName,
        Link,
        ComponentRules,
        UsageGuidelines,
        FunctionArguments,
        FunctionArgument,
        RelatedComponent,
        RelatedComponents: RelatedComponentsDecorator,
        Frame,
        StorybookLink,
        Tip,
        UnstyledList,
        UnstyledListItem,
      },
    },
    options: {
      storySort: {
        order: [
          "Welcome",
          "Catalog",
          "Change Log",
          "Typography Migration Guide",
          "Foundations",
          "Buttons",
          "Inputs",
          "Data display",
          "Media",
          "Popover",
          "Pickers",
          "*",
          "Accessibility",
          "Hooks",
        ],
      },
    },
  },
  decorators: [
    (Story, { className }: { className: string }) => {
      return (
        <MultipleStoryElementsWrapper className={className}>
          <Story />
        </MultipleStoryElementsWrapper>
      );
    },
    withMemoryStats,
    // Should always be the last decorator (stories hooks issues otherwise) - bug in the addon
    withThemeByClassName({
      themes: {
        Light: "light-app-theme",
        Dark: "dark-app-theme",
        Black: "black-app-theme",
      },
      defaultTheme: "Light",
    }),
  ],
  globalTypes: {
    memoryStats: {
      name: "Memory Stats",
      description: "Add Memory Stat tracker",
      defaultValue: "no",
      toolbar: {
        icon: "memory",
        items: [
          { value: "no", right: "🚫", title: "Hide Memory Stat" },
          { value: "yes", right: "✅", title: "Show Memory Stat" },
        ],
      },
    },
  },
  loaders: isChromatic() && document.fonts ? [fontLoader] : [],
};

export default preview;
