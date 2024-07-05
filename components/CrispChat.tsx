"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("cdbcbd12-4c18-4270-a51b-95a39f18bc57");
  }, []);

  return null;
};
