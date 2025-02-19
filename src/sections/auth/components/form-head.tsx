import type { Theme, SxProps } from '@mui/material/styles';

import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

// ----------------------------------------------------------------------

type FormHeadProps = {
  href: string;
  title: string;
  sx?: SxProps<Theme>;
  variant: 'sign-in' | 'sign-up';
};

export function FormHead({ sx, title, variant, href }: FormHeadProps) {
  return (
    <Stack spacing={1.5} sx={sx}>
      <Typography variant="h4">{title}</Typography>

      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {variant === 'sign-in' ? 'Don’t have an account? ' : 'Already have an account? '}

        <Link component={RouterLink} href={href} variant="subtitle2">
          {variant === 'sign-in' ? 'Get started' : 'Sign in'}
        </Link>
      </Typography>
    </Stack>
  );
}
