import { Box, Heading, ListItem, OrderedList } from "@chakra-ui/react";
import { Text } from "@/components/Information/Text";

import { INFORMATION_H2_SIZE } from "@/const/style";

export const Section11 = () => {
  return (
    <Box mt={8}>
      <Heading as="h2" py={4} fontSize={INFORMATION_H2_SIZE}>
        第11条（個人情報の取扱い）
      </Heading>
      <Text>
        当方は，本サービスの利用によって取得する個人情報については，当方「プライバシーポリシー」に従い適切に取り扱うものとします。
      </Text>
    </Box>
  );
};
