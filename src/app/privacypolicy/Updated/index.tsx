import { Box, Heading } from "@chakra-ui/react";

import { INFORMATION_H2_SIZE } from "@/const/style";
import { Text } from "@/components/Information/Text";

export const Updated = () => {
  return (
    <Box mt={8}>
      <Heading as="h2" py={4} fontSize={INFORMATION_H2_SIZE}>
        制定日・改定日
      </Heading>
      <Text>制定日：2023年7月1日</Text>
    </Box>
  );
};
