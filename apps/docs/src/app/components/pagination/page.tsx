"use client";

import { useState } from "react";
import { Pagination } from "@sapira/ui";

export default function PaginationPage() {
  const [page, setPage] = useState(5);
  const [page2, setPage2] = useState(1);

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Pagination</h1>
        <p className="text-muted-foreground mt-2">Page navigation with ellipsis and arrow controls.</p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-medium">Default</h2>
        <div className="border rounded-lg p-6 bg-background">
          <Pagination currentPage={page} totalPages={20} onPageChange={setPage} />
          <p className="text-sm text-muted-foreground mt-3">Current page: {page}</p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-medium">Few Pages</h2>
        <div className="border rounded-lg p-6 bg-background">
          <Pagination currentPage={page2} totalPages={5} onPageChange={setPage2} />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-medium">Without First/Last</h2>
        <div className="border rounded-lg p-6 bg-background">
          <Pagination currentPage={page} totalPages={20} onPageChange={setPage} showFirst={false} showLast={false} />
        </div>
      </section>
    </div>
  );
}
