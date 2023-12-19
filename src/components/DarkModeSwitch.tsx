import { useColorMode, Switch, Box, Flex } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex align="center">
      <Box mr={2}>
        {colorMode === 'dark' ? <MoonIcon boxSize={6} /> : <SunIcon boxSize={6} />}
      </Box>
      <Switch
        isChecked={colorMode === 'dark'}
        onChange={toggleColorMode}
        colorScheme="teal"
      />
    </Flex>
  );
};

export default DarkModeSwitch;
