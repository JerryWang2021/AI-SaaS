"use client";

import React, { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("bf46c61a-0a06-459b-868f-d425dfbc0c4d");
  }, []);
  return null;
};

export default CrispChat;
