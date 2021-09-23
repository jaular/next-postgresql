export default function Layout({ children }) {
  return (
    <>
      <main className="container flex-grow max-w-6xl px-4 mx-auto my-12 md:my-16 sm:px-6 lg:px-8">
        {children}
      </main>
    </>
  );
}
