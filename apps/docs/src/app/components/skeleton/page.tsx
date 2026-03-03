import { Skeleton } from "@sapira/ui";

export default function SkeletonPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Skeleton</h1>
        <p className="text-muted-foreground mt-2">
          Loading placeholder components. Supports text, circular, rectangular, and card variants.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Variants</h2>
        <div className="space-y-6 max-w-md">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">Text (default)</p>
            <Skeleton variant="text" />
            <Skeleton variant="text" width="75%" />
            <Skeleton variant="text" width="50%" />
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">Circular</p>
            <div className="flex gap-3">
              <Skeleton variant="circular" width={40} height={40} />
              <Skeleton variant="circular" width={48} height={48} />
              <Skeleton variant="circular" width={56} height={56} />
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">Rectangular</p>
            <Skeleton variant="rectangular" height={100} />
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">Card</p>
            <Skeleton variant="card" />
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Content Loading Example</h2>
        <div className="flex items-center gap-3 max-w-md">
          <Skeleton variant="circular" width={40} height={40} />
          <div className="flex-1 space-y-2">
            <Skeleton variant="text" width="60%" />
            <Skeleton variant="text" width="40%" />
          </div>
        </div>
      </section>
    </div>
  );
}
