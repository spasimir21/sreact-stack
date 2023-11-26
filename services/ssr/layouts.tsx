import { CenteredLayout } from '@frontend/layouts/CenteredLayout';
import { InnerLayout } from '@frontend/layouts/InnerLayout';

const LAYOUTS = {
  centered: (
    <CenteredLayout>
      <InnerLayout />
    </CenteredLayout>
  )
} as const;

export { LAYOUTS };
