import { Box, Heading, UnorderedList, ListItem } from "@chakra-ui/react";
import { Text } from "@/components/Information/Text";

import { INFORMATION_H2_SIZE } from "@/const/style";

export const Section5 = () => {
  return (
    <Box mt={8}>
      <Heading as="h2" py={4} fontSize={INFORMATION_H2_SIZE}>
        5. お問い合わせ窓口
      </Heading>
      <Text>
        本ポリシーに関するお問い合わせは、下記の窓口までお願いいたします。
        <UnorderedList>
          <ListItem>メールアドレス：onigiri.w2@gmail.com</ListItem>
        </UnorderedList>
      </Text>
    </Box>
  );
};
