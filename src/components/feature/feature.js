

const Features = (props) => {
    const { ...prop} = props;

    return (
        <span {...prop} />
    );
}

export default Features;