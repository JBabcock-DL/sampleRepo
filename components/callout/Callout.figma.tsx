import figma from '@figma/code-connect';
import { Callout } from '@/components/ui/callout';

/**
 * FigHub-generated Code Connect stub — review props + example before merge.
 * CI: figma connect publish (after merge)
 */
figma.connect(
  Callout,
  'https://www.figma.com/design/ZQUZPLhNQpj5Fr64OSEUzi/Untitled?node-id=8-11',
  {
    props: {
      variant: figma.enum('variant', { Default: 'default', Destructive: 'destructive', Info: 'info' }),
    },
    example: (props) => <Callout {...props} />,
  },
);
