import * as React from 'react';

/**
 * Intentionally odd name + props — useful for WO-194 "Not found" / low-confidence
 * conflict tiles when the Figma canvas has no matching component.
 */
export function MysteryWidget(props: {
  flux?: number;
  mode?: 'alpha' | 'beta' | 'gamma';
  children?: React.ReactNode;
}) {
  return (
    <div data-flux={props.flux ?? 0} data-mode={props.mode ?? 'alpha'}>
      {props.children}
    </div>
  );
}
