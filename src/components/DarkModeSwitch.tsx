import { useColorMode, Switch, Box, Flex, Center, Divider } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex align="center">
      <Box mr={2}>
        {colorMode === 'dark' ? <MoonIcon boxSize={6} /> : <SunIcon boxSize={6} />}
      </Box>
      <Center>
        <Divider orientation ='vertical'/>
      </Center>
      <Switch
        isChecked={colorMode === 'dark'}
        onChange={toggleColorMode}
        colorScheme="teal"
      />
    </Flex>
  );
};

export default DarkModeSwitch;
