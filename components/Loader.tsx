import Image from "next/image";
import React from "react";

const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="w-10 h-10 relative animate-spin">
        <Image alt="logp" fill src="/logo.png" />
      </div>
      <div>
        <p className="text-sm text-muted-foreground">Genius is thinking...</p>
      </div>
    </div>
  );
};

export default Loader;
