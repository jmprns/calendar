const navigation = [
    { name: "React", href: "/react" },
    { name: "Livewire", href: "/livewire" }
];

export default function Example() {
    return (
        <header className="bg-cyan-800 h-[10vh]">
            <nav
                className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 h-full"
                aria-label="Top"
            >
                <div className="w-full h-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
                    <div className="flex items-center ">
                        <a
                            href="#"
                            className="text-xl font-bold text-white hover:text-teal-50"
                        >
                            Calendar
                        </a>
                    </div>
                    <div className="ml-10 space-x-4">
                        {navigation.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-base font-medium text-white hover:text-indigo-50"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>
        </header>
    );
}
