import React, { FC, useLayoutEffect, useRef } from "react";
import cx from "classnames";
import styles from "./HiddenInputPlaceholder.module.scss";

interface HiddenInputPlaceholderProps {
  className?: string;
  value: string;
  onChange: (width: number) => void;
}

const HiddenInputPlaceholder: FC<HiddenInputPlaceholderProps> = ({ className, value, onChange }) => {
  const valueRef = useRef(null);

  useLayoutEffect(() => {
    const { width } = valueRef.current.getBoundingClientRect();
    onChange(width);
  }, [onChange, value]);

  return (
    <span className={cx(styles.hiddenInputPlaceholder, className)} ref={valueRef} aria-hidden>
      {value}
    </span>
  );
};

export default HiddenInputPlaceholder;
