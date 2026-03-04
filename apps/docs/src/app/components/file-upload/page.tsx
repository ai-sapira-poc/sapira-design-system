"use client";

import { FileUpload } from "@sapira/ui";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="text-lg font-semibold">{title}</h2>
      {children}
    </section>
  );
}

function Demo({ children }: { children: React.ReactNode }) {
  return <div className="border rounded-lg p-6 space-y-4">{children}</div>;
}

export default function FileUploadPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">FileUpload</h1>
        <p className="text-muted-foreground mt-2">Drag-and-drop file upload zone with file list, size limits, and type filters.</p>
      </div>

      <Section title="Basic">
        <Demo>
          <FileUpload label="Attachments" onFiles={(files) => console.log(files)} />
        </Demo>
      </Section>

      <Section title="Accept Filters">
        <Demo>
          <FileUpload label="Images only" accept="image/*" description="PNG, JPG, GIF up to 5 MB" maxSizeMB={5} />
        </Demo>
      </Section>

      <Section title="Max Files">
        <Demo>
          <FileUpload label="Documents" accept=".pdf,.doc,.docx" maxFiles={3} description="Upload up to 3 documents" />
        </Demo>
      </Section>

      <Section title="Disabled">
        <Demo>
          <FileUpload label="Locked" disabled />
        </Demo>
      </Section>
    </div>
  );
}
