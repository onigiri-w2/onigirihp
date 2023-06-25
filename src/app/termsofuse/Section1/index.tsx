import React from "react";
import { Box, Heading, List, ListItem, OrderedList } from "@chakra-ui/react";

import { INFORMATION_H2_SIZE } from "@/const/style";
import { Text } from "@/components/Information/Text";

export const Section1 = () => {
  return (
    <Box mt={8}>
      <Heading as="h2" py={4} fontSize={INFORMATION_H2_SIZE}>
        第1条（適用）
      </Heading>
      <OrderedList>
        <ListItem>
          <Text>
            本規約は，ユーザーと当方との間の本サービスの利用に関わる一切の関係に適用されるものとします。
          </Text>
        </ListItem>
        <ListItem>
          <Text>
            当方は本サービスに関し，本規約のほか，特定のサービスに関する規定（以下，「個別規定」といいます。）を定める場合があり，
            ユーザーは，本規約のほか，当該個別規定にも従うものとします。
          </Text>
        </ListItem>
        <ListItem>
          <Text>
            本規約の内容と個別規定の内容とが異なる場合には，個別規定の定める内容が優先されるものとします。
          </Text>
        </ListItem>
      </OrderedList>
    </Box>
  );
};
