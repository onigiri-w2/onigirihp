import { Box, Heading, ListItem, OrderedList } from "@chakra-ui/react";
import { INFORMATION_H2_SIZE } from "@/const/style";
import { Text } from "@/components/Information/Text";

export const Section5 = () => {
  return (
    <Box mt={8}>
      <Heading as="h2" py={4} fontSize={INFORMATION_H2_SIZE}>
        第5条（本サービスの提供の停止等）
      </Heading>
      <OrderedList>
        <ListItem>
          <Text>
            当方は，以下のいずれかの事由があると判断した場合，ユーザーに事前に通知することなく，
            本サービスの全部または一部の提供を停止または中断することができるものとします。
          </Text>
          <OrderedList>
            <ListItem>
              <Text>
                本サービスにかかるコンピューター・システムの保守点検または更新を行う場合
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                地震，落雷，火災，停電または天災などの不可抗力により，本サービスの提供が困難となった場合
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                コンピューターまたは通信回線等が事故により停止した場合
              </Text>
            </ListItem>
            <ListItem>
              <Text>その他，当方が本サービスの提供が困難と判断した場合</Text>
            </ListItem>
          </OrderedList>
        </ListItem>
        <ListItem>
          <Text>
            当方は，本サービスの提供の停止または中断により，ユーザーまたは第三者に生じたいかなる損害についても，
            賠償する責任を負わないものとします。
          </Text>
        </ListItem>
      </OrderedList>
    </Box>
  );
};
