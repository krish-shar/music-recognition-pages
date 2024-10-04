import { useCallback, MouseEvent } from 'react';

interface Section {
    id: string;
    title: string;
}

interface SidebarProps {
    sections: Section[];
}

const Sidebar: React.FC<SidebarProps> = ({ sections }) => {
    const handleClick = useCallback(
        (e: MouseEvent<HTMLAnchorElement>, id: string) => {
            e.preventDefault();
            const element = document.getElementById(id);
            if (element) {
                const offset = -16; // Adjust this value as needed
                const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = elementPosition + offset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth',
                });
            }
        },
        []
    );

    return (
        <nav className="sticky top-16 left-0 h-[calc(100vh-6rem)] w-64 bg-background/95 p-4 overflow-y-auto border-r border-primary-foreground" aria-label="Sidebar">
            <ul>
                {sections.map((section) => (
                    <li key={section.id} className="mb-4">
                        <a
                            href={`#${section.id}`}
                            onClick={(e) => handleClick(e, section.id)}
                            className="group transition-all duration-300 ease-in-out text-md font-light text-accent-foreground hover:text-primary/70"
                        >
                            <span className="bg-left-bottom bg-gradient-to-r from-primary/70 to-primary/70 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                                {section.title}
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Sidebar;