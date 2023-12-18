import { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import SplitButton from "../../../../components/SplitButton/SplitButton";

export const SplitButtonDescription = () => {
  const component = useMemo(() => <SplitButton>Button</SplitButton>, []);
  return (
    <RelatedComponent
      component={component}
      title="SplitButton"
      href="/?path=/docs/buttons-splitbutton--docs"
      description="Dual-function menu button offers a default action and a secondary action"
    />
  );
};
