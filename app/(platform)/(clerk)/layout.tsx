import { ClerkProvider } from '@clerk/nextjs'
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <div className='h-full flex items-center justify-center'>
        {children}
        </div>
    </ClerkProvider>
  )
}