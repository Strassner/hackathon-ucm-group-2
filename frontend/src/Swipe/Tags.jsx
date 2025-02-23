

function Tags({tags}) {


    return (
        <div className="tag-container">
            {/* <h1 className="tag-header">TAGS</h1> */}
            <div className="tags">
                <h2 className="tag">{tags[0]}</h2>
                <h2 className="tag">{tags[1]}</h2>
                <h2 className="tag">{tags[2]}</h2>
            </div>
        </div>
    );
}

export default Tags;