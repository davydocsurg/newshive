import { Dashboard } from "@/components";
import { NewsProvider } from "@/context";

export default function Home() {
    return (
        <>
            <NewsProvider>
                <Dashboard />
            </NewsProvider>
        </>
    );
}
