"use client";
import { useSearchParams } from "next/navigation";
import { writeItem } from "../logic/actions";

const Meeting: React.FC = () => {
  const search = useSearchParams();
  const meet = search.get("meet");

  const sendAction = async () => {
    try {
      const items = await writeItem();
      console.log(`items=${JSON.stringify(items)}`);
    } catch (e: unknown) {
      console.error(`error=${e}`);
    }
  };

  return (
    <>
      {meet && (
        <div className="text-center">
          <button
            className="font-bold rounded-lg px-5 py-2 mb-4 w-auto text-slate-200 bg-purple-700 dark:bg-purple-800 hover:opacity-50"
            onClick={() => sendAction()}
          >
            Today we&#39;ve met!
          </button>
        </div>
      )}
    </>
  );
};

export default Meeting;
