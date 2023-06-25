import { Box, Heading, UnorderedList, ListItem } from "@chakra-ui/react";
import { Text } from "@/components/Information/Text";

import { INFORMATION_H2_SIZE } from "@/const/style";

export const Section3 = () => {
  return (
    <Box mt={8}>
      <Heading as="h2" py={4} fontSize={INFORMATION_H2_SIZE}>
        3. 個人情報の第三者への開示・提供の禁止
      </Heading>
      <Text>
        当方は、利用者情報を適切に管理し、次のいずれかに該当する場合を除き、利用者情報を第三者に開示いたしません。
        <UnorderedList>
          <ListItem>利用者本人のご了解がある場合</ListItem>
          <ListItem>法令に基づき開示することが必要である場合</ListItem>
        </UnorderedList>
      </Text>
    </Box>
  );
};
