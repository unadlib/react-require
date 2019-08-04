import { transformFileSync } from '@babel/core';
import React, { ReactElement, Attributes, ReactNode, FunctionComponent, ComponentClass } from 'react';

type Component<P> = FunctionComponent<P> | ComponentClass<P>;

export const load = <P extends {}>(
  path: string,
  props?: Attributes & P | null,
  ...children: ReactNode[]
): ReactElement<P>  =>
  React.createElement(eval(transformFileSync(path)!.code!) as Component<P>, props, children);
