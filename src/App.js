import React from "react";
import AppLayout from "./AppLayout";
import LinkAnalyzer from "./LinkAnalyzer";
import BackgroundCanvas from "./BackgroundCanvas";
import ManualAnalyzer from "./ManualAnalyzer";

export default function App() {
  let linkTab = <LinkAnalyzer />
  let manualTab = <ManualAnalyzer />

  return (
    <>
    <BackgroundCanvas />
    <AppLayout linkTab={linkTab} manualTab={manualTab} />
    </>
  );
}
