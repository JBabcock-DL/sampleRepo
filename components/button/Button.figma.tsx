import figma from '@figma/code-connect';
import { Button } from '@/components/ui/button';

/**
 * FigHub-generated Code Connect stub — review props + example before merge.
 * CI: figma connect publish (after merge)
 */
figma.connect(
  Button,
  'https://www.figma.com/design/ZQUZPLhNQpj5Fr64OSEUzi/Untitled?node-id=2-84',
  {
    props: {
      variant: figma.enum('variant', { Default: 'default', Destructive: 'destructive', Outline: 'outline', Secondary: 'secondary', Ghost: 'ghost', Link: 'link' }),
      size: figma.enum('size', { Default: 'default', Sm: 'sm', Lg: 'lg', Icon: 'icon' }),
    },
    example: (props) => <Button {...props} />,
  },
);
