import { Box, Heading, ListItem, OrderedList } from "@chakra-ui/react";

import { Text } from "@/components/Information/Text";
import { INFORMATION_H2_SIZE } from "@/const/style";

export const Section4 = () => {
  return (
    <Box mt={8}>
      <Heading as="h2" py={4} fontSize={INFORMATION_H2_SIZE}>
        第4条（禁止事項）
      </Heading>
      <Box>
        <Text>
          ユーザーは，本サービスの利用にあたり，以下の行為をしてはなりません。
        </Text>
        <OrderedList>
          <ListItem>
            <Text>法令または公序良俗に違反する行為</Text>
          </ListItem>
          <ListItem>
            <Text>犯罪行為に関連する行為</Text>
          </ListItem>
          <ListItem>
            <Text>
              本サービスの内容等，本サービスに含まれる著作権，商標権ほか知的財産権を侵害する行為
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              当方，ほかのユーザー，またはその他第三者のサーバーまたはネットワークの機能を破壊したり，妨害したりする行為
            </Text>
          </ListItem>
          <ListItem>
            <Text>本サービスによって得られた情報を商業的に利用する行為</Text>
          </ListItem>
          <ListItem>
            <Text>当方のサービスの運営を妨害するおそれのある行為</Text>
          </ListItem>
          <ListItem>
            <Text>不正アクセスをし，またはこれを試みる行為</Text>
          </ListItem>
          <ListItem>
            <Text>他のユーザーに関する個人情報等を収集または蓄積する行為</Text>
          </ListItem>
          <ListItem>
            <Text>不正な目的を持って本サービスを利用する行為</Text>
          </ListItem>

          <ListItem>
            <Text>
              本サービスの他のユーザーまたはその他の第三者に不利益，損害，不快感を与える行為
            </Text>
          </ListItem>
          <ListItem>
            <Text>他のユーザーに成りすます行為</Text>
          </ListItem>
          <ListItem>
            <Text>
              本サービスの他のユーザーまたはその他の第三者に不利益，損害，不快感を与える行為
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              当社が許諾しない本サービス上での宣伝，広告，勧誘，または営業行為
            </Text>
          </ListItem>
          <ListItem>
            <Text>面識のない異性との出会いを目的とした行為</Text>
          </ListItem>
          <ListItem>
            <Text>
              当社のサービスに関連して，反社会的勢力に対して直接または間接に利益を供与する行為
            </Text>
          </ListItem>
          <ListItem>
            <Text>その他，当社が不適切と判断する行為</Text>
          </ListItem>
        </OrderedList>
      </Box>
    </Box>
  );
};
