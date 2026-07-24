import figma from '@figma/code-connect';
import { Badge } from '@/components/ui/badge';

/**
 * FigHub-generated Code Connect stub — review props + example before merge.
 * CI: figma connect publish (after merge)
 */
figma.connect(
  Badge,
  'https://www.figma.com/design/ZQUZPLhNQpj5Fr64OSEUzi/Untitled?node-id=2-93',
  {
    props: {
      variant: figma.enum('variant', { Default: 'default', Secondary: 'secondary', Outline: 'outline', Destructive: 'destructive' }),
    },
    example: (props) => <Badge {...props} />,
  },
);
