import React from "react";
import { Box, Heading, ListItem, OrderedList } from "@chakra-ui/react";

import { INFORMATION_H2_SIZE } from "@/const/style";
import { Text } from "@/components/Information/Text";

export const Section6 = () => {
  return (
    <Box mt={8}>
      <Heading as="h2" py={4} fontSize={INFORMATION_H2_SIZE}>
        第6条（利用制限および登録抹消）
      </Heading>
      <OrderedList>
        <ListItem>
          <Text>
            当方は，以下の場合には，事前の通知なく，ユーザーに対して本サービスの全部もしくは
            一部の利用を制限しまたは本サービスへの登録を抹消することができるものとします。
          </Text>
          <OrderedList>
            <ListItem>
              <Text>本規約のいずれかの条項に違反した場合</Text>
            </ListItem>
            <ListItem>
              <Text>登録事項に虚偽の事実があることが判明した場合</Text>
            </ListItem>
            <ListItem>
              <Text>料金等の支払債務の不履行があった場合</Text>
            </ListItem>
            <ListItem>
              <Text>当方からの連絡に対し，一定期間返答がない場合</Text>
            </ListItem>
            <ListItem>
              <Text>
                本サービスについて，最終の利用から一定期間利用がない場合
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                その他，当方が本サービスの利用を適当でないと判断した場合
              </Text>
            </ListItem>
          </OrderedList>
        </ListItem>
      </OrderedList>
    </Box>
  );
};
