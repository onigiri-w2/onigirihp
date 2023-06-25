import { Box, Heading, ListItem, OrderedList } from "@chakra-ui/react";
import { Text } from "@/components/Information/Text";

import { INFORMATION_H2_SIZE } from "@/const/style";

export const Section13 = () => {
  return (
    <Box mt={8}>
      <Heading as="h2" py={4} fontSize={INFORMATION_H2_SIZE}>
        第13条（権利義務の譲渡の禁止）
      </Heading>
      <Text>
        ユーザーは，当方の書面による事前の承諾なく，利用契約上の地位または本規約に基づく権利もしくは義務について，第三者に対して一切の譲渡，移転，担保設定その他の処分をすることはできません。
      </Text>
    </Box>
  );
};
