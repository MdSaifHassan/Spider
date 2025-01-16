'use client';

import React, { useState } from 'react';
import { Box, Typography, Collapse } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const FooterDropdown = ({ title, items, containerSx, titleSx, collapseSx, itemSx }) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Box sx={{ ...containerSx }} onClick={handleToggle}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'pointer',
        }}
      >
        <Typography sx={{ ...titleSx }}>{title}</Typography>
        {open ? (
          <ExpandLessIcon sx={{ color: titleSx?.color || '#000' }} />
        ) : (
          <ExpandMoreIcon sx={{ color: titleSx?.color || '#000' }} />
        )}
      </Box>
      <Collapse in={open} timeout="auto" sx={{ ...collapseSx }}>
        {items.map((item, index) => (
          <Typography key={index} sx={{ ...itemSx }}>
            {item}
          </Typography>
        ))}
      </Collapse>
    </Box>
  );
};

export default FooterDropdown;
