import { Box, Heading, ListItem, OrderedList } from "@chakra-ui/react";
import { Text } from "@/components/Information/Text";
import { INFORMATION_H2_SIZE } from "@/const/style";

export const Section2 = () => {
  return (
    <Box mt={8}>
      <Heading as="h2" py={4} fontSize={INFORMATION_H2_SIZE}>
        第2条（利用登録）
      </Heading>
      <OrderedList>
        <ListItem>
          <Text>
            本サービスにおいては，登録希望者が本規約に同意の上，当方の定める方法によって利用登録を申請し，
            当方がこれを承認することによって，利用登録が完了するものとします。
          </Text>
        </ListItem>
        <ListItem>
          <Text>
            当方は，利用登録を希望する者が以下の各号のいずれかに該当する場合には，
            利用登録の申請を承認しないことがあり，その理由については一切の開示義務を負わないものとします。
          </Text>
          <OrderedList>
            <ListItem>
              <Text>当方が独自に定める基準に合致しない場合</Text>
            </ListItem>
            <ListItem>
              <Text>申請内容に虚偽，誤記または不足があった場合</Text>
            </ListItem>
            <ListItem>
              <Text>その他，当方が利用登録を相当でないと判断した場合</Text>
            </ListItem>
          </OrderedList>
        </ListItem>
      </OrderedList>
    </Box>
  );
};
