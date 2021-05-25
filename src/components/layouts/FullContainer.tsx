interface Props {
    style: {},
    children: JSX.Element[] | JSX.Element
}

const FullContainer: React.FC<Props> = ({
    style,
    children
}) => {
    return (
        <div style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            ...style
        }}>
            {children}
        </div>
    )
}

export default FullContainer