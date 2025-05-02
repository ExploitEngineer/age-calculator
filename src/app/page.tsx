import Calculator from "@/components/Calculator";
import Tag from "@/components/Tag";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center p-4 text-zinc-800">
            <h1 className="text-3xl md:text-6xl font-bold mt-16 mb-6">Age Calculator</h1>
            <Calculator />
            <Tag />
        </main>
    );
}
