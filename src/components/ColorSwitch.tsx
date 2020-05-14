/** @jsx jsx */
import { jsx, Button } from 'theme-ui';
import { useColorMode } from 'theme-ui';

const ColorSwitch = () => {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <div sx={{ textAlign: 'center' }}>
      <Button
        onClick={() => {
          setColorMode(colorMode === 'light' ? 'dark' : 'light');
        }}
        sx={{
          backgroundColor: 'primary',
          fontWeight: 'bold',
          py: 3,
        }}
      >
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
    </div>
  );
};

export default ColorSwitch;
