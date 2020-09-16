/** @jsx jsx */
import { jsx, Button } from 'theme-ui';
import { useColorMode } from 'theme-ui';

const ColorSwitch = () => {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <div sx={{ textAlign: 'center' }}>
      <Button
        onClick={() => {
          setColorMode(colorMode === 'default' ? 'dark' : 'default');
        }}
        sx={{
          backgroundColor: 'primary',
          fontWeight: 'bold',
          py: 3,
        }}
      >
        Toggle {colorMode === 'default' ? 'Dark' : 'Light'}
      </Button>
    </div>
  );
};

export default ColorSwitch;
