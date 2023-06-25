import { Box, Heading } from "@chakra-ui/react";

import { INFORMATION_H2_SIZE } from "@/const/style";
import { Text } from "@/components/Information/Text";

export const Section7 = () => {
  return (
    <Box mt={8}>
      <Heading as="h2" py={4} fontSize={INFORMATION_H2_SIZE}>
        第7条（退会）
      </Heading>
      <Text>
        ユーザーは，当方の定める退会手続により，本サービスから退会できるものとします。
      </Text>
    </Box>
  );
};
