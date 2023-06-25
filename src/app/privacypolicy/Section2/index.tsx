import { Box, Heading } from "@chakra-ui/react";

import { INFORMATION_H2_SIZE } from "@/const/style";
import { Text } from "@/components/Information/Text";

export const Section2 = () => {
  return (
    <Box mt={8}>
      <Heading as="h2" py={4} fontSize={INFORMATION_H2_SIZE}>
        2. 個人情報の管理
      </Heading>
      <Text>
        当方は、利用者情報の漏洩、滅失またはき損の防止その他利用者情報の安全管理のために、必要かつ適切な措置を講じます。
      </Text>{" "}
    </Box>
  );
};
