const FilledButton = ({ text, icon }: {
    text: string,
    icon: JSX.Element,
}) => {
    return (
        <button className="inline-flex gap-3 rounded-lg border border-white bg-white text-black relative w-full">
            <div>{text}</div>
            {icon}
        </button>
    );
}

export default FilledButton;