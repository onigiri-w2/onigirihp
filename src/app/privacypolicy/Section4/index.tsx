import { Box, Heading } from "@chakra-ui/react";
import { Text } from "@/components/Information/Text";

import { INFORMATION_H2_SIZE } from "@/const/style";

export const Section4 = () => {
  return (
    <Box mt={8}>
      <Heading as="h2" py={4} fontSize={INFORMATION_H2_SIZE}>
        4. 法令、規範の遵守と見直し
      </Heading>
      <Text>
        当方は、利用者情報の取扱いに関して適用される日本の法令、その他規範を遵守するとともに、本ポリシーの内容を適宜見直し、その改善に努めます。
      </Text>
    </Box>
  );
};
