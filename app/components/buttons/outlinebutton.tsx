const OutlineButton = ({text, icon}: {
    text: string,
    icon: JSX.Element,
}) => {
    return (
        <button className="inline-flex gap-3 rounded-lg border border-white relative w-full">
            <div>{text}</div>
            {icon}
        </button>
    );
}

export default OutlineButton;