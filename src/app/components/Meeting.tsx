"use client"
import { useSearchParams } from "next/navigation";
// import "server-only";

const Meeting: React.FC = () => {
  const search = useSearchParams()
  console.log(search.get("meet"));

  return (
    <>
      <button>Remember me!</button>
    </>
  );
};

export default Meeting;
