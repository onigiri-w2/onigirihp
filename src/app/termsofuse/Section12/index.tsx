import { Box, Heading } from "@chakra-ui/react";

import { INFORMATION_H2_SIZE } from "@/const/style";
import { Text } from "@/components/Information/Text";

export const Section12 = () => {
  return (
    <Box mt={8}>
      <Heading as="h2" py={4} fontSize={INFORMATION_H2_SIZE}>
        第12条（通知または連絡）
      </Heading>
      <Text>
        当方は，ユーザーとの間で締結した本規約については，当方の定める方法により，ユーザーに通知または連絡を行うものとします。
      </Text>
    </Box>
  );
};
