export default function AuthLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    // space n stuff
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      {children}
    </div>
  );
}
