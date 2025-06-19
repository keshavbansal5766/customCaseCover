import Link from "next/link";
import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Navbar = () => {
  const user = undefined;

  return (
    // main nav div
    <nav className="sticky z-[100] inset-x-0 h-14 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          {/* case cobra name and access for homepage also */}
          <Link href="/" className="flex z-40 font-semibold">
            Case<span className="text-green-600">Cobra</span>
          </Link>
          {/* Links and also redirecting to logout, login and signup according to authentication */}
          <div className="h-full flex items-center space-x-4">
            {/* UI will change according to user present or not */}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
