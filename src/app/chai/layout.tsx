export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
 
        <div
          className=""
        >
          <h1 className="h-16 justify-center items-center text-4xl">Chai nav</h1>
          {children}
        </div>

    );
  }
