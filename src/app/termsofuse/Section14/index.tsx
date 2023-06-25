import { Box, Heading, ListItem, OrderedList } from "@chakra-ui/react";
import { Text } from "@/components/Information/Text";

import { INFORMATION_H2_SIZE } from "@/const/style";

export const Section14 = () => {
  return (
    <Box mt={8}>
      <Heading as="h2" py={4} fontSize={INFORMATION_H2_SIZE}>
        第14条（準拠法・裁判管轄）
      </Heading>
      <OrderedList>
        <ListItem>
          <Text>本規約の解釈にあたっては，日本法を準拠法とします。</Text>
        </ListItem>
        <ListItem>
          <Text>
            本サービスに関して紛争が生じた場合には，当社の本店所在地を管轄する裁判所を専属的合意管轄とします。
          </Text>
        </ListItem>
      </OrderedList>
    </Box>
  );
};
