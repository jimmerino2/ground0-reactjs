const styleDiv = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: "1vw"
};

const styleList = {
    listStyleType: "none",
    overflow: "hidden",
    display: "inline-block",
    margin: 0, 
    padding: 0,
    fontSize: "2vw",
    fontWeight: "bold"
};

const styleHeader = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: "10px",
    justifyContent: "space-between"
}

function header(){
    const leftComp = (
        <div style = {styleDiv}>
            <img src = "favicon.ico" width = "60vw" height = "60vw"></img>
            <h1 style = {{marginLeft: "20px", fontSize: "2vw"}}>Test Title</h1>
        </div>
    )

    const rightComp = (
        <div style = {styleDiv}> 
            <ul style = {styleList}>
                <li style = {{display: "inline", marginLeft: "30px"}}>Home</li>
                <li style = {{display: "inline", marginLeft: "30px"}}>About Us</li>
                <li style = {{display: "inline", marginLeft: "30px"}}>Contact Us</li>
                <li style = {{display: "inline", marginLeft: "30px"}}>Items</li>
            </ul>
        </div>
    )

    const header = (
        <div style = {styleHeader}>
            {leftComp}
            {rightComp}
        </div>
    )
    return header;
}

export default header();