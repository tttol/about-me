"use client";
import outputs from "@/../amplify_outputs.json";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import { useEffect, useState } from "react";
import { Schema } from "../../../amplify/data/resource";
import { fetchMeetingLog } from "../lib/action";

Amplify.configure(outputs);
export default function Admin() {
  const [meetingLog, setMeetingLog] = useState<Schema["Meeting"]["type"][]>([]);
  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    const data = await fetchMeetingLog();
    setMeetingLog(data);
  };

  const dateFormatter = new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "numeric",
    minute: "numeric",
    timeZone: "Asia/Tokyo",
  });

  return (
    <Authenticator>
      <main className="bg-gradient-to-b to-white from-purple-400 text-slate-800 text-center">
        <p className="font-bold text-5xl mb-3">Meeting Log</p>

        <table className="mx-auto border border-slate-700">
          <th className="p-2 text-left border border-slate-700">Name</th>
          <th className="p-2 text-left border border-slate-700">Date</th>
          {meetingLog
            .sort((a, b) => {
              // ORDER BY createdAt DESC
              const aCreatedAt = a.createdAt
                ? new Date(a.createdAt).getTime()
                : 0;
              const bCreatedAt = b.createdAt
                ? new Date(b.createdAt).getTime()
                : 0;
              return bCreatedAt - aCreatedAt;
            })
            .map((log) => (
              <tr key={log.id}>
                <td className="p-2 text-left border border-slate-700 max-w-[200px] break-words whitespace-normal">
                  {log.name}
                </td>
                <td className="p-2 text-left border border-slate-700">
                  {dateFormatter.format(new Date(log.createdAt))}
                </td>
              </tr>
            ))}
        </table>
        <div>
          <a
            href="/"
            className="inline-block font-bold rounded-lg px-5 py-2 mb-4 w-auto text-slate-200 bg-purple-700 hover:opacity-50 mt-3"
          >
            Back to About Me
          </a>
        </div>
      </main>
    </Authenticator>
  );
}
