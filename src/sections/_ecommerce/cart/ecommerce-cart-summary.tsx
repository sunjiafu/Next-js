import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { fPercent, fCurrency } from 'src/utils/format-number';

import { varAlpha } from 'src/theme/styles';

// ----------------------------------------------------------------------

type Props = BoxProps & {
  tax: number;
  total: number;
  subtotal: number;
  shipping: number;
  discount: number;
};

export function EcommerceCartSummary({
  tax,
  total,
  subtotal,
  shipping,
  discount,
  sx,
  ...other
}: Props) {
  return (
    <Box
      gap={3}
      display="flex"
      flexDirection="column"
      sx={{
        p: 4,
        borderRadius: 2,
        border: (theme) => `solid 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.24)}`,
        ...sx,
      }}
      {...other}
    >
      <Typography variant="h6"> Summary </Typography>

      <Stack spacing={2}>
        <Row label="Subtotal" value={fCurrency(subtotal)} />

        <Row label="Shipping" value={fCurrency(shipping)} />

        <Row label="Discount (15%)" value={`-${fCurrency(discount)}`} />

        <Row label="Tax" value={fPercent(tax)} />
      </Stack>

      <TextField
        hiddenLabel
        placeholder="Discount code"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button sx={{ mr: -0.25 }}>Apply</Button>
            </InputAdornment>
          ),
        }}
      />

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Row
        label="Total"
        value={fCurrency(total)}
        sx={{
          typography: 'h6',
          '& span': { typography: 'h6' },
        }}
      />

      <Button
        component={RouterLink}
        href={paths.eCommerce.checkout}
        size="large"
        variant="contained"
        color="inherit"
      >
        Checkout
      </Button>
    </Box>
  );
}

// ----------------------------------------------------------------------

type RowProps = BoxProps & {
  label: string;
  value: string;
};

function Row({ label, value, sx, ...other }: RowProps) {
  return (
    <Box display="flex" alignItems="center" sx={{ typography: 'subtitle2', ...sx }} {...other}>
      <Box component="span" sx={{ typography: 'body2', flexGrow: 1 }}>
        {label}
      </Box>
      {value}
    </Box>
  );
}
