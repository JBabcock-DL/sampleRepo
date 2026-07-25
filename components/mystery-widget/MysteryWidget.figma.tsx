import figma from '@figma/code-connect';
import { MysteryWidget } from '@/components/ui/mystery-widget';

/**
 * FigHub-generated Code Connect stub — review props + example before merge.
 * CI: figma connect publish (after merge)
 */
figma.connect(
  MysteryWidget,
  'https://www.figma.com/design/ZQUZPLhNQpj5Fr64OSEUzi/Untitled?node-id=11-10',
  {
    props: {
      variant: figma.enum('variant', { Default: 'default' }),
    },
    example: (props) => <MysteryWidget {...props} />,
  },
);
