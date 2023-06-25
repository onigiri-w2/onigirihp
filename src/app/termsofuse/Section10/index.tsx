import { Box, Heading, ListItem, OrderedList } from "@chakra-ui/react";
import { Text } from "@/components/Information/Text";

import { INFORMATION_H2_SIZE } from "@/const/style";

export const Section10 = () => {
  return (
    <Box mt={8}>
      <Heading as="h2" py={4} fontSize={INFORMATION_H2_SIZE}>
        第10条（利用規約の変更）
      </Heading>
      <OrderedList>
        <ListItem>
          <Text>
            当方は以下の場合には、ユーザーの個別の同意を要せず、本規約を変更することができるものとします。
          </Text>
          <OrderedList>
            <ListItem>
              <Text>本規約の変更がユーザーの一般の利益に適合するとき。</Text>
            </ListItem>
            <ListItem>
              <Text>
                本規約の変更が本サービス利用契約の目的に反せず、かつ、変更の必要性、変更後の内容の相当性その他の変更に係る事情に照らして合理的なものであるとき。
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                当社はユーザーに対し、前項による本規約の変更にあたり、事前に、本規約を変更する旨及び変更後の本規約の内容並びにその効力発生時期を通知します。
              </Text>
            </ListItem>
          </OrderedList>
        </ListItem>
      </OrderedList>
    </Box>
  );
};
