import { Text } from "@/components/Information/Text";
import { INFORMATION_H2_SIZE } from "@/const/style";
import { Box, Heading, ListItem, OrderedList } from "@chakra-ui/react";

export const Section8 = () => {
  return (
    <Box mt={8}>
      <Heading as="h2" py={4} fontSize={INFORMATION_H2_SIZE}>
        第8条（保証の否認および免責事項）
      </Heading>
      <OrderedList>
        <ListItem>
          <Text>
            当方は，本サービスに事実上または法律上の瑕疵（安全性，信頼性，正確性，完全性，有効性，特定の目的への適合性，セキュリティなどに関する欠陥，エラーやバグ，権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。
          </Text>
        </ListItem>
        <ListItem>
          <Text>
            当方は，本サービスに起因してユーザーに生じたあらゆる損害について、当社の故意又は重過失による場合を除き、一切の責任を負いません。ただし，本サービスに関する当社とユーザーとの間の契約（本規約を含みます。）が消費者契約法に定める消費者契約となる場合，この免責規定は適用されません。
          </Text>
        </ListItem>
        <ListItem>
          <Text>
            当社は，本サービスに関して，ユーザーと他のユーザーまたは第三者との間において生じた取引，連絡または紛争等について一切責任を負いません。
          </Text>
        </ListItem>
        <ListItem>
          <Text>
            前項ただし書に定める場合であっても，当社は，当社の過失（重過失を除きます。）による債務不履行または不法行為によりユーザーに生じた損害のうち特別な事情から生じた損害（当社またはユーザーが損害発生につき予見し，または予見し得た場合を含みます。）について一切の責任を負いません。また，当社の過失（重過失を除きます。）による債務不履行または不法行為によりユーザーに生じた損害の賠償は，ユーザーから当該損害が発生した月に受領した利用料の額を上限とします。
          </Text>
        </ListItem>
      </OrderedList>
    </Box>
  );
};
