import { useColorMode, Switch,  Box } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Switch
      isChecked={colorMode === 'dark'}
      onChange={toggleColorMode}
      colorScheme="teal"
    >
      <Box as="span" fontSize="lg" ml="-1" mr="1">
        {colorMode === 'dark' ? <MoonIcon /> : <SunIcon />}
      </Box>
    </Switch>
  );
};

export default DarkModeSwitch;
