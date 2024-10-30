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
      <main>
        <p>Hello Admin</p>
        <div>
          {meetingLog.map((log) => (
            <div key={log.id} className="flex">
              <div>Name: {log.name}</div>
              <div>Date: {dateFormatter.format(new Date(log.createdAt))}</div>
            </div>
          ))}
        </div>
      </main>
    </Authenticator>
  );
}
