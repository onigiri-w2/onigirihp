import { INFORMATION_H2_SIZE, INFORMATION_H3_SIZE } from "@/const/style";
import { Box, Heading, Link } from "@chakra-ui/react";
import { Text } from "@/components/Information/Text";

export const Section1 = () => {
  return (
    <Box mt={8}>
      <Heading as="h2" py={4} fontSize={INFORMATION_H2_SIZE}>
        1. 利用者情報の収集と目的
      </Heading>
      <Text>
        本サービスの利用に際して，下記の目的のために利用者情報を自動的または利用者の入力により取得いたします。
      </Text>
      <Heading as="h3" py={3} mt={4} fontSize={INFORMATION_H3_SIZE}>
        1.1. サービス提供の改善
      </Heading>
      <Text>
        本サービスではサービスの提供と改善のために利用者情報を取得します。
        <br />
        <br />
        利用状況の解析とカスタマイズされたコンテンツの提供、サービス品質の向上のためにGoogle
        Firebaseを利用しています。
        <br />
        Google
        Firebaseでは、Google社が付与するユーザーID、Push通知用トークン、アプリ内での操作履歴、アプリの動作状況、端末情報を取得し、Google社のプライバシーポリシーに基づいて管理されます。
        <br />
        <br />
        各事業者のプライバシーポリシーは下記リンクをご確認ください。
      </Text>
      <Text>
        Google Firebase：　
        <Link
          href="https://policies.google.com/privacy?hl=ja"
          textDecor="underline"
          color="#3182ce"
        >
          https://policies.google.com/privacy?hl=ja
        </Link>
      </Text>
      <Heading as="h3" py={2} mt={4} fontSize={INFORMATION_H3_SIZE}>
        1.2. 問い合わせ対応
      </Heading>
      <Text>
        本サービスでは問い合わせ対応のために利用者の「メールアドレス」「問い合わせ情報」を取得します。
      </Text>
    </Box>
  );
};
