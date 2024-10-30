"use client"
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

export default function Data() {
  return (
    <Authenticator>
      <main>
        <p>Hello Admin</p>
      </main>
    </Authenticator>
  );
}
