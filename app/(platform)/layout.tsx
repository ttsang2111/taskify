import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "./(dashboard)/_components/navbar";
import { Toaster } from "sonner";

const DashboardLayout = ({ children }:
    { children: React.ReactNode }) => {
    return (
        <ClerkProvider>
            <Toaster/>
            {children}
        </ClerkProvider>
    )
}

export default DashboardLayout;