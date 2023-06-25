import { INFORMATION_H2_SIZE } from "@/const/style";
import { Box, Heading } from "@chakra-ui/react";

import { Text } from "@/components/Information/Text";

export const Section9 = () => {
  return (
    <Box mt={8}>
      <Heading as="h2" py={4} fontSize={INFORMATION_H2_SIZE}>
        第9条（サービス内容の変更等）
      </Heading>
      <Text>
        当方は，ユーザーに通知することなく，本サービスの内容を変更しまたは本サービスの提供を中止することができるものとします。
      </Text>
    </Box>
  );
};
