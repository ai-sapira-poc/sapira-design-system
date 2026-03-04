"use client";

import * as React from "react";
import { Upload, X } from "lucide-react";
import { cn } from "../../lib/utils";

export interface FileUploadProps {
  onFiles?: (files: File[]) => void;
  accept?: string;
  maxFiles?: number;
  maxSizeMB?: number;
  label?: string;
  description?: string;
  disabled?: boolean;
  className?: string;
}

function formatSize(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function FileUpload({ onFiles, accept, maxFiles, maxSizeMB, label, description, disabled, className }: FileUploadProps) {
  const [files, setFiles] = React.useState<File[]>([]);
  const [dragOver, setDragOver] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const addFiles = (incoming: FileList | null) => {
    if (!incoming) return;
    let arr = Array.from(incoming);
    if (accept) {
      const types = accept.split(",").map((t) => t.trim());
      arr = arr.filter((f) => types.some((t) => {
        if (t.startsWith(".")) return f.name.toLowerCase().endsWith(t.toLowerCase());
        if (t.endsWith("/*")) return f.type.startsWith(t.replace("/*", "/"));
        return f.type === t;
      }));
    }
    if (maxSizeMB) arr = arr.filter((f) => f.size <= maxSizeMB * 1024 * 1024);
    const next = [...files, ...arr];
    const limited = maxFiles ? next.slice(0, maxFiles) : next;
    setFiles(limited);
    onFiles?.(limited);
  };

  const removeFile = (index: number) => {
    const next = files.filter((_, i) => i !== index);
    setFiles(next);
    onFiles?.(next);
  };

  return (
    <div className={cn("space-y-1.5", className)}>
      {label && <label className="text-sm font-medium">{label}</label>}
      <div
        role="button"
        tabIndex={disabled ? -1 : 0}
        onClick={() => !disabled && inputRef.current?.click()}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); inputRef.current?.click(); } }}
        onDragOver={(e) => { e.preventDefault(); if (!disabled) setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragOver(false);
          if (!disabled) addFiles(e.dataTransfer.files);
        }}
        className={cn(
          "flex flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed p-8 transition-colors cursor-pointer",
          "border-input text-muted-foreground hover:border-ring hover:bg-muted/50",
          dragOver && "border-primary bg-primary/5",
          disabled && "pointer-events-none opacity-50"
        )}
      >
        <Upload className="size-8" />
        <p className="text-sm font-medium">Drag files here or click to browse</p>
        {description && <p className="text-xs">{description}</p>}
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={maxFiles !== 1}
          className="hidden"
          onChange={(e) => addFiles(e.target.files)}
        />
      </div>
      {files.length > 0 && (
        <ul className="space-y-1">
          {files.map((f, i) => (
            <li key={`${f.name}-${i}`} className="flex items-center justify-between rounded-md border px-3 py-1.5 text-sm">
              <span className="truncate">{f.name} <span className="text-muted-foreground">({formatSize(f.size)})</span></span>
              <button type="button" onClick={() => removeFile(i)} className="ml-2 p-0.5 rounded hover:bg-muted transition-colors">
                <X className="size-3.5" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export { FileUpload };
