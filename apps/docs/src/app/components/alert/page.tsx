"use client";

import { Alert } from "@sapira/ui";

export default function AlertPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Alert</h1>
        <p className="text-muted-foreground mt-2">Inline alert banners for feedback messages.</p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-medium">Variants</h2>
        <div className="space-y-3">
          <Alert variant="info" title="Information">This is an informational message.</Alert>
          <Alert variant="success" title="Success">Your changes have been saved.</Alert>
          <Alert variant="warning" title="Warning">Please review before continuing.</Alert>
          <Alert variant="error" title="Error">Something went wrong. Please try again.</Alert>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-medium">Without Title</h2>
        <div className="space-y-3">
          <Alert variant="info">A simple info message without a title.</Alert>
          <Alert variant="success">Operation completed successfully.</Alert>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-medium">Dismissible</h2>
        <div className="space-y-3">
          <Alert variant="warning" title="Dismissible" dismissible>Click the X to dismiss this alert.</Alert>
          <Alert variant="error" title="Dismissible Error" dismissible>This error can be dismissed.</Alert>
        </div>
      </section>
    </div>
  );
}
