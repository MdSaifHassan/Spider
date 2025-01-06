import { Typography } from '@mui/material';

const TypographyComponent = ({
  variant = 'body1',
  component = 'p',  
  text,             
  color = 'initial',
  align = 'inherit',
  sx = {},         
  ...props
}) => {
  return (
    <Typography
      variant={variant}    
      component={component} 
      color={color}
      align={align}
      sx={sx}             
      {...props}           
    >
      {text}         
    </Typography>
  );
};

export default TypographyComponent;