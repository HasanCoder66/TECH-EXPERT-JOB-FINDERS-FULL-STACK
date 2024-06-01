import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationRounded() {
    return (
        <Stack spacing={2}>
            <Pagination count={10} variant="outlined" shape="rounded" sx={{ '& .MuiButtonBase-root': { bgcolor: "#ffffff", color: "#ec4843", fontWeight: "bold", fontSize: 12 }, '& .css-19xm0h7-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected': { bgcolor: "#ec4843", color: "#ffffff" }}} />
        </Stack>
    );
}
