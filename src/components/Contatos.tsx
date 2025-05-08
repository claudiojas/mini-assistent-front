export function Contatos() {
    const buttonsContentInfor = [
        { socialMidia: "LinkedIn", link: "https://www.linkedin.com/in/claudio-soares-dev/" },
        { socialMidia: "GitHub", link: "https://github.com/claudiojas" },
    ];

    return (
        <div className="text-center p-4">
            <h2 className="text-2xl font-semibold mb-4">Contatos:</h2>
            <div className="flex justify-center gap-4">
                {buttonsContentInfor.map((item, index) => (
                    <a
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                    >
                        {item.socialMidia}
                    </a>
                ))}
            </div>
        </div>
    );
};