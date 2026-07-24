import figma from '@figma/code-connect';
import { Card } from '@/components/ui/card';

/**
 * FigHub-generated Code Connect stub — review props + example before merge.
 * CI: figma connect publish (after merge)
 */
figma.connect(
  Card,
  'https://www.figma.com/design/ZQUZPLhNQpj5Fr64OSEUzi/Untitled?node-id=2-130',
  {
    props: {
      variant: figma.enum('variant', { Default: 'default', Outlined: 'outlined', Muted: 'muted' }),
      padding: figma.enum('padding', { Default: 'default', Sm: 'sm', Lg: 'lg', None: 'none' }),
    },
    example: (props) => <Card {...props} />,
  },
);
