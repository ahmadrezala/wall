import { NotesProvider } from "@/providers/note-context-providers";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NotesProvider>{children}</NotesProvider>
      </body>
    </html>
  );
}
