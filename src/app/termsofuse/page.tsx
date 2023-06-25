"use client";
/**
 * 参考: https://kiyaku.jp/hinagata/gp.html
 */
import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { InitialDescription } from "./InitialDescription";
import { INFORMATION_H1_SIZE } from "@/const/style";
import { Section1 } from "./Section1";
import { Section2 } from "./Section2";
import { Section3 } from "./Section3";
import { Section4 } from "./Section4";
import { Section5 } from "./Section5";
import { Section6 } from "./Section6";
import { Section7 } from "./Section7";
import { Section8 } from "./Section8";
import { Section9 } from "./Section9";
import { Section10 } from "./Section10";
import { Section11 } from "./Section11";
import { Section12 } from "./Section12";
import { Section13 } from "./Section13";
import { Section14 } from "./Section14";

export default function TermsOfUse() {
  return (
    <Box p={4}>
      <Heading as="h1" py={6} fontSize={INFORMATION_H1_SIZE}>
        利用規約
      </Heading>
      <InitialDescription />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
      <Section11 />
      <Section12 />
      <Section13 />
      <Section14 />
    </Box>
  );
}
