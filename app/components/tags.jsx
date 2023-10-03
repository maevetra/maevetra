function Tag(props) {
    return(
        <span className="inline-flex cursor-default items-center w-fit hover:text-base hover:font-bold rounded-md mr-2 mb-1 px-2 py-1 text-sm font-medium ring-1 ring-inset ring-dred">
            {props.language}
        </span>
    )
}

export default Tag;