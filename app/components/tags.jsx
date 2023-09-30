function Tag(props) {
    return(
        <span className="inline-flex cursor-default items-center w-fit hover:text-base hover:font-bold rounded-md mr-2 mb-1 px-2 py-1 text-sm font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
            {props.language}
        </span>
    )
}

export default Tag;