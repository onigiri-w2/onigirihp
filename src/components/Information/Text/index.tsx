import { Text as TextChakra } from "@chakra-ui/react";

export const Text = ({ children }: { children: React.ReactNode }) => {
  return (
    <TextChakra fontSize={16} lineHeight={1.7}>
      {children}
    </TextChakra>
  );
};
