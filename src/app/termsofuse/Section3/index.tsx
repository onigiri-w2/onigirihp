import { Box, Heading, OrderedList, ListItem } from "@chakra-ui/react";

import { INFORMATION_H2_SIZE } from "@/const/style";
import { Text } from "@/components/Information/Text";

export const Section3 = () => {
  return (
    <Box mt={8}>
      <Heading as="h2" py={4} fontSize={INFORMATION_H2_SIZE}>
        第3条（利用料金及び支払い方法）
      </Heading>
      <OrderedList>
        <ListItem>
          <Text>
            本サービスは原則無料で利用できますが，当方が別途定める有料サービスの利用については，
            当方が別途定める利用料金をユーザーが支払うものとします。
          </Text>
        </ListItem>
      </OrderedList>
    </Box>
  );
};
