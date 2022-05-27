import type { ReactNode } from 'react';

export interface PortalProps {
  hostId?: string;
  children?: ReactNode | ReactNode[];
}
