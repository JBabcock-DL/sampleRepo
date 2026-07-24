import figma from '@figma/code-connect';
import { Toast } from '@/components/ui/toast';

/**
 * FigHub-generated Code Connect stub — review props + example before merge.
 * CI: figma connect publish (after merge)
 */
figma.connect(
  Toast,
  'https://www.figma.com/design/ZQUZPLhNQpj5Fr64OSEUzi/Untitled?node-id=4-8',
  {
    props: {
      variant: figma.enum('variant', { Default: 'default' }),
    },
    example: (props) => <Toast {...props} />,
  },
);
